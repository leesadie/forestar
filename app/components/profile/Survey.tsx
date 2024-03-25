'use client';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Pre and Post Moods'
        }
    }
};

const labels = ['Calm', 'Energetic', 'Down/blue', 'Connected to nature', 'Irritated', 'Fatigued'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Pre-Moods',
            data: [1, 2, 3, 4, 5],
            backgroundColor: 'rgba(163, 163, 163, 0.5)',
        },
        {
            label: 'Post-Moods',
            data: [5, 4, 3, 2, 1],
            backgroundColor: 'rgba(132, 204, 22, 0.5)',
        }
    ],
};

export function Survey() {
    return (
        <Bar options={options} data={data}/>
    )
};