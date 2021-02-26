import React, { useState, useEffect } from 'react'
import MyGlider from './MyGlider'
const Why = () => {
    
    const infos = [
        { id: 0,
          content: 'Sản phẩm chất lượng, dịch vụ tốt. Rất khuyến khích mọi người sử dụng nông nghiệp phố.',
            caption: 'Anh Tấn Phát'    
        },
        {id: 1,
          content: 'Tư vấn kỹ thuật nhiệt tình, giao hàng đúng hẹn.',
            caption: 'Chị Thuỳ An'    
        },
        {id: 2,
          content: 'Hạt giống chất lượng, lên đều, cho năng suất cao. Cám ơn Nông nghiệp phố.',
            caption: 'Bác Trần Văn Thành'    
        },
        {id: 3,
          content: 'Giá phải chăng, đổi trả dễ dàng, nhân viên nhiệt tình, vui vẻ.',
            caption: 'Cô Thu Thanh'    
        },
      ]
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const users =  fetch('https://jsonplaceholder.typicode.com/users/?_limit=4')
    //     .then(response => response.json())
    //     .then(users => setData(users));
    //     // const abortCont = new AbortController();
    //     console.log('Use Effect is running');
    //     // return () => {
    //     //     abortCont.abort();
    //     // }
    // }, [])
    return (
        <div className="">
              
            <MyGlider infos={infos}/>
        </div>
    );
}

export default Why

