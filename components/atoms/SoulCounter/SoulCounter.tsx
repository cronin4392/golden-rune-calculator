import SCStyles from "./SoulCounter.module.css";
import type { SoulCounterReturn as Props } from "./useSoulCounter";
import { allRunes } from "../../../constants/runes";
import { runeTotal } from "../../../utils/calculate";
import StickyFooter from "../StickyFooter";

export default ({
  increase,
  decrease,
  reset,
  runeCount,
  setExactCount,
}: Props) => (
  <>
    <table className={SCStyles.table}>
      <tbody>
        {allRunes.map(({ id, label }) => {
          const totalRunes = runeCount.find((r) => r.id === id)?.count;
          return (
            <tr key={id}>
              <td>
                <div className={SCStyles.label}>{label}</div>
              </td>
              <td>
                <div className={SCStyles.controls}>
                  <button
                    className={SCStyles.button}
                    disabled={!totalRunes}
                    onClick={decrease(id)}
                  >
                    -
                  </button>
                  <button className={SCStyles.button} onClick={increase(id)}>
                    +
                  </button>
                  <input
                    className={SCStyles.input}
                    type="number"
                    onChange={setExactCount(id)}
                    value={totalRunes}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <StickyFooter total={runeTotal(runeCount)} reset={reset} />
  </>
);
