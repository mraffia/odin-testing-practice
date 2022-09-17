test("capitalize('bruh') to return 'Bruh'", () => {
    expect(capitalize('bruh')).toMatch(/Bruh/);
});

test("capitalize('Bruh') to return 'Bruh'", () => {
    expect(capitalize('Bruh')).toMatch(/Bruh/);
});

test("capitalize('') to return blank/empty space", () => {
    expect(capitalize('')).toMatch(/\s/);
});

test("capitalize() to return 'You didn't provide a word.'", () => {
    expect(capitalize()).toMatch(/You didn't provide a word./);
});