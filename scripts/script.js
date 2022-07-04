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

new Chart("myChart", {
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