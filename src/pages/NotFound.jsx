import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft, FaKey, FaLock, FaUnlock, FaEye, FaEyeSlash, FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
  const navigate = useNavigate()
  const [currentPuzzle, setCurrentPuzzle] = useState(0)
  const [keyFound, setKeyFound] = useState(false)
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [lockPosition, setLockPosition] = useState({ x: 0, y: 0 })
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [puzzleSolved, setPuzzleSolved] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [showAlert, setShowAlert] = useState(true)

  // Randomized system error logs featuring name for excitement
  const systemLogs = useMemo(() => {
    const logs = [
      "[ALERT] Unauthorized access detected → USER: CHUKKA PRAKASH REDDY",
      "[FIREWALL] Rule breach attempt logged at /404 endpoint",
      "[TRACE] Injected payload signature matched: PRAKASH@NEON",
      "[KERNEL] Panic avoided. Sandbox engaged for user: CHUKKA PRAKASH",
      "[IDS] Zero-day simulation triggered by name-match heuristic",
      "[VAULT] Key escrow locked. Drag key to physical lock to exit",
      "[MATRIX] Route anomaly. Handshake failed for PRAKASH › redirect pending"
    ]
    return logs.sort(() => Math.random() - 0.5).slice(0, 4)
  }, [])

  const puzzles = [
    {
      id: 1,
      title: "Binary Decoder",
      hint: "Convert binary to ASCII. Look for patterns in the code.",
      code: "01001000 01100101 01101100 01101100 01101111",
      answer: "Hello",
      keyLocation: "hidden in the decoded message",
      terminal: [
        "$> decode_binary 01001000 01100101 01101100 01101100 01101111",
        "Processing...",
        "Result: [HIDDEN]",
        "$> echo 'Key location: Check the decoded result'"
      ]
    },
    {
      id: 2,
      title: "Caesar Cipher",
      hint: "Shift each letter by 3 positions. ROT13 won't work here.",
      code: "Khoor Zruog",
      answer: "Hello World",
      keyLocation: "in the decrypted text",
      terminal: [
        "$> caesar_decrypt Khoor Zruog",
        "Shift: 3",
        "Decrypting...",
        "Result: [HIDDEN]",
        "$> echo 'Key location: Within the decrypted message'"
      ]
    },
    {
      id: 3,
      title: "Hex Decoder",
      hint: "Convert hexadecimal to text. Each pair represents a character.",
      code: "48656C6C6F20576F726C64",
      answer: "Hello World",
      keyLocation: "in the hex decoded string",
      terminal: [
        "$> hex_decode 48656C6C6F20576F726C64",
        "Converting hex to ASCII...",
        "Result: [HIDDEN]",
        "$> echo 'Key location: Check the decoded output'"
      ]
    },
    {
      id: 4,
      title: "Base64 Decoder",
      hint: "Decode the base64 string. Look for the hidden message.",
      code: "SGVsbG8gV29ybGQ=",
      answer: "Hello World",
      keyLocation: "in the base64 decoded text",
      terminal: [
        "$> base64_decode SGVsbG8gV29ybGQ=",
        "Decoding base64...",
        "Result: [HIDDEN]",
        "$> echo 'Key location: Within the decoded content'"
      ]
    },
    {
      id: 5,
      title: "Morse Code",
      hint: "Decode the morse code. Spaces separate letters.",
      code: ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
      answer: "Hello World",
      keyLocation: "in the morse decoded message",
      terminal: [
        "$> morse_decode .... . .-.. .-.. --- / .-- --- .-. .-.. -..",
        "Translating morse code...",
        "Result: [HIDDEN]",
        "$> echo 'Key location: Check the translated text'"
      ]
    }
  ]

  useEffect(() => {
    // Cinematic intro + short beep
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const beep = () => {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'square'
      o.frequency.value = 880
      g.gain.value = 0.05
      o.connect(g)
      g.connect(ctx.destination)
      o.start()
      setTimeout(() => o.stop(), 120)
    }
    setTimeout(() => beep(), 200)
    const introTimer = setTimeout(() => setShowIntro(false), 1600)
    const alertTimer = setTimeout(() => setShowAlert(false), 6000)

    // Randomly select a puzzle
    const randomPuzzle = Math.floor(Math.random() * puzzles.length)
    setCurrentPuzzle(randomPuzzle)
    
    // Set random positions for key and lock
    setKeyPosition({
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100)
    })
    
    setLockPosition({
      x: window.innerWidth / 2 - 50,
      y: window.innerHeight / 2 + 100
    })
    return () => {
      clearTimeout(introTimer)
      clearTimeout(alertTimer)
      ctx && ctx.close && ctx.close()
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && userInput.toLowerCase() === puzzles[currentPuzzle].answer.toLowerCase()) {
      setPuzzleSolved(true)
      setKeyFound(true)
      setShowHint(false)
    }
  }

  const handleKeyDrag = (e) => {
    if (!keyFound) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.width / 2
    const y = e.clientY - rect.height / 2
    
    setKeyPosition({ x, y })
  }

  const handleKeyDrop = () => {
    const distance = Math.sqrt(
      Math.pow(keyPosition.x - lockPosition.x, 2) + 
      Math.pow(keyPosition.y - lockPosition.y, 2)
    )
    
    if (distance < 100) {
      setIsUnlocked(true)
      setTimeout(() => {
        navigate('/home')
      }, 2000)
    }
  }

  const currentPuzzleData = puzzles[currentPuzzle]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-darkBg relative overflow-hidden">
      {/* Cinematic Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-neonGreen text-sm font-mono mb-2">INITIALIZING SECURE SHELL...</div>
              <div className="glitch text-3xl md:text-5xl font-bold mb-2" data-text="CHUKKA PRAKASH REDDY">CHUKKA PRAKASH REDDY</div>
              <div className="text-neonCyan text-sm font-mono">IDENTITY VERIFIED · ACCESS DENIED · ROUTE: /404</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Red Alert Banner */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-40 bg-red-600/15 border-b border-red-500/40 backdrop-blur-sm"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 text-red-400">
              <FaExclamationTriangle className="shrink-0" />
              <span className="text-xs md:text-sm font-mono tracking-wide">
                ALERT: Unauthorized request detected for user <span className="text-red-300">CHUKKA PRAKASH REDDY</span>. TRACE ID #{Math.floor(Math.random()*999999)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Glitch Effect 404 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-4">
            <span className="glitch" data-text="404">404</span>
          </h1>
        </motion.div>

        {/* Hacking Challenge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neonGreen mb-4">
            🔒 System Locked - Hacking Challenge Required
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            The system has detected unauthorized access by <span className="text-neonCyan font-semibold">CHUKKA PRAKASH REDDY</span>.
            Solve the puzzle, retrieve the key, and unlock the exit.
          </p>
        </motion.div>

        {/* Puzzle Container */}
        <motion.div
          className="bg-black border border-neonGreen/30 rounded-lg p-6 mb-8 font-mono text-left max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-neonGreen text-lg font-bold">
              Challenge: {currentPuzzleData.title}
            </h3>
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-neonCyan hover:text-neonGreen transition-colors"
            >
              {showHint ? <FaEyeSlash /> : <FaEye />} {showHint ? 'Hide' : 'Show'} Hint
            </button>
          </div>

          {showHint && (
            <motion.div
              className="mb-4 p-3 bg-neonGreen/10 border border-neonGreen/30 rounded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <p className="text-neonGreen text-sm">
                💡 Hint: {currentPuzzleData.hint}
              </p>
            </motion.div>
          )}

          <div className="space-y-2 mb-4">
            {currentPuzzleData.terminal.map((line, index) => (
              <div key={index} className="text-gray-300 text-sm">
                {line}
              </div>
            ))}
            {/* Dynamic system logs with user's name for excitement */}
            <div className="mt-3 pt-3 border-t border-neonGreen/10">
              {systemLogs.map((log, i) => (
                <div key={`log-${i}`} className="text-red-400/80 text-xs">
                  {log}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-neonCyan mb-2">Code to decode:</p>
            <div className="bg-darkGray p-3 rounded border border-neonGreen/30">
              <code className="text-neonGreen">{currentPuzzleData.code}</code>
            </div>
          </div>

          {!puzzleSolved ? (
            <div className="flex items-center space-x-2">
              <span className="text-neonCyan">$</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter decoded result..."
                className="flex-1 bg-transparent border-none outline-none text-neonGreen placeholder-gray-500"
                autoFocus
              />
            </div>
          ) : (
            <motion.div
              className="text-neonGreen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Puzzle solved! Key location: {currentPuzzleData.keyLocation}
            </motion.div>
          )}
        </motion.div>

        {/* Lock */}
        <motion.div
          className="absolute"
          style={{
            left: lockPosition.x,
            top: lockPosition.y,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center ${
            isUnlocked ? 'border-neonGreen bg-neonGreen/20' : 'border-red-500 bg-red-500/20'
          }`}>
            {isUnlocked ? (
              <FaUnlock className="text-neonGreen text-2xl" />
            ) : (
              <FaLock className="text-red-500 text-2xl" />
            )}
          </div>
        </motion.div>

        {/* Draggable Key */}
        <AnimatePresence>
          {keyFound && (
            <motion.div
              className="absolute cursor-grab active:cursor-grabbing z-20"
              style={{
                left: keyPosition.x,
                top: keyPosition.y,
              }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              drag
              dragMomentum={false}
              onDrag={handleKeyDrag}
              onDragEnd={handleKeyDrop}
              whileDrag={{ scale: 1.2, rotate: 10 }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg hover:shadow-yellow-400/50 transition-shadow">
                <FaKey className="text-black text-xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Message */}
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-darkGray border border-neonGreen rounded-lg p-8 text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-neonGreen mb-2">
                  System Unlocked!
                </h3>
                <p className="text-gray-300 mb-4">
                  Redirecting to home page...
                </p>
                <div className="w-full bg-darkGray rounded-full h-2">
                  <motion.div
                    className="bg-neonGreen h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fallback Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/home"
              className="flex items-center space-x-2 px-6 py-3 bg-neonGreen text-black font-bold rounded-lg hover:bg-neonCyan transition-all duration-300 hover-effect"
            >
              <FaHome />
              <span>Skip Challenge</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-6 py-3 border-2 border-neonCyan text-neonCyan font-bold rounded-lg hover:bg-neonCyan hover:text-black transition-all duration-300 hover-effect"
            >
              <FaArrowLeft />
              <span>Go Back</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Matrix-style Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neonGreen rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NotFound
