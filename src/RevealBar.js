import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const RevealBar = ({ children, width = "100%" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -300 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: .75, delay:.75}}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { bottom: 0 },
          visible: { bottom: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, delay:.25}}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgb(20, 45, 71)',
          zIndex: 40,
        }}
      ></motion.div>
    </div>
  )
}
