import { CountUp } from './node_modules/countup.js/dist/countUp.js';

var rendered = false; 

window.onload = function () {
  var countUp1 = new CountUp('stat1', 25, {
    enableScrollSpy: true,
    suffix: 'M+'
  });
  var countUp2 = new CountUp('stat2', 600, {
    enableScrollSpy: true,
    suffix: 'K+'
  });

}

function handleScroll() {
  handleFadeIn();
  handleLeftCardAnimation();
  handleRightCardAnimation();
  handleFadeInUpwards();
  renderChart();
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const isVerticallyVisible = rect.top <= windowHeight && rect.bottom >= 0;
  const isHorizontallyVisible = rect.left <= windowWidth && rect.right >= 0;
  return isVerticallyVisible && isHorizontallyVisible;
}

function handleFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('active');
    }
  });
}

function handleLeftCardAnimation() {
  const leftCards = document.querySelectorAll('.left-card-animation');
  leftCards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add('active');
    }
  })
}

function handleRightCardAnimation() {
  const rightCards = document.querySelectorAll('.right-card-animation');
  rightCards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add('active');
    }
  })
}

function handleFadeInUpwards() {
  const roadmapRows = document.querySelectorAll('.fade-in-upwards');
  roadmapRows.forEach((row) => {
    if (isElementInViewport(row)) {
      row.classList.add('active');
    }
  })
}

function renderChart() {
  const options = {
    chart: {
      type: 'donut'
    },
    series: [4, 1.50, 1.25, 14.58, 2.08],
    labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
    legend: {
      fontSize: '16px',
      labels: {
        colors: 'rgb(155,157,158)'
      }
    }
  }
  const chartElement = document.getElementById('chart')
  const chart = new ApexCharts(chartElement, options);
  if(isElementInViewport(chartElement) && !rendered){
    chart.render();
    rendered = true;
  }
}

document.addEventListener('scroll', handleScroll);
