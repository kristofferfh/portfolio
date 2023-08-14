"use client"
import { motion } from "framer-motion"
import styles from "./hero.module.css"
import polygon from "@/media/svg/polygon-scatter-haikei.svg"

// https://www.framer.com/motion/component/

export const Hero = () => {
 return (
  <section 
   className={styles.hero}
   style={{backgroundImage: `url(${polygon.src})`}}
  >
   <motion.div
      initial={{opacity:0, x:50}}
      animate={{opacity:1, x:0}}
      transition={{duration:1}}>
    <h1><span className={styles.code}>&lt;Hello World!&gt;</span> I'm Kristoffer</h1>
    <p>I'm currently studying webdevelopment @kodehode</p>
   </motion.div>
  </section>
 )
}