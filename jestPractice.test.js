import { capitalize } from "./jestPractice.js"

test("capitalize('bruh') to return 'Bruh'", () => {
    expect(capitalize('bruh')).toMatch(/Bruh/);
});

test("capitalize('Bruh') to return 'Bruh'", () => {
    expect(capitalize('Bruh')).toMatch(/Bruh/);
});

test("capitalize('') to return blank", () => {
    expect(capitalize('')).toMatch(/\s*/);
});


test("capitalize('Bruh') to return 'hruB'", () => {
    expect(reverseString('bruh')).toMatch(/hruB/);
});

test("capitalize('B') to return 'B'", () => {
    expect(reverseString('Bruh')).toMatch(/B/);
});

test("capitalize('') to return blank", () => {
    expect(reverseString('')).toMatch(/\s*/);
});