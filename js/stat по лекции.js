'use strict';

// size by default 300px x 150px
// задание размеров через style масштабирует область;
// если задать размеры блоку <canvas> то они влияют на размер блока а не на координатную сетку
// если задать ширину 1000 и в style цшвер 100% то масштабирование будет корректно

// var canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// ctx.strokeStyle = 'red'; обводка цвет
// ctx.strokeRect (); обводка
// ctx.clearRect(); очистка области
// ctx.fillText('Hello', 0, 10); текст, координаты x y
// ctx.font = '30px Arial';
// ctx.textBaseline = 'hangling';
// ctx.fillStyle = '#fff'; // задаем цвет
// ctx.fillRect(100, 50, 500, 200); // координаты, ширина/высота

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 15;
const TEXT_WIDTH = 50;
const BAR_HEIGHT = 20;
let barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

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

window.renderStatistics = function (ctx, players, times) {


  renderCloud(ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      'rgba(0, 0, 0, 0.3'
  );

  renderCloud(ctx,
      CLOUD_X,
      CLOUD_Y,
      '#fff');

  /* ctx.fillStyle = '#000';
  ctx.fillText('Вы',
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 0);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 0,
      barWidth,
      BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Иван',
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 1);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 1,
      barWidth,
      BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Юлия',
      CLOUD_X + GAP,
      CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * 2);
  ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH,
      CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * 2,
      barWidth,
      BAR_HEIGHT);

        let players = ['Вы', 'Иван', 'Юлия'];
        let times = ['100', '900', '1100'];*/
  // домашка по лекции
  ctx.fillStyle = '#000';

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + GAP,
        CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i
    );
    ctx.fillRect(
        CLOUD_X + GAP + TEXT_WIDTH,
        CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i,
        (barWidth * times[i]) / maxTime,
        BAR_HEIGHT
    );
  }
};
