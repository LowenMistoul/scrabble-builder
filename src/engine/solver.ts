import { letterData } from "../data/letter_data";
import { loadDictionary } from "./dictionaryLoader";
import { countLetters } from "./letterCounter";
import { calculateWordScore } from "./scoring";

export interface SolverResult {
  word: string;
  score: number;
}

const dictionary = loadDictionary();

function respectsTileDistribution(rack: string, boardWord: string): boolean {
  const combined = rack + boardWord;
  const counts = countLetters(combined);

  for (const letter in counts) {
    const allowed = letterData[letter as keyof typeof letterData]?.tiles || 0;
    if (counts[letter] > allowed) {
      return false;
    }
  }

  return true;
}

function canBuildWord(
  word: string,
  rackCounts: Record<string, number>,
  boardCounts: Record<string, number>
): boolean {

  const wordCounts = countLetters(word);

  for (const letter in wordCounts) {
    const needed = wordCounts[letter];
    const fromBoard = boardCounts[letter] || 0;
    const fromRack = rackCounts[letter] || 0;
    const totalAvailable = fromBoard + fromRack;

    if (needed > totalAvailable) {
      return false;
    }
  }

  return true;
}

export function solveRackAndBoard(
  rack: string,
  boardWord: string = ""
): SolverResult[] {

  if (!respectsTileDistribution(rack, boardWord)) {
    return [];
  }

  const results: SolverResult[] = [];
  const rackCounts = countLetters(rack);
  const boardCounts = countLetters(boardWord);

  for (const word of dictionary) {

    if (boardWord && !word.includes(boardWord)) {
      continue;
    }

    if (!canBuildWord(word, rackCounts, boardCounts)) {
      continue;
    }

    const score = calculateWordScore(word);
    results.push({ word, score });
  }
  
  results.sort((a, b) => {
    if (b.score === a.score) {
      return a.word.localeCompare(b.word);
    }
    return b.score - a.score;
  });

  return results;
}