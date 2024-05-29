import { getImageUrl } from "../../Utils"
import styles from "./Hero.module.css"
const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title} >Hi , I’m Mrigendra</h1>
        <p className={styles.description}>A full stack developer portfolio is a collection of projects and that showcase a developer’s skills and expertise in both front-end and back-end development. </p>
        <a href = "mrigendrasingh845@gmail.com " className={styles.contactBtn}>  Contact Us </a>
    </div>
    <img src ={getImageUrl("3650583.jpg")} alt="hero image"  className={styles.heroImg}/>

    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>

   </section>

  )
}

export default Hero