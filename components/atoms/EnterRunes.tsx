import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { Routes } from "../../infrastructure/routes";
import NumberInput from "./NumberInput";

interface Props {
  nextRoute: Function;
}

export default ({ nextRoute }: Props) => {
  const [heldRuneCount, setHeldRuneCount] = useState<Undefinable<number>>();
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(nextRoute(heldRuneCount as number));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NumberInput
          label="Number of Currently Held Runes"
          value={heldRuneCount}
          setter={setHeldRuneCount}
        />
        <button
          disabled={
            (heldRuneCount && heldRuneCount <= 0) || !Boolean(heldRuneCount)
          }
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};