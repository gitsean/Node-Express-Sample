const score = require('./bowling');

test('score should be 300 for a perfect game', () => {
  const gameString = 'XXXXXXXXXXXX';
  const game = score(gameString);
  expect(game).toBe(300);
});

test('score should be 90', () => {
  const gameString = '9-9-9-9-9-9-9-9-9-9-';
  const game = score(gameString);
  expect(game).toBe(90);
});

test('score should be 150', () => {
  const gameString = '5/5/5/5/5/5/5/5/5/5/5';
  const game = score(gameString);
  expect(game).toBe(150);
});
