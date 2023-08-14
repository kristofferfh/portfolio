import Link from "next/link"
import styles from "./footer.module.css"
import waves from "@/media/svg/layered-waves-haikei.svg"
import socialIcons from "@/constants/socialMediaIcons"

// https://app.haikei.app/

const FooterEl = () => {
 return (
  <footer className={styles.footer} style={{backgroundImage: `url(${waves.src})`}}>
   <div className={styles.socials}>
    <a href="https://twitter.com/username" target="_blank"><img src={socialIcons.twitter.src} alt="link to my twitter" /></a>
    <a href="https://stackoverflow.com/users/0" target="_blank"><img src={socialIcons.stackoverflow.src} alt="link to my stackoverflow" /></a>
    <a href="https://github.com/username" target="_blank"><img src={socialIcons.github.src} alt="link to my github" /></a>
    <a href="https://www.youtube.com/usrnme" target="_blank"><img src={socialIcons.youtube.src} alt="link to my youtube" /></a>
    <a href="https://discord.com/user/username" target="_blank"><img src={socialIcons.discord.src} alt="link to my discord server" /></a>
   </div>
   {/* <div className={styles.section}>
    <div className={styles.about}>
     <p>My name is Kristoffer and I'm a backend developer from Norway</p>
    </div>
    <span></span>
    <div>icons from <Link href="https://icons8.com">icons8</Link></div>
   </div> */}
  </footer>
 )
}

export default FooterEl