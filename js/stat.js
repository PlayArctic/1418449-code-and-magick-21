'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const CLOUD_GAP = 10;
const GAP_SMALL = 20;
const TIME_GAP = 30;
const BAR_VERT_GAP = 100;
const TEXT_HEIGHT = 20;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/* let getColor = function (players) {
  for (let i = 0; i < players.length; i++) {
    if (players[i] === `Вы`) {
      return 'rgba(255, 0, 0, 1)';
    }
  }
  return '#000';
}; */

window.renderStatistics = function (ctx, players, times) {
  ctx.font = '16px PT Mono';
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.3');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_SMALL, GAP_SMALL + TEXT_HEIGHT + (GAP_SMALL) * 0);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_SMALL, GAP_SMALL + TEXT_HEIGHT + (GAP_SMALL) * 1);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - TIME_GAP
    );
    ctx.fillText(
        players[i],
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        CLOUD_HEIGHT
    );
    let getColor = function (players) {
      if (players[i] === 'Вы') {
        return 'rgba(255, 0, 0, 1)';
      }
      return '#000';
    };
    getColor(players);
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
        BAR_VERT_GAP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
  }
};


/* ctx.fillText('Вы',
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * 0,
      CLOUD_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * 0,
      100, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Кекс',
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * 1,
      CLOUD_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * 1,
      100, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Катя',
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * 2,
      CLOUD_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * 2,
      100, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillText('Игорь',
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * 3,
      CLOUD_HEIGHT);
  ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * 3,
      100, BAR_WIDTH, BAR_HEIGHT); */
