import { checkValidState } from "./unitedStates.utils";

test('checkValidState', () => {
    // normal cases
    expect(checkValidState("Montana")).toBe(true);
    expect(checkValidState("mOntana")).toBe(true);
    expect(checkValidState("mOntanaa")).toBe(false);
    expect(checkValidState("California")).toBe(true);
    expect(checkValidState("caLifornia")).toBe(true);
    expect(checkValidState("Ccalifornia")).toBe(false);
    expect(checkValidState("District of Columbia")).toBe(true);
    expect(checkValidState("district OF columbia")).toBe(true);

    // edge cases
    expect(checkValidState(0)).toBe(false);
    expect(checkValidState("")).toBe(false);
    expect(checkValidState("  ")).toBe(false);
    expect(checkValidState("123")).toBe(false);
    expect(checkValidState(false)).toBe(false);
    expect(checkValidState(true)).toBe(false);
    expect(checkValidState({})).toBe(false);
    expect(checkValidState(["1", "2"])).toBe(false);
});