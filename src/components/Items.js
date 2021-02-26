import React, { useState, useEffect } from 'react'
import Item from './Item';
import ItemCard from "./ItemCard";


const Items = () => {
    const [data, setData] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(0);
    const [dataToShow, setdataToShow] = useState([]);

    const handleClick = (from, to, product) => {
        setCurrentProduct(product);
        setdataToShow(data.filter(product => product.id > from & product.id <= to));
    }

    useEffect( async () => {
        const newData = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=75');
        const jsonData = await newData.json();

        setData(jsonData);
        setdataToShow(jsonData.filter(product => product.id > 0 & product.id <= 15));
    }, [])
    return (
        <div className="items-container">
            <div className='items-nav'>
                <h2>Danh mục sản phẩm</h2>
                <ul>
                    <li className={currentProduct === 0 ? 'product-actived' : ""} onClick={() => handleClick(0, 15, 0)}>Phân bón</li>
                    <li className={currentProduct === 1 ? 'product-actived' : ""}onClick={() => handleClick(15, 30, 1)}>Thuốc trừ sâu</li>
                    <li className={currentProduct === 2 ? 'product-actived' : ""}onClick={() => handleClick(30, 45, 2)}>Nông cụ</li>
                    <li className={currentProduct === 3 ? 'product-actived' : ""}onClick={() => handleClick(45, 60, 3)}>Vật tư trồng Lan</li>
                    <li className={currentProduct === 4 ? 'product-actived' : ""}onClick={() => handleClick(60, 75, 4)}>Khác</li>
                </ul>
            </div>

            <div className="items-detail">
                {dataToShow.map(photo => (
                <div key={photo.id} className="items-details">
                    {/* <h2>{photo.title}</h2> */}
                    {/* <p>{photo.url}</p> */}
                    {/* <img src={photo.url} alt=""/>
                    <div className="item-action" id={photo.id}>
                        Add to Cart
                    </div> */}
                    <ItemCard url={photo.url} title={photo.title.slice(0,10)} content={photo.title}/>
                </div>
                // <Item />
                )
                )}
            </div>

        </div>
    );
}

export default Items;

