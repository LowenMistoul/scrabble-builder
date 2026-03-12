import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { solveRackAndBoard } from "../engine/solver";

export default function HomeScreen() {
  const [rack, setRack] = useState("");
  const [boardWord, setBoardWord] = useState("");
  const [results, setResults] = useState<{ word: string; score: number }[]>([]);
  const handleSolve = () => {
    const solved = solveRackAndBoard(rack.toUpperCase(), boardWord.toUpperCase());
    setResults(solved);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scrabble Word Builder</Text>


      <TextInput
        style={styles.input}
        placeholder="Enter your rack letters"
        value={rack}
        onChangeText={setRack}
        maxLength={7}
        autoCapitalize="characters"
      />


      <TextInput
        style={styles.input}
        placeholder="Optional: board word"
        value={boardWord}
        onChangeText={setBoardWord}
        autoCapitalize="characters"
      />


      <Button title="Solve" onPress={handleSolve} />


      <FlatList
        style={styles.results}
        data={results}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <Text style={styles.resultItem}>{item.word} — {item.score} pts</Text>
        )}
      />

      {results.length === 0 && <Text style={styles.noResult}>No valid words found</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10 },
  results: { marginTop: 20 },
  resultItem: { fontSize: 18, marginVertical: 2 },
  noResult: { marginTop: 20, fontStyle: "italic" },
});