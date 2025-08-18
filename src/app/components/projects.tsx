'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaMedal } from 'react-icons/fa6'

const projects = [
  {
    id: 7,
    name: 'pheratech',
    desc: 'company website for pheratech, a startup technology company.',
    imgSrc: '/images/pheratech.svg',
    url: 'https://pheratech.com',
    variant: 'normal',
    tags: ['react', 'tailwind'],
  },
  {
    id: 6,
    name: 'kmodo',
    desc: 'full-stack hackathon management tool built with next.js, tailwind, trpc, and prisma.',
    imgSrc: '/images/kmodo.png',
    url: 'https://devpost.com/software/kmodo',
    variant: 'projectlaunch',
    tags: ['next.js', 'prisma', 'trpc'],
  },
  {
    id: 5,
    name: 'riffs',
    desc: 'web app converting hummed melodies into editable guitar tabs.',
    imgSrc: '/images/riffsicon.png',
    url: 'https://riffs-three.vercel.app',
    variant: 'bitcamp',
    tags: ['pitch detection', 'midi'],
  },
  {
    id: 4,
    name: 'sightsync',
    desc: 'assistive desktop tool using real-time eye-tracking and voice commands.',
    imgSrc: '/images/SightSync.png',
    url: 'https://devpost.com/software/sightsync-iztcrl',
    variant: 'normal',
    tags: ['opencv', 'mediapipe'],
  },
  {
    id: 3,
    name: 'spark-a-hack',
    desc: 'uses ai to suggest tailored project ideas to hackathon participants based on their interests, skills, and challenges they want to tackle.',
    imgSrc: '/images/spark-a-hack.png',
    url: 'https://devpost.com/software/spark-a-hack',
    variant: 'normal',
    tags: ['react', 'tailwind'],
  },
  {
    id: 2,
    name: 'hack tracker',
    imgSrc: '/images/hack-tracker.png',
    desc: 'a simplified, customized experience to assist users in finding hackathons that match their requirements and passions.',
    url: 'https://devpost.com/software/hack-tracker',
    variant: 'normal',
    tags: ['react', 'tailwind'],
  },
  {
    id: 1,
    name: 'night of knights',
    imgSrc: '/images/night-of-knights.png',
    desc: 'night of knights was my first ever large-scale project, it was done as a capstone project senior year of high school.',
    url: 'https://play.unity.com/en/games/27ee33fa-e1e3-4178-8acf-9e1f37546fd0/night-of-knights',
    variant: 'normal',
    tags: ['unity', 'c#', 'git'],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-y-auto overflow-x-hidden text-purple-400 pb-8">
      <h2 id="projects" className="text-3xl font-bold mb-6 text-center lowercase animate-fade-in">projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-2 sm:px-4">
        {projects
          .sort((a, b) => b.id - a.id)
          .map((proj) => (
          <li key={proj.id} className="flex flex-col h-auto sm:h-56 rounded-lg hover:shadow-lg transition-shadow overflow-hidden border-2 border-purple-400 mb-4 bg-black bg-opacity-90 animate-fade-in">
            <Link href={proj.url} target="_blank" className="block w-full h-full">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="pl-4 pr-3 pt-3 pb-3 sm:p-3 w-full h-32 sm:h-auto sm:w-1/3 relative flex-shrink-0">
                  <Image 
                    src={proj.imgSrc} 
                    alt={proj.name} 
                    fill 
                    className="object-contain" 
                    sizes="(max-width: 768px) 100vw, 33vw, 120px" 
                  />
                </div>
                <div className="w-full sm:w-2/3 p-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white lowercase">{proj.name}</h3>
                      {proj.variant === 'bitcamp' && (
                        <span className="flex items-center text-yellow-400 font-bold lowercase text-xs">
                          <FaMedal className="mr-1" title="bitcamp winner" />winner
                        </span>
                      )}
                      {proj.variant === 'projectlaunch' && (
                        <span className="flex items-center text-green-400 font-bold lowercase text-xs">
                          <FaMedal className="mr-1" />winner
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-gray-300 text-xs sm:text-sm lowercase">{proj.desc}</p>
                  </div>
                  {proj.tags && (
                    <ul className="mt-2 flex flex-wrap gap-1">
                      {proj.tags.map((tag) => (
                        <li key={tag} className="bg-gray-800 text-purple-300 text-xs px-2 py-0.5 rounded lowercase">{tag}</li>
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