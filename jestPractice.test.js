import { 
    capitalize, 
    reverseString, 
    calculator 
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

test("caesarCipher('bruh. moment.') to return blank", () => {
    expect(caesarCipher('bruh. moment.')).toMatch(/csvi. npnfou./);
});