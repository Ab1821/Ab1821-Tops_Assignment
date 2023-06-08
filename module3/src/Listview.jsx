import React from 'react';

function Listview(props) {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Mobile', price: 25000 },
        { id: 3, name: 'Modem', price: 4000 },
        { id: 4, name: 'Tv', price: 70000 },
    ];

    const productList = products.map((product, i) => (
        <h3 key={product.id}>{product.name}: ${product.price}</h3>
    ))

    return (
        <div className='list'>
            {productList}
        </div>
    );
}

export default Listview;