import logo from "../../assets/rocket.svg";
import styles from "./style.module.css";

export function Logo() {
  return (
    <h1 className={styles.container}>
      <img src={logo} alt="imagem de foguete" />
      <div className={styles.title}>
        <span>to</span>
        <span>do</span>
      </div>
    </h1>
  );
}
