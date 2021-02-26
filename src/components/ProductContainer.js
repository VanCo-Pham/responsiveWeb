import React, { useState, useEffect } from 'react'

const { default: ProductFirst } = require("./ProductFirst")

const ProductContainer = () => {
    const [data, setData] = useState([]);

    useEffect( async () => {
        const newData = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=125');
        const jsonData = await newData.json();

        setData(jsonData);
    }, [])
    return (
        <div>
            <ProductFirst id="phanbon"title="Phân bón" data={data.slice(0, 50)}/>
            <ProductFirst id="chepham" title='Chế phẩm sinh học' data={data.slice(50,84)}/>
            <ProductFirst id="hatgiong" title='Hạt giống' data={data.slice(84,125)}/>
        </div>

    );
}

export default ProductContainer