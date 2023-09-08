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
import Chatbot from './components/Chatbot';

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
        type: 'donut',
        height: '500%',
        width: '63%',
        // offsetX: -100,
      },
      plotOptions: {
        pie: {
          offsetX: 90,
          customScale: 0.8,
          dataLabels: {
            minAngleToShowLabel: 360,
          },
          donut: {
            size: '55%',
            labels: {
              show: false,
            }
          }
        }
      },
      series: [5, 5, 5, 5, 5],
      labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
      colors: ['#FF0EFF', '#8802FF', '#4F45FF', '#017CFE', '#FF6500'],
      fill : {
        type: 'gradient',
      },
      legend: {
        fontSize: '25rem',
        fontWeight: 200,
        fontFamily: 'Open Sans',
        position: 'left',
        offsetX: 18,
        offsetY: 150,
        labels: {
          // colors: 'rgb(155,157,158)'
          colors: 'white'
        },
        markers: {
          width: 20,
          height: 20,
        },
        itemMargin: {
          // horizontal: 25,
          vertical: 5
        }
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              type: 'donut',
              height: '400%',
              width: '120%',
              // offsetX: -100,
            },
            plotOptions: {
              pie: {
                offsetX: -50,
                customScale: 0.8,
                dataLabels: {
                  minAngleToShowLabel: 360,
                },
                donut: {
                  size: '55%',
                  labels: {
                    show: false,
                  }
                }
              }
            },
            series: [5, 5, 5, 5, 5],
            labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
            colors: ['#FF0EFF', '#8802FF', '#4F45FF', '#017CFE', '#FF6500'],
            legend: {
              fontSize: '25rem',
              fontWeight: 200,
              fontFamily: 'Open Sans',
              position: 'left',
              offsetX: 0,
              offsetY: 150,
              labels: {
                // colors: 'rgb(155,157,158)'
                colors: 'white'
              },
              markers: {
                width: 20,
                height: 20,
              },
              itemMargin: {
                horizontal: 0,
                vertical: 5
              }
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              type: 'donut',
              height: '300%',
              width: '120%',
              offsetX: -100,
            },
            plotOptions: {
              pie: {
                offsetX: 20,
                customScale: 0.8,
                dataLabels: {
                  minAngleToShowLabel: 360,
                },
                donut: {
                  size: '55%',
                  labels: {
                    show: false,
                  }
                }
              }
            },
            series: [5, 5, 5, 5, 5],
            labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
            colors: ['#FF0EFF', '#8802FF', '#4F45FF', '#017CFE', '#FF6500'],
            legend: {
              fontSize: '25rem',
              fontWeight: 200,
              fontFamily: 'Open Sans',
              position: 'left',
              offsetX: 60,
              offsetY: 100,
              labels: {
                // colors: 'rgb(155,157,158)'
                colors: 'white'
              },
              markers: {
                width: 20,
                height: 20,
              },
              itemMargin: {
                // horizontal: 25,
                vertical: 5
              }
            }
          }
        },
        {
          breakpoint: 767,
          options: {
            chart: {
              type: 'donut',
              height: '300%',
              width: '120%',
              offsetX: -80,
            },
            plotOptions: {
              pie: {
                offsetX: 33,
                offsetY: 20,
                customScale: 1,
                dataLabels: {
                  minAngleToShowLabel: 360,
                },
                donut: {
                  size: '55%',
                  labels: {
                    show: false,
                  }
                }
              }
            },
            series: [5, 5, 5, 5, 5],
            labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
            colors: ['#FF0EFF', '#8802FF', '#4F45FF', '#017CFE', '#FF6500'],
            legend: {
              fontSize: '25rem',
              fontWeight: 200,
              fontFamily: 'Open Sans',
              position: 'bottom',
              offsetX: 60,
              offsetY: 0,
              labels: {
                // colors: 'rgb(155,157,158)'
                colors: 'white'
              },
              markers: {
                width: 20,
                height: 20,
              },
              itemMargin: {
                horizontal: 25,
                vertical: 15
              }
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              type: 'donut',
              height: '460%',
              width: '120%',
              offsetX: -80,
            },
            plotOptions: {
              pie: {
                offsetX: 45,
                offsetY: 20,
                customScale: 0.85,
                dataLabels: {
                  minAngleToShowLabel: 360,
                },
                donut: {
                  size: '55%',
                  labels: {
                    show: false,
                  }
                }
              }
            },
            series: [5, 5, 5, 5, 5],
            labels: ['Seed', 'Private', 'Public Sale', 'Liquidity CEX', 'Liquidity CEX unlocked'],
            colors: ['#FF0EFF', '#8802FF', '#4F45FF', '#017CFE', '#FF6500'],
            legend: {
              fontSize: '25rem',
              fontWeight: 200,
              fontFamily: 'Open Sans',
              position: 'bottom',
              offsetX: 60,
              offsetY: 0,
              labels: {
                // colors: 'rgb(155,157,158)'
                colors: 'white'
              },
              markers: {
                width: 20,
                height: 20,
              },
              itemMargin: {
                horizontal: 30,
                vertical: 10
              }
            }
          }
        }
      ]
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
        <Roadmap />
        <Tokenomics />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default App;
