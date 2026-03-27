import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StudioEmbedPage() {
  useEffect(() => {
    // Redirect to the standalone Sanity Studio
    // In production, this will be hosted separately
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
    if (projectId && projectId !== 'REPLACE_WITH_YOUR_PROJECT_ID') {
      // Redirect to Sanity hosted studio
      window.location.href = `https://${projectId}.sanity.studio`
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-4 py-4 sm:px-5 md:px-8 md:py-5">
          <Link to="/" className="shrink-0 text-xs font-semibold leading-tight text-white sm:text-sm">
            INDUS MOTOR GROUP
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Sanity Studio</h1>
          
          <p className="text-zinc-400">
            Redirecting to Sanity Studio...
          </p>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-8">
            <p className="mb-4 text-sm text-zinc-400">
              If you are not redirected automatically, you can access Sanity Studio here:
            </p>
            <a
              href={`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.sanity.studio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              Open Sanity Studio →
            </a>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h3 className="mb-4 text-sm font-semibold text-white">For Local Development</h3>
              <p className="mb-2 text-xs text-zinc-400">Navigate to the studio directory and run:</p>
              <p className="font-mono text-xs text-zinc-300 bg-zinc-900 p-3 rounded">
                cd studio && npm run dev
              </p>
            </div>
          </div>

          <Link to="/" className="inline-block rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-100 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
