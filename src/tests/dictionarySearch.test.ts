import { initializeDictionary, isValidWord } from "../engine/dictionarySearch";

describe("dictionary", () => {

  beforeAll(() => {
    initializeDictionary();
  });

  test("valid word", () => {
    expect(isValidWord("WOOD")).toBe(true);
  });

  test("invalid word", () => {
    expect(isValidWord("ZZZZ")).toBe(false);
  });

});