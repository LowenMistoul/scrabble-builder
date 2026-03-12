// src/engine/validation.ts
import { letterData } from "../data/letter_data";
import { loadDictionary } from "./dictionaryLoader";
import { countLetters } from "./letterCounter";

const dictionary = loadDictionary();

export function validateInputs(
  rack: string,
  boardWord?: string
): { valid: boolean; error?: string } {
  if (!rack || rack.length < 1 || rack.length > 7) {
    return { valid: false, error: "Rack must have 1 to 7 letters." };
  }
  
  if (!/^[A-Z]+$/i.test(rack)) {
    return { valid: false, error: "Rack must contain only letters." };
  }

  if (boardWord && !/^[A-Z]+$/i.test(boardWord)) {
    return { valid: false, error: "Board word must contain only letters." };
  }

  const totalLetters = countLetters(rack.toUpperCase());
  if (boardWord) {
    const boardLetters = countLetters(boardWord.toUpperCase());
    for (const letter of Object.keys(boardLetters)) {
      totalLetters[letter] = (totalLetters[letter] || 0) + boardLetters[letter];
    }
  }

  for (const letter of Object.keys(totalLetters)) {
    if ((letterData[letter]?.tiles || 0) < totalLetters[letter]) {
      return {
        valid: false,
        error: `Too many "${letter}" tiles used (max ${letterData[letter]?.tiles}).`
      };
    }
  }

  if (boardWord && !dictionary.includes(boardWord.toUpperCase())) {
    return { valid: false, error: "Board word does not exist in dictionary." };
  }

  return { valid: true };
}