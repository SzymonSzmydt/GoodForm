// Hamburger menu

const hamburger = document.querySelector(".hamburger");

// Hamburger Animation

function hamburgerAnimation() {
    const bigMac = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

        bigMac.children[0].classList.toggle("bigMacOff");
        bigMac.children[0].classList.toggle("bigMacOn");

        menu.classList.toggle("menuMobile");
}
hamburger.addEventListener("click", hamburgerAnimation);

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: ["Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Pażdziernik"],
    datasets: [{
      backgroundColor: ["#9EADBD", "#9EADBD","#9EADBD","#9EADBD","#9EADBD", "#9EADBD", "#9EADBD"],
      data: [40, 60, 70, 75, 85, 74, 78],
    }]
  },
  options: {
    scales: {
        x: {
            grid: {
                tickColor: "#6889A8",
                color: "#6889A8"
            },
            ticks: {
                color: "#9EADBD"
            },
        },
        y: {
            grid: {
                tickColor: "#6889A8",
                color: "#6889A8"
            },
            ticks: {
                color: "#9EADBD"
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },     
    }
  }
});

new Chart("myChart2", {
    type: 'doughnut',
    data: {
        labels: [
            'Global Web Solutions',
            'Global Invest-data',
            'OverView management'
        ],
        datasets: [{
            label: 'Market share',
            data: [200, 50, 100],
            backgroundColor: [
                '#378980',
                '#BCA5AE',
                '#D3F4FF'
            ],
            hoverOffset: 4
        }]
        },
    options: {
        plugins: {
            legend: {
                align: 'start',
                display: true,
                labels: {
                    boxWidth: 20,
                    color: "#D3F4FF",
                    font: {
                        size: 14,
                    }
                }
            }
        }
    }
});

new Chart("line-chart", {
    type: 'line',
    data: {
        labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Sell in mln dolar ',
            data: [12, 29, 35, 31, 50, 45, 53, 49, 67, 70, 62, 64, 50],
            backgroundColor: ['#378980'],
            fill: false,
            borderColor: '#6889A8',
            tension: 0.1
        },
        {
            label: "Cost's in mln dolar ",
            data: [9, 15, 19, 26, 22, 28, 25, 27, 24, 20, 18, 15, 20],
            backgroundColor: ['#9F696B'],
            fill: false,
            borderColor: '#9F696B',
            tension: 0.1
        }]
    },
    plugins: {
        legend: {
            display: true
        },     
    },
});