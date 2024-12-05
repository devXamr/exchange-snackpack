import {useEffect, useRef} from 'react';
import { createChart } from 'lightweight-charts';
import {filteredETH} from "./SampleData.js";


export default function CandleChart({data}) {
    const chartRef = useRef(null)

    useEffect(() => {
        if(!chartRef.current) return
        // Ensure the chart is created after the DOM has been rendered

        const chartOptions = {


            layout: {
                textColor: '#8e96a5',
                background: { type: 'solid', color: '#14151b' }
            },
        };

        // Create the chart and configure it
        const chart = createChart(chartRef.current, chartOptions);
        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: true,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
        });

        const exampleData = [
            { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
            { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
            { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
            { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
            { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
            { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
            { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
            { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
            { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
            { open: 11.93, high: 12.53, low: 9.76, close: 10.96, time: 1643205496 },
        ];

        // Add example data
        candlestickSeries.setData(filteredETH);

        // Adjust the chart to fit content
        chart.timeScale().fitContent();

        // Cleanup on component unmount
        return () => {
            chart.remove();
        };
    }, [data]);

    return (


        <div
            ref={chartRef}
            id="container"
           className='w-full h-96'
        ></div>


    );
}
