import React from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import data from './../data/data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DetailPage = () => {
    const { id } = useParams();
    const item = data.find((element) => element.id === id);

    if (!item) {
        return <div>Item not found</div>;
    }

    const labels = [
        "averageSellPrice", "avg1", "avg7", "avg30", "germanProLow", 
        "lowPrice", "lowPriceExPlus", "reverseHoloAvg1", "reverseHoloAvg7", 
        "reverseHoloAvg30", "reverseHoloLow", "reverseHoloSell", "reverseHoloTrend", 
        "suggestedPrice", "trendPrice"
    ];

    const cardmarketPrices = item.cardmarket?.prices || {};
    
    const priceData = [
        cardmarketPrices.averageSellPrice, cardmarketPrices.avg1, cardmarketPrices.avg7, cardmarketPrices.avg30, 
        cardmarketPrices.germanProLow, cardmarketPrices.lowPrice, cardmarketPrices.lowPriceExPlus, 
        cardmarketPrices.reverseHoloAvg1, cardmarketPrices.reverseHoloAvg7, cardmarketPrices.reverseHoloAvg30, 
        cardmarketPrices.reverseHoloLow, cardmarketPrices.reverseHoloSell, cardmarketPrices.reverseHoloTrend, 
        cardmarketPrices.suggestedPrice, cardmarketPrices.trendPrice
    ];

    const dataForChart = {
        labels,
        datasets: [
            {
                label: 'Price in USD',
                data: priceData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Card Market Prices Overview',
            },
        },
        indexAxis: 'y', // Horizontal bar chart
    };

    return (
        <div>
            <h1>{item.name}</h1>
            <p>HP: {item.hp}</p>
            <img src={item.images.large} alt={item.name} />
            <p>Types: {item.types.join(', ')}</p>
            <p>Attacks: {item.attacks.map((attack) => (
                <div key={attack.name}>
                    <strong>{attack.name}</strong>: {attack.text} (Damage: {attack.damage})
                </div>
            ))}</p>

            <div style={{ width: '600px', height: '400px' }}>
                <Bar data={dataForChart} options={options} />
            </div>
        </div>
    );
};

export default DetailPage;
