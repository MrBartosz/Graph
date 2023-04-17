let myChart; 
let deleteButton = document.getElementById('deleteButton');

function createChart() {
  let dataInput = document.getElementById('data').value;
  let data = dataInput.split(',').map(Number); // Konwersja danych na tablicę liczb
  let chartType = document.getElementById('chartType').value;
  let ctx = document.getElementById('myChart').getContext('2d');
  let devicePixelRatio = window.devicePixelRatio || 1;
  ctx.canvas.width = ctx.canvas.offsetWidth * devicePixelRatio;
  ctx.canvas.height = ctx.canvas.offsetHeight * devicePixelRatio;

  deleteChart();
  
  if (myChart) {
    myChart.data.labels = data.map(function(_, i) { return 'Label ' + (i + 1); });
    myChart.data.datasets[0].data = data;
    myChart.config.type = chartType;
    myChart.update();
  } else {
    myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: data.map(function(_, i) { return 'Label ' + (i + 1); }), // Automatyczne generowanie etykiet
        datasets: [{
          label: 'Twój Wykres',
          data: data,
          backgroundColor: '#868580',
          borderColor: 'rgba(0, 0, 0, 0);',
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  deleteButton.style.display = 'block';
}
function deleteChart() {
  if (myChart) {
    myChart.destroy();
    myChart = null;
  }
  deleteButton.style.display = 'none';
}