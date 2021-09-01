var ctx = document.getElementById('graph').getContext('2d')

var myChart = new Chart(ctx, {

type: 'pie',

data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

    datasets: [{

        label: '# of',

        data: [12, 19, 3, 5, 2, 20],

        backgroundColor: [

            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        hoverBorderWidth: 3,
    }]
},
options: {
    

    plugins: {
        title: {
            display: true,
            text: 'Voici un graphique',
            fontSize:24,
        },


        legend: {
            display: false,
        }
    },

        layout:{
            padding:{
                top:100,
            }
        }

}
})
