import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const RevealHorizontal = ({ children, width = "100%" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -500 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
