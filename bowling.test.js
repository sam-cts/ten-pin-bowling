const getBowlingScore = require('./bowling');

test('testing pins array 1', () => {
    expect(getBowlingScore("10,10,10,10,10,10,10,10,10,10,10,10")).toBe(300);
});

test('testing pins array 2', () => {
    expect(getBowlingScore("1,2,3,4,5,5")).toBe(20);
});

test('testing pins array 3', () => {
    expect(getBowlingScore("9,1,10,8,0,2")).toBe(48);
});

test('testing pins array 4', () => {
    expect(getBowlingScore("10,0,0,9,1,0,0,8,2,0,0,7,3,0,0,6,4,0,0")).toBe(50);
});
