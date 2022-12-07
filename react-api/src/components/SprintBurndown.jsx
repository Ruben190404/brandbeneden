import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['Ma', 'Di', 'Woe', 'Do', 'Vr', 'Ma', 'Di', 'Woe', 'Do', 'Vr'];

const start = 786;
const ideal = labels.map((e, i) => {
    return start - ((start / (labels.length - 1)) * (i))
});

console.log(ideal);

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => 50),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            data: ideal,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function SprintBurndown(props) {
    return (
        <Line options={options} data={data} />
    );
}

export default SprintBurndown;