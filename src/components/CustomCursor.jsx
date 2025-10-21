import { useEffect } from 'react'

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const addHoverEffect = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.classList.contains('hover-effect')) {
        cursor.classList.add('hover')
      } else {
        cursor.classList.remove('hover')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', addHoverEffect)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', addHoverEffect)
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor)
      }
    }
  }, [])

  return null
}

export default CustomCursor
