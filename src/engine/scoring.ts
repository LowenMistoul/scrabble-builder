import letterData from "../data/letter_data.json";

export function calculateWordScore(word: string): number {
  let totalScore = 0;
  
  for (const letter of word) {
    const letterInfo = letterData[letter as keyof typeof letterData];
    totalScore += letterInfo.score;

  }

  return totalScore;
}