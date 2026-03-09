export function countLetters(word: string) {

  const counts: Record<string, number> = {};
  for (const letter of word) {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }

  return counts;

}