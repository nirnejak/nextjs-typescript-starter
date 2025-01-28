import * as React from "react"

interface HEIGHT_HOOK {
  ref: React.RefObject<HTMLDivElement | null>
  height: number
}

const useDynamicHeight = (): HEIGHT_HOOK => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const rect = entry.target.getBoundingClientRect()
        setHeight(rect.height)
      }
    })

    if (ref.current !== null) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, height }
}

export default useDynamicHeight
