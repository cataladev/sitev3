'use client'

export function Icons({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col flex-wrap gap-y-2 pt-2">
      <h2 className="text-md text-white font-bold">
        {title}
      </h2>
      <div className="flex flex-row flex-wrap gap-2 text-white/50">
        {children}
      </div>
    </div>
  )
}