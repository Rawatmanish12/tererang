import React from 'react';
import Card from '../pages/Card';

export default function Kurti() {
    const products = [
        {
            image: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198',
            name: 'Kurti 1',
            price: 100
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198',
            name: 'Kurti 2',
            price: 120
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198',
            name: 'Kurti 3',
            price: 150
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198',
            name: 'Kurti 4',
            price: 200
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301030220YELLOW_1_800x.jpg?v=1755594198',
            name: 'Kurti 5',
            price: 180
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Kurtis</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}
