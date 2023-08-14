"use client"
import styles from "./projectcard.module.css"
import {motion} from "framer-motion"

// todo, hover show link: repo + live

export const ProjectCard = ({props}) => {
 return (
  <motion.div 
  className={styles.projectcard}
  
  >
    <h2>{props.title}</h2>
    <img src={`blog/${props.img}`} alt="" />
    <p>{props.desc.short}</p>
    <span className={styles.tags}>{props.tags.map((tag)=>(<a key={tag}>{tag}</a>))}</span>
  </motion.div>
 )
}