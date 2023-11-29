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
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay:0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { right: 0 },
          visible: { right: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: '#dee4ef',
          zIndex: 40,
        }}
      ></motion.div>
    </div>
  )
}
