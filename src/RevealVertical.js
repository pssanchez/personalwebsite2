import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const RevealVertical = ({ children, width = "100%" }) => {
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
          hidden: { opacity: 1, y: 200 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay:.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
