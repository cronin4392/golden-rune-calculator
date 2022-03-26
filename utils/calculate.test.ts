import { calculateHighestFirst } from "./calculate";
import { getRuneByName, RuneLabel } from "../constants/runes";

/*
  0 souls
  want 400
  have 1 single Golden Rune (2)
  should return 1x Golden Rune (2)
*/
test.skip("given 1 rune that equals the value, we should return that rune", () => {
  const result = calculateHighestFirst(0, 400, [
    { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
  ]);

  const expected = {
    runes: [
      {
        ...getRuneByName(RuneLabel.GoldenRune2),
        count: 1,
      },
    ],
    difference: 0,
  };
  expect(result).toStrictEqual(expected);
});

test.skip("given 1 rune, and a higher desired amount, we should return the difference", () => {
  const result = calculateHighestFirst(0, 800, [
    { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
  ]);

  const expected = {
    runes: [
      {
        ...getRuneByName(RuneLabel.GoldenRune2),
        count: 1,
      },
    ],
    difference: 400,
  };
  expect(result).toStrictEqual(expected);
});

test.skip(
  "given 2 runes with one that is equal to our desired amount, " +
    "we should return the biggest rune",
  () => {
    const result = calculateHighestFirst(0, 800, [
      { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
      { ...getRuneByName(RuneLabel.GoldenRune3), count: 1 },
    ]);

    const expected = {
      runes: [
        {
          ...getRuneByName(RuneLabel.GoldenRune3),
          count: 1,
        },
      ],
      difference: 0,
    };
    expect(result).toStrictEqual(expected);
  }
);

test.skip("given 1 rune that is divisible by the desired amount, return the divisor", () => {
  const result = calculateHighestFirst(0, 800, [
    { ...getRuneByName(RuneLabel.GoldenRune1), count: 4 },
  ]);

  const expected = {
    runes: [
      {
        ...getRuneByName(RuneLabel.GoldenRune1),
        count: 4,
      },
    ],
    difference: 0,
  };
  expect(result).toStrictEqual(expected);
});

// next test case, optimize a bit more
test("given 1 rune that is divisible by the desired amount, return the divisor", () => {
  const result = calculateHighestFirst(3434, 4144, [
    { ...getRuneByName(RuneLabel.GoldenRune1), count: 1 },
    { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
    { ...getRuneByName(RuneLabel.GoldenRune3), count: 1 },
  ]);

  const expected = {
    runes: [
      { ...getRuneByName(RuneLabel.GoldenRune1), count: 1 },
      {
        ...getRuneByName(RuneLabel.GoldenRune3),
        count: 1,
      },
    ],
    difference: -290,
  };
  expect(result).toStrictEqual(expected);
});

test.skip("given 2 runes that over shoot our desired amount, we should return the negative difference", () => {
  const result = calculateHighestFirst(0, 1000, [
    { ...getRuneByName(RuneLabel.GoldenRune2), count: 1 },
    { ...getRuneByName(RuneLabel.GoldenRune3), count: 1 },
  ]);

  const expected = {
    runes: [
      {
        ...getRuneByName(RuneLabel.GoldenRune3),
        count: 1,
      },
      {
        ...getRuneByName(RuneLabel.GoldenRune2),
        count: 1,
      },
    ],
    difference: -200,
  };

  expect(result).toStrictEqual(expected);
});
/*
 * 0 Souls
 * Want 100 souls
 * Have no runes
 * should return no runes and a difference of 100
 * */
test.skip("should return no runes and a difference of 100", () => {
  expect(calculateHighestFirst(0, 100, [])).toEqual({
    runes: [],
    difference: 100,
  });
});
