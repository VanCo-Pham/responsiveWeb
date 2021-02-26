import '../styles/glider.css';
import React, { useEffect } from 'react';


const Item = ({data}) => {
    useEffect(() => {
        // const script = document.createElement('script');
        // script.src = 'glider.min.js';
        // script.async = true;
        // document.body.appendChild(script);
        const script_1 = document.createElement('script');
        script_1.src = 'glider_product.js';
        // script_1.async = true;
        document.body.appendChild(script_1);
        return () => {
        //   document.body.removeChild(script);
          document.body.removeChild(script_1);
        }
      }, []);
    return (
    <div className="glider-contain multiple">
      <button className="glider-prev" id='glider-product-prev'>{'<'}</button>
      <div className="glider" id="glider-product">
        { data.map(product => (
            <div className="item-container" key={product.id}>
                <div className="item-image"><img src={product.url} alt=""/></div>
                <div className="item-first">
                    <div className="item-name">{product.title.slice(0,10)}</div>
                    <div className="item-price">{Math.floor(Math.round(Math.random() * 100000))}đ</div>
                </div>
                <div className="item-details">{product.title}</div>
                <button className="item-action">Mua</button>
            </div>
            
          ))
        } 
        </div>
      <button className="glider-next" id="glider-product-next">{'>'}</button>
      <div className="glider-dots" id="dots-product"></div>
    </div>
        
    )
}

export default Item