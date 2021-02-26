import React, { useState, useEffect } from 'react'

const { default: Item } = require("./Item")
const { default: ItemCard } = require("./ItemCard")
const { default: PaginationOutlined } = require("./ProductPages")


function ProductFirst  ({title, data}) {
    const [dataToShow, setDataToShow] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(8);
    const pageCount = Math.floor(data.length / itemPerPage);
    const handlePage = (page) => {
        let start = (parseInt(page) - 1) * itemPerPage;
        let stop = start + itemPerPage;
        setDataToShow(data.slice(start, stop));
    }
    useEffect(() => {
        setDataToShow(data.slice(0,itemPerPage))
    }, [data])
    
    const checkInnerWidth = () => {
        // console.log(window.innerWidth);
        let currentWidth = window.innerWidth;
        if (currentWidth > 1390) {
            setItemPerPage(12);
        }
    }
    useEffect(() => {
        checkInnerWidth();
        console.log('Checking inner width')
    }, [])
    return (
        <div className="products-container">
            <div className="products-title">
                <h2>{title}</h2> 
                <span>
                {data.length} sản phẩm
                </span>
            </div>
            <div className="products-grid">

            {dataToShow.map(photo => (
                <div key={photo.id} className="">
                    <ItemCard url={photo.url} title={photo.title.slice(0,itemPerPage)} content={photo.title.slice(0,30)} />
                </div>
                )
                )}
            </div>
            <div className="products-pagination">
                <PaginationOutlined pageCount={pageCount} handlePage={handlePage}/>
            </div>
        </div>
    );
}

export default ProductFirst