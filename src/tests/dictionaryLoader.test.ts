import { loadDictionary } from "../engine/dictionaryLoader";

describe("Dictionary Loader", () => {
  test("should load words from dictionary file", () => {
    const words = loadDictionary();
    expect(words.length).toBeGreaterThan(0);
  });

  test("should convert words to uppercase", () => {
    const words = loadDictionary();
    const firstWord = words[0];
    expect(firstWord).toEqual(firstWord.toUpperCase());
  });

});