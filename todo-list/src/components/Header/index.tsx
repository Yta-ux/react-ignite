import { Logo } from "../Logo";
import styles from "./style.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
}
