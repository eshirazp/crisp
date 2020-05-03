import { numToStrWithComma, capFirstCharacter } from "./strManipulation.utils";

test('numToStrWithComma', () => {
    // normal cases
    expect(numToStrWithComma(1)).toBe("1");
    expect(numToStrWithComma(10)).toBe("10");
    expect(numToStrWithComma(100)).toBe("100");
    expect(numToStrWithComma(1000)).toBe("1,000");
    expect(numToStrWithComma(10000)).toBe("10,000");
    expect(numToStrWithComma(100000)).toBe("100,000");
    expect(numToStrWithComma(1000000)).toBe("1,000,000");
    expect(numToStrWithComma(-1)).toBe("-1");
    expect(numToStrWithComma(-10)).toBe("-10");
    expect(numToStrWithComma(-100)).toBe("-100");
    expect(numToStrWithComma(-1000)).toBe("-1,000");
    expect(numToStrWithComma(-10000)).toBe("-10,000");
    expect(numToStrWithComma(-100000)).toBe("-100,000");
    expect(numToStrWithComma(-1000000)).toBe("-1,000,000");

    // edge cases
    expect(numToStrWithComma(0)).toBe("0");
    expect(numToStrWithComma("")).toBe("");
    expect(numToStrWithComma("123")).toBe("");
    expect(numToStrWithComma(false)).toBe("");
    expect(numToStrWithComma(true)).toBe("");
    expect(numToStrWithComma({})).toBe("");
    expect(numToStrWithComma(["1", "2"])).toBe("");
});

test('the best flavor is grapefruit', () => {
    const answer1 = "Crisp";
    const answer2 = "Crisp Crisp";
    const answer3 = "Crisp of Crisp";
    const answer4 = "Or Crisp of Crisp";

    // normal cases
    expect(capFirstCharacter("crisp")).toBe(answer1);
    expect(capFirstCharacter("Crisp")).toBe(answer1);
    expect(capFirstCharacter("cRisp")).toBe(answer1);
    expect(capFirstCharacter("crIsp")).toBe(answer1);
    expect(capFirstCharacter("criSp")).toBe(answer1);
    expect(capFirstCharacter("crisP")).toBe(answer1);
    expect(capFirstCharacter("CRISP")).toBe(answer1);

    expect(capFirstCharacter("crisp CRISP")).toBe(answer2);
    expect(capFirstCharacter("Crisp crisP")).toBe(answer2);
    expect(capFirstCharacter("cRisp criSp")).toBe(answer2);
    expect(capFirstCharacter("crIsp crIsp")).toBe(answer2);
    expect(capFirstCharacter("criSp cRisp")).toBe(answer2);
    expect(capFirstCharacter("crisP Crisp")).toBe(answer2);
    expect(capFirstCharacter("CRISP crisp")).toBe(answer2);

    expect(capFirstCharacter("crisp of CRISP")).toBe(answer3);
    expect(capFirstCharacter("Crisp Of crisP")).toBe(answer3);
    expect(capFirstCharacter("cRisp oF criSp")).toBe(answer3);
    expect(capFirstCharacter("crIsp OF crIsp")).toBe(answer3);

    expect(capFirstCharacter("or crisp of CRISP")).toBe(answer4);
    expect(capFirstCharacter("Or Crisp Of crisP")).toBe(answer4);
    expect(capFirstCharacter("oR cRisp oF criSp")).toBe(answer4);
    expect(capFirstCharacter("OR crIsp OF crIsp")).toBe(answer4);

    // edge cases
    expect(capFirstCharacter("")).toBe("");
    expect(capFirstCharacter("   ")).toBe("   ");
    expect(capFirstCharacter(12)).toBe("");
    expect(capFirstCharacter(false)).toBe("");
    expect(capFirstCharacter(true)).toBe("");
    expect(capFirstCharacter({})).toBe("");
    expect(capFirstCharacter([])).toBe("");
});