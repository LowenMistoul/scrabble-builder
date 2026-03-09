import { countLetters } from "../engine/letterCounter";

describe("Letter Counter", () => {

    test("counts letters in a simple word", () => {
        const result = countLetters("WOOD");
        expect(result).toEqual({
        W: 1,
        O: 2,
        D: 1
        });
    });

    test("counts single letter word", () => {
        const result = countLetters("A");
        expect(result).toEqual({
            A: 1
        });
    });

    test("handles repeated letters", () => {
        const result = countLetters("AAA");
        expect(result).toEqual({
            A: 3
        });
    });

    test("returns empty object for empty string", () => {
        const result = countLetters("");
        expect(result).toEqual({});
    });
});