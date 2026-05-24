'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: () => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/20">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent animate-pulse" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
