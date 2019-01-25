const score = function(gameString) {
  const gameArray = gameString.split('');
  const frames = parseFrames(gameArray);
  const finalScore = getScore(frames);
  return finalScore;
};

module.exports = score;

//TODO: break out functions into separate utils

function parseFrames(rolls) {
  let frames = [];
  for (let i = 0; i < rolls.length; ) {
    let increment = 1;
    if (frames.length >= 10) {
      frames.push(rolls[i]);
    } else if (rolls[i] === 'X') {
      frames.push(rolls[i]);
    } else {
      frames.push(rolls[i] + rolls[i + 1]);
      increment = 2;
    }
    i += increment;
  }
  while (frames.length < 12) {
    frames.push('0');
  }
  return frames;
}

function splitTranslate(frame) {
  return frame.split('').map(item => {
    if (item === '-') {
      return 0;
    } else {
      return Number(item);
    }
  });
}

function add(vals) {
  return vals.reduce((val, item) => {
    return (val += item);
  }, 0);
}

function strikeBonus(spare, strike) {
  if (spare === 'X') {
    if (strike === 'X') {
      return 20;
    } else {
      return 10 + splitTranslate(strike)[0];
    }
  } else if (spare.includes('/')) {
    return 10;
  } else {
    const vals = splitTranslate(spare);
    return add(vals);
  }
}

function spareBonus(spare) {
  if (spare === 'X') {
    return 10;
  } else {
    return splitTranslate(spare)[0];
  }
}

function frameScore(frame, spare, strike) {
  let value = 0;
  if (frame === 'X') {
    value += 10 + strikeBonus(spare, strike);
  } else if (frame.includes('/')) {
    value += 10 + spareBonus(spare);
  } else {
    const split = splitTranslate(frame);
    value += add(split);
  }
  return value;
}

function getScore(frames) {
  let score = 0;
  for (let i = 0; i < 10; i++) {
    const frame = frames[i];
    const spareFrame = frames[i + 1] || 0;
    const strikeFrame = frames[i + 2] || 0;
    score += frameScore(frame, spareFrame, strikeFrame);
  }
  return score;
}
