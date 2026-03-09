import { validateRack } from "../engine/validation";

describe("Rack Validation", () => {

  test("accepts valid uppercase rack", () => {
    expect(validateRack("WOOD")).toBe(true);
  });

  test("rejects lowercase letters", () => {
    expect(validateRack("wood")).toBe(false);
  });

  test("rejects numbers", () => {
    expect(validateRack("ABC1")).toBe(false);
  });

  test("rejects special characters", () => {
    expect(validateRack("AB@D")).toBe(false);
  });

  test("rejects blank tiles", () => {
    expect(validateRack("WOOD?")).toBe(false);
  });

  test("rejects rack longer than 7 letters", () => {
    expect(validateRack("ABCDEFGH")).toBe(false);
  });

  test("accepts rack of exactly 7 letters", () => {
    expect(validateRack("ABCDEFG")).toBe(true);
  });

});