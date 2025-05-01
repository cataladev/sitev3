'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaMedal } from 'react-icons/fa6'

// Inline project data
const projects = [
  {
    id: 1,
    name: 'kmodo',
    desc: 'Full-stack hackathon management tool built with Next.js, Tailwind, tRPC, and Prisma.',
    imgSrc: '/images/kmodo.png',
    url: 'https://devpost.com/software/kmodo',
    variant: 'projectlaunch',
    tags: ['Next.js', 'Prisma', 'tRPC'],
  },
  {
    id: 2,
    name: 'Riffs',
    desc: 'Web app converting hummed melodies into editable guitar tabs.',
    imgSrc: '/images/riffsicon.png',
    url: 'https://riffs-three.vercel.app',
    variant: 'bitcamp',
    tags: ['Pitch Detection', 'Midi'],
  },
  {
    id: 3,
    name: 'SightSync',
    desc: 'Assistive desktop tool using real-time eye-tracking and voice commands.',
    imgSrc: '/images/SightSync.png',
    url: 'https://devpost.com/software/sightsync-iztcrl',
    variant: 'normal',
    tags: ['OpenCV', 'Mediapipe'],
  },
  {
    id: 4,
    name: 'Spark-A-Hack',
    desc: 'Uses AI to suggest tailored project ideas to hackathon participants based on their interests, skills, and challenges they want to tackle.',
    imgSrc: '/images/spark-a-hack.png',
    url: 'https://devpost.com/software/spark-a-hack',
    variant: 'normal',
    tags: ['React', 'Tailwind'],
  },
  {
    id: 5,
    name: 'Hack Tracker',
    imgSrc: '/images/hack-tracker.png',
    desc: 'A simplified, customized experience to assist users in finding hackathons that match their requirements and passions.',
    url: 'https://devpost.com/software/hack-tracker',
    variant: 'normal',
    tags: ['React', 'Tailwind'],
  },
  {
    id: 6,
    name: 'Night of Knights',
    imgSrc: '/images/night-of-knights.png',
    desc: 'Night of Knights was my first ever large-scale project, it was done as a capstone project senior year of high school.',
    url: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights',
    variant: 'normal',
    tags: ['Unity', 'C#', 'Git'],
  },
]

export default function ProjectsPage() {
  return (
    <main className="h-screen overflow-hidden bg-black text-purple-400">
      <h2 id="projects" className="text-3xl font-bold mb-6 text-center">
        Projects :D
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-4">
        {projects.map((proj) => (
          <li
            key={proj.id}
            className="h-56 rounded-lg hover:shadow-lg transition-shadow overflow-hidden border-2 border-purple-400 m-2"
          >
            <Link href={proj.url} target="_blank" className="block w-full h-full">
              <div className="flex h-full ">
                <div className="p-4 w-1/3 relative h-full m-2">  
                  <Image
                    src={proj.imgSrc}
                    alt={proj.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{proj.name}</h3>
                      {proj.variant === 'bitcamp' && (
                        <span className="flex items-center text-yellow-400 font-bold">
                          <FaMedal className="mr-1" title="Bitcamp Winner" />
                          Winner
                        </span>
                      )}
                      {proj.variant === 'projectlaunch' && (
                        <span className="flex items-center text-green-400 font-bold">
                          <FaMedal className="mr-1" />Winner
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-gray-300 text-sm">{proj.desc}</p>
                  </div>
                  {proj.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {proj.tags.map((tag) => (
                        <li
                          key={tag}
                          className="bg-gray-700 text-white text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
