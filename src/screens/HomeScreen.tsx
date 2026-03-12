import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { solveRackAndBoard } from "../engine/solver";
import { validateInputs } from "../engine/validation";

export default function HomeScreen() {
  const [rack, setRack] = useState("");
  const [boardWord, setBoardWord] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [bestWord, setBestWord] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

    const handleSolve = () => {
    
        const validation = validateInputs(rack.toUpperCase(), boardWord.toUpperCase());

        if (!validation.valid) {
        setError(validation.error || "Invalid input");
        setBestWord(null);
        setScore(null);
        return;
        }

        setError(null);
        setLoading(true);

        setTimeout(() => {
            const results = solveRackAndBoard(rack.toUpperCase(), boardWord.toUpperCase());

            if (results.length === 0) {
                setError("No valid words can be formed.");
                setBestWord(null);
                setScore(null);
            }else {
                setBestWord(results[0].word);
                setScore(results[0].score);
            }

            setLoading(false);
        }, 200); 
    };

    const handleClear = () => {
        setRack("");
        setBoardWord("");
        setBestWord(null);
        setScore(null);
        setError(null);
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Scrabble Solver</Text>

        <TextInput
            style={styles.input}
            placeholder="Rack (max 7 letters)"
            value={rack}
            onChangeText={setRack}
        />

        <TextInput
            style={styles.input}
            placeholder="Board word (optional)"
            value={boardWord}
            onChangeText={setBoardWord}
        />

        <View style={styles.buttonRow}>

            <Button
            title="Solve"
            onPress={handleSolve}
            />

            <Button
            title="Clear"
            onPress={handleClear}
            color="gray"
            />

        </View>

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
      {error && <Text style={styles.error}>{error}</Text>}

      {bestWord && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Best Word: {bestWord}</Text>
          <Text style={styles.resultText}>Score: {score}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  error: {
    marginTop: 15,
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },

  resultBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e6ffe6",
    borderRadius: 5
  },

  resultText: {
    fontSize: 18,
    textAlign: "center"
  }
});