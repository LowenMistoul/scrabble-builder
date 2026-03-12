import { solveRackAndBoard } from "../engine/solver";

describe("solver", () => {

  test("find words using rack", () => {
    const results = solveRackAndBoard("WOOD");
    const words = results.map(r => r.word);
    expect(words).toContain("WOOD");
    expect(words.length).toBeGreaterThan(0);
  });

  test("find words using rack", () => {
    const results = solveRackAndBoard("WOOR","DO");
    const words = results.map(r => r.word);
    const includesBoardWord = words.some(w => w.includes("DO"));
    expect(includesBoardWord).toBe(true);
  });

  test("respect tile distribution", () => {
    const results = solveRackAndBoard("Z", "ZOO");
    expect(results.length).toBe(0);

  });

  test("handles empty rack", () => {
    const results = solveRackAndBoard("");
    expect(results.length).toBe(0);
  });

  test("rejects rack exceeding 7 letters", () => {
    const results = solveRackAndBoard("ABCDEFGH"); 
    expect(results.length).toBe(0);
  });

});