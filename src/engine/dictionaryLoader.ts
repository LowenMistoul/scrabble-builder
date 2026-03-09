import fs from "fs";
import path from "path";

export function loadDictionary(): string[] {
  const filePath = path.join(__dirname, "../data/dictionary.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const words = fileContent
    .split("\n")
    .map(word => word.trim().toUpperCase())
    .filter(word => word.length > 0);
  return words;
}