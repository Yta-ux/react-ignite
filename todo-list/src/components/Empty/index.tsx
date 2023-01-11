import styles from "./style.module.css";
import binder from "../../assets/binder.svg";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={binder} alt="ícone de um fichario" />
      <div className={styles.description}>
        <h2>
          <strong>Você ainda não tem tarefas cadastradas</strong>
        </h2>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
