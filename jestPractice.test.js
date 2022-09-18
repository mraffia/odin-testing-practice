import { 
    capitalize, 
    reverseString, 
    calculator,
    caesarCipher,
    analyzeArray
} from "./jestPractice.js"

// capitalize
test("capitalize('bruh') to return 'Bruh'", () => {
    expect(capitalize('bruh')).toMatch(/Bruh/);
});

test("capitalize('Bruh') to return 'Bruh'", () => {
    expect(capitalize('Bruh')).toMatch(/Bruh/);
});

test("capitalize('') to return blank", () => {
    expect(capitalize('')).toMatch(/\s*/);
});

// reverseString
test("reverseString('Bruh') to return 'hurB'", () => {
    expect(reverseString('Bruh')).toMatch(/hurB/);
});

test("reverseString('B') to return 'B'", () => {
    expect(reverseString('B')).toMatch(/B/);
});

test("reverseString('') to return blank", () => {
    expect(reverseString('')).toMatch(/\s*/);
});

// calculator
test("calculator.add(1, 1) to return 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test("calculator.subtract(1, 1) to return 0", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test("calculator.divide(20, 4) to return 5", () => {
    expect(calculator.divide(20, 4)).toBe(5);
});

test("calculator.multiply(20, 4) to return 80", () => {
    expect(calculator.multiply(20 ,4)).toBe(80);
});

// caesarCipher
test("caesarCipher('bruh') to return 'csvi'", () => {
    expect(caesarCipher('bruh')).toMatch(/csvi/);
});

test("caesarCipher('Bruh') to return 'Csvi'", () => {
    expect(caesarCipher('Bruh')).toMatch(/Csvi/);
});

test("caesarCipher('bruh. moment.') to return 'csvi. npnfou.'", () => {
    expect(caesarCipher('bruh. moment.')).toMatch(/csvi. npnfou./);
});

// analyzeArray
test("analyzeArray([1,8,3,4,2,6]) to return { average: 4, min: 1, max: 8, length: 6 }", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("analyzeArray([7]) to return { average: 7, min: 7, max: 7, length: 1 }", () => {
    expect(analyzeArray([7])).toEqual({ average: 7, min: 7, max: 7, length: 1 });
});

test("analyzeArray([]) to return { average: null, min: null, max: null, length: 0 }", () => {
    expect(analyzeArray([])).toEqual({ average: null, min: null, max: null, length: 0 });
});