import styles from "./styles.module.css";

interface Props {
  total: number;
  reset: () => void;
}

export default ({ total, reset }: Props) => (
  <div className={styles.StickyFooter}>
    <div className={styles.Container}>
      <button className={styles.Button} onClick={reset}>
        reset
      </button>
      <div>Total: {total}</div>
    </div>
  </div>
);
