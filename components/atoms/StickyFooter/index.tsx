import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";

interface Props {
  needed: number;
  total: number;
  held: number;
  reset: () => void;
  setOpenOverlay: Dispatch<SetStateAction<boolean>>;
}

enum OverUnder {
  Over = "Over",
  Under = "Under",
  Equal = "Equal",
}

const getOverUnder = (value: number): OverUnder => {
  if (value > 0) {
    return OverUnder["Under"];
  }
  if (value < 0) {
    return OverUnder["Over"];
  }
  return OverUnder["Equal"];
};

const getSign = (overUnder: OverUnder): string => {
  if (overUnder === OverUnder["Over"]) {
    return "+";
  }
  return "";
};

const StickyFooter = ({
  needed,
  total,
  held,
  reset,
  setOpenOverlay,
}: Props) => {
  const overUnder = getOverUnder(needed);
  const neededSign = getSign(overUnder);
  const neededText = `${neededSign}${-1 * needed}`;
  return (
    <div className={styles.StickyFooter}>
      <div className={styles.Container}>
        <button className={styles.Button} onClick={reset}>
          reset
        </button>
        <div className={styles.Section}>
          <button
            className={styles.Button}
            onClick={() => setOpenOverlay(true)}
          >
            edit
          </button>
          <div className={styles.Values}>
            <div className={styles.Value}>
              <div className={styles.ValueLabel}>Total:</div>
              <div className={styles.ValueValue}>{held + total}</div>
            </div>
            <div className={styles.Value}>
              <div className={styles.ValueLabel}>Needed:</div>
              <div className={styles.ValueValue} data-overunder={overUnder}>
                {neededText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
