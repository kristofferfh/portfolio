import Link from "next/link"
import Image from "next/image"
import logo from "@/media/img/finn.png"
import style from "./header.module.css"

const HeaderEl = () => {
 return (
  <header className={style.header}>
   <div id={style.logo}>
    <Link href="/">
     <Image
      src={logo}
      alt="Picture of finn the human as a logo" 
     />
    </Link>
   </div>
   <nav className={style.navigation}>
    <Link href="/projects">projects</Link>
    <a target="_blank" href="https://github.com/kristofferfh">github</a>
    {/* <Link href="/snippets">snippets</Link>
    <Link href="/about">about</Link> */}
   </nav>
  </header>
 )
}

export default HeaderEl