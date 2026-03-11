import { loadDictionary } from "./dictionaryLoader";

let dictionarySet: Set<string> = new Set();

export function initializeDictionary(): void {
  const words = loadDictionary();
  dictionarySet = new Set(words);
}

export function isValidWord(word: string): boolean {
  return dictionarySet.has(word.toUpperCase());
}