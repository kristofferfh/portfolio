"use client"
import styles from "./projectcard.module.css"
import Image from "next/image"
import {motion} from "framer-motion"

// todo, hover show link: repo + live

type ProjectCardProps = {
  props: {
    id: number
    title: string
    link: {
      repo: string
      live: string
    }
    desc: {
      short: string
      long: string
    }
    img: string
    tags: string[]
  }
}

export const ProjectCard = ({props}:ProjectCardProps) => {
 return (
  <motion.div 
  className={styles.projectcard}
  >
    <h2>{props.title}</h2>
    <Image src={`/blog/${props.img}`} alt="" height={500} width={500} />
    <p>{props.desc.short}</p>
    <span className={styles.tags}>{props.tags.map((tag)=>(<a key={tag}>{tag}</a>))}</span>
  </motion.div>
 )
}