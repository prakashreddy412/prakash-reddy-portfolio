import { useState, useEffect } from 'react'

const Typewriter = ({ texts, speed = 100, delay = 2000, className = '' }) => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length]
      const updatedText = isDeleting
        ? currentText.substring(0, text.length - 1)
        : currentText.substring(0, text.length + 1)

      setText(updatedText)

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, texts, speed, delay])

  return (
    <span className={className}>
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

export default Typewriter
