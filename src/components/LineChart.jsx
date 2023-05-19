import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);


export default function LinesChart() {
    const data = {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [{
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor:[
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                "hsl(186, 34%, 60%)",
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
            ],
            borderWidth: 1,
            borderRadius: 5
        }]
    };
    
    const options = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {},
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                },
                y: {
                    grid: {
                        display: false
                    },
                }
            }
        }
    }

    return <Bar 
        data={data} 
        options={options} 
            
        />
}