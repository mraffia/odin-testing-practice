import { capitalize, reverseString } from "./jestPractice.js"

test("capitalize('bruh') to return 'Bruh'", () => {
    expect(capitalize('bruh')).toMatch(/Bruh/);
});

test("capitalize('Bruh') to return 'Bruh'", () => {
    expect(capitalize('Bruh')).toMatch(/Bruh/);
});

test("capitalize('') to return blank", () => {
    expect(capitalize('')).toMatch(/\s*/);
});


test("reverseString('Bruh') to return 'hurB'", () => {
    expect(reverseString('Bruh')).toMatch(/hurB/);
});

test("reverseString('B') to return 'B'", () => {
    expect(reverseString('B')).toMatch(/B/);
});

test("reverseString('') to return blank", () => {
    expect(reverseString('')).toMatch(/\s*/);
});