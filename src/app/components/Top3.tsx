"use client";

import { useEffect, useState } from "react";
import { Album as AlbumIcon } from "lucide-react";
import Image from "next/image";
import { getTopAlbums, type LastFmTopAlbum } from "../lib/lastfm";

export default function Top3() {
  const [albums, setAlbums] = useState<LastFmTopAlbum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const top = await getTopAlbums(3);
        setAlbums(top);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-md m-4 p-6 border border-gray-600 rounded-lg animate-pulse">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-800 rounded my-2 w-3/4" />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md m-4 p-6 border border-white bg-black bg-opacity-100 rounded-lg animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <AlbumIcon className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-semibold lowercase">top 3 albums</h3>
      </div>
      <ul className="space-y-6">
        {albums.map((album, idx) => {
          const img = album.image.find((img) => img.size === "medium")?.["#text"];
          return (
            <li key={`${album.name}-${album.artist.name}`} className="flex items-center gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                {img ? (
                  <Image src={img} alt={album.name} width={48} height={48} className="w-full h-full object-cover rounded" unoptimized />
                ) : (
                  <div className="w-full h-full bg-gray-700 rounded" />
                )}
              </div>

              <div className="flex flex-col text-left">
                <span className="font-medium text-base lowercase">{idx + 1}. {album.name}</span>
                <span className="text-gray-400 text-sm lowercase">by {album.artist.name} • {album.playcount} plays</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}