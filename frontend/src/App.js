import { React, useEffect, useRef } from 'react';
import './App.css';
import ParticlesBg from './components/ParticlesBg';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import $ from 'jquery';
import { CountUp } from 'countup.js'
import ApexCharts from 'apexcharts'
import { Tooltip } from 'bootstrap';

function App() {

  var chartRendered = useRef(false);

  useEffect(() => {

    // new CountUp('stat1', 25, {
    //   enableScrollSpy: true,
    //   suffix: 'M+'
    // });

    // new CountUp('stat2', 600, {
    //   enableScrollSpy: true,
    //   suffix: 'K+'
    // });

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

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          if (entry.target.id === 'chart' && !chartRendered.current) {
            chart.render();
            chartRendered.current = true;
          }
        } else {
          entry.target.classList.remove('active')
        }
      });
    });

    $('.fade-in, .left-card-animation, .right-card-animation, .fade-in-upwards, #chart')
      .each((index, element) => {
        observer.observe(element);
      });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    console.log(tooltipTriggerList)
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

  }, []);

  return (
    <>
      <Navbar />
      <div className='custom-overflow'>
      <ParticlesBg>
        <Intro />
      </ParticlesBg>
      <Products />
      <AboutUs />
      {/* <Roadmap /> */}
      {/* <Tokenomics /> */}
      <Footer />
      </div>
    </>
  );
}

export default App;
