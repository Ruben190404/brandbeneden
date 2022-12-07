import React, {useEffect, useState} from 'react';
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
import {Line} from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function SprintBurndown(props) {

    const [data, setData] = useState(null);

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    // Function from Stack Overflow which returns all the dates between two data
    const getDaysArray = (start, end) => {
        for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/1').then((response) => {

            // Default state for empty chart
            let start = 0;
            let dateLabels, completedPerDay = [];
            let ideal = [];

            // Get all dates between (and including) sprint start and end date
            const dates = getDaysArray(new Date(response.data.sprint.start_date), new Date(response.data.sprint.end_date));

            // Loop over all dates (start to end) and create an array with all dates
            // So start 1 dec and end 7 dec creates
            // create array 1 dec, 2 dec, 3 dec ... 7 dec
            dateLabels = dates.map((date) => date.toLocaleDateString());

            // Loop over all dates and set default tasks done point per day to 0
            // So 1 dec through 7 dec, 0 tasks complete
            completedPerDay = dates.map(() => 0);

            // Loop over all tasks
            response.data.tasks.map((task) => {
                // Add estimated time to start for our ideal burndown
                start += task.estimated_time;

                // Get task updated at in JavaScript format
                const completedAt = new Date(task.updated_at).toLocaleDateString();

                // Get index of array where the task date matches
                // So if start is 1 dec and end is 7 dec, if our task is done on 4 dec then it will return index 3
                const index = dateLabels.indexOf(completedAt);

                // Add estimated time to completed array
                // All tasks done on a specific date are added to that index in the array
                completedPerDay[index] += task.estimated_time;
            });
            //alleen doen als status af is. regel 72 tot 81


            console.log(start);
            console.log(dateLabels);
            console.log(completedPerDay);

            // Loop over all date dateLabels and calculate the ideal burndown per day
            ideal = dateLabels.map((e, i) => {
                return start - ((start / (dateLabels.length - 1)) * (i));
            });

            console.log(ideal);

            // Calculate actual burndown per day data
            // the completedPerDay has the total tasks complete per day
            // but the burndown has to count down from the start minus what has been done
            // each day
            // so day one 100 - 10 becomes 90, then on day two maybe 20 point have been completed so day 2 ends at 70
            let actual = completedPerDay.map((task) => start = start - task);

            setData({
                labels: dateLabels,
                datasets: [
                    {
                        data: actual,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        data: ideal,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            });
        });

    }, []);

    if (!data) return null;

    return (
        <Line options={options} data={data} redraw/>
    );
}

export default SprintBurndown;