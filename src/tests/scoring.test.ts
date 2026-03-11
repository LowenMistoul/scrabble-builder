import { calculateWordScore } from "../engine/scoring";

describe("Scoring Engine", () => {

  test("scores a simple word", () => {
    const result = calculateWordScore("WOOD");
    expect(result).toBe(8);
  });

  test("scores a single letter", () => {
    const result = calculateWordScore("A");
    expect(result).toBe(1);
  });

  test("scores repeated letters", () => {
    const result = calculateWordScore("AAA");
    expect(result).toBe(3);
  });

  test("scores high value letters", () => {
    const result = calculateWordScore("QUIZ");
    expect(result).toBe(22);
  });

});