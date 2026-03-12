import { validateInputs } from "../engine/validation";

describe("Input Validation", () => {
  test("rejects empty rack", () => {
    expect(validateInputs("").valid).toBe(false);
  });

  test("rejects rack >7 letters", () => {
    expect(validateInputs("ABCDEFGH").valid).toBe(false);
  });

  test("rejects invalid characters", () => {
    expect(validateInputs("AB1CD").valid).toBe(false);
  });

  test("rejects too many tiles combined with board word", () => {
    expect(validateInputs("AIDOORZ", "QUIZ").valid).toBe(false);
  });

  test("accepts valid rack and board word", () => {
    expect(validateInputs("AIDOORW", "WIZ").valid).toBe(true);
  });
});