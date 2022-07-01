var ctx = document.getElementById('myChart').getContext('2d');
var profit = document.getElementById('profit').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Income', 'Expenses'],
        datasets: [{
            label: '# Amount in 1000s',
            data: [65,50],
            backgroundColor: [
                '#4e664d',
                '#bdf7bb',
            ],
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 
var profit = new Chart(profit, {
    type: 'line',
    data: {
        labels: ['Week1','Week2','Week3','Week4'],
        datasets: [{
            label: '# Profit in 1000s',
            data: [30,40,20,45],
            backgroundColor: [
                '#4e664d',
                '#bdf7bb',
            ],
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 