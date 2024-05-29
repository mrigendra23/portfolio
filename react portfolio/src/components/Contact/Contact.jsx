import styles from "./Contact.module.css";
import gmail from "/emailImg.png";
import linkedln from "/linkedlnImg.png";
import github from "/githubImg.png";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={gmail} alt="Email icon"/>
          <a href="mrigendrasingh845@gmail.com">mrigendrasingh845@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedln}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mrigendra-singh-793a1527b/">https://www.linkedin.com/in/mrigendra-singh-793a1527b/</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/mrigendra23">https://github.com/mrigendra23</a>
        </li>
      </ul>
    </footer>
  );
};

export  default Contact