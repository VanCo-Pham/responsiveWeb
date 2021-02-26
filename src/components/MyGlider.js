import React, { useEffect, useState } from 'react'
import '../styles/glider.css';

const MyGlider = ({infos}) => {
  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = 'glider.min.js';
    // script.async = true;
    // document.body.appendChild(script);
    const script_1 = document.createElement('script');
    script_1.src = 'Glider_helper.js';
    // script_1.async = true;
    document.body.appendChild(script_1);
    return () => {
      // document.body.removeChild(script);
      document.body.removeChild(script_1);
    }
  }, [])
  return (
    <div className="glider-contain multiple">
      <button className="glider-prev" id="glider-why-prev">{'<'}</button>
      <div className="glider" id="glider-why">
        {
          infos.map(info => (
            <figure key={info.id}>
              <blockquote>{info.content}</blockquote>
              <figcaption>{info.caption}</figcaption>
            </figure>
          ))
        }
      </div>
      <button className="glider-next" id="glider-why-next">{'>'}</button>
      <div className="glider-dots" id="dots-why"></div>
    </div>
  );
}

export default MyGlider