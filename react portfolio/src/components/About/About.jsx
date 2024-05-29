import { getImageUrl } from "../../Utils"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
<h2 className={styles.title}>About</h2>
<div  className={styles.content}>
    <img src={getImageUrl("3640317.jpg")}   alt="Me sitting with a laptop"
          className={styles.aboutImage}/>
    <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("cursorImg.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I’m a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("image 3.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("image 4.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
            </ul>
</div>

    </section>
  )
}

export default About