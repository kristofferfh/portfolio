
import { ProjectCard } from "../../components/projectcard/projectcard"
import blogData from "@/data/projects.json"
import styles from "./projects.module.css"

const ProjectsPage = () => {
 return (
  <div id={styles.blog}>
   {blogData.map((item)=> (
    <ProjectCard key={item.id} props={item}/>
   ))}
  </div>
 )
}

export default ProjectsPage