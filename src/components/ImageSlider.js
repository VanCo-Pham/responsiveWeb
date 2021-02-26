import React, { useState, useEffect, useCallback } from 'react'

const ImageSlider = () => {
    const sliderImages = document.querySelectorAll('.imageSlide');
    // const sliderText = document.querySelectorAll('.slide-content-info');
    const [current, setCurrent] = useState(3);
    const reset = () => {
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
            sliderImages[i].classList.remove = 'sliderAni';
            // sliderText[i].classList.remove = 'sliderTextAni';
        }
    }

    const slideEdge = (arrow) => {
        reset();
        if ( current === 0 & arrow === 'left') {
            sliderImages[sliderImages.length - 1].style.display = 'block';
            sliderImages[sliderImages.length - 1].classList.add('sliderAni');
            // sliderText[sliderImages.length - 1].classList.add('sliderTextAni');

            setCurrent(sliderImages.length - 1);
        };
        if (current === (sliderImages.length - 1) & arrow === 'right') {
            sliderImages[0].style.display = 'block';  
            sliderImages[0].classList.add('sliderAni');
            // sliderText[0].classList.add('sliderTextAni');

            setCurrent(0);
        }
    }
    const slideLeft = () => {
        if (current > 0) {
            reset();
            sliderImages[current - 1].style.display = 'block';
            sliderImages[current - 1].classList.add('sliderAni');
            // sliderText[current - 1].classList.add('sliderTextAni');
            setCurrent(current - 1);     
        } else {
            slideEdge('left');
        }
    } 
    const slideRight = () => {
        if (current < sliderImages.length - 1) {
            reset();
            sliderImages[current + 1].style.display = 'block';
            sliderImages[current + 1].classList.add('sliderAni'); 
            // sliderText[current + 1].classList.add('sliderTextAni');
     
            setCurrent(current + 1);
        } else {
            slideEdge('right');
        }
        
    }
    useEffect(() => {
        setCurrent(0);

    }, [])

    const handleClick = (e) => {
        reset();
        const index = parseInt(e.target.id);
        sliderImages[index].style.display = 'block';
        sliderImages[index].classList.add('sliderAni');
        // sliderText[currentImage].classList.add('sliderTextAni');
        setCurrent(index); 
    }
    useEffect(() => {
        const autoSlide = setInterval(slideRight, 4000);
        console.log('render');
        return () => {
            clearInterval(autoSlide);
        }
    }, [current])

    return (
        <div className="imageSlider">
            <div id="slider">
                <div className="arrow" id="arrow-left" 
                    onClick={slideLeft}>
                </div>
                <div className="imageSlide slide1">
                    <div className="slide-content">
                    <div className="slide-content-info">
                            <h2>Hạt giống chất lượng</h2>

                            <p>Nhập khẩu trực tiếp từ <br></br><span className="highlight">Nhật Bản, Châu Âu</span>.</p>
                            <p>Khả năng nảy mầm, chất lượng đã được kiểm tra chặt chẽ.</p>
                        </div>
                        <span className="slider-content-info-small"> Hạt giống chất lượng</span>
                    </div>
                </div>
                <div className="imageSlide slide2">
                    <div className="slide-content">
                    <div className="slide-content-info">
                            <h2>Mẫu chậu đa dạng</h2>
                            <p>Hiện đại, cổ điển,<br></br> thân thiện môi trường...</p>
                            <p>Hơn 100 mẫu chậu đang đợi bạn khám phá.</p>
                        </div>
                        <span></span>
                        <span className="slider-content-info-small"> Mẫu chậu đa dạng</span>

                    </div>
                </div>
                <div className="imageSlide slide3">
                    <div className="slide-content">
                    <div className="slide-content-info">
                            <h2>Giảm giá sốc</h2>
                            <p>Sale tất cả mặt hàng từ <br></br>10 - 50%.</p>
                            <p>Áp dụng từ Mùng 1 Tết âm lịch đến hết năm nay.</p>
                            <p>Mua ngay không hết.</p>
                        </div>
                        <span></span>
                        <span className="slider-content-info-small"> Giảm giá sốc</span>
                        
                    </div>
                </div>
                <div className="imageSlide slide4">
                    <div className="slide-content">
                    <div className="slide-content-info">
                            <h2>Miễn phí tư vấn kỹ thuật.</h2>
                            <p>Đội ngũ nhân viên nhiệt tình,<br></br> giàu kinh nghiệm.</p>
                            <p>Sẵn sàng giải đáp mọi thắc mắc.</p>
                        </div>
                        <span></span>
                        <span className="slider-content-info-small"> Miễn phí tư vấn kỹ thuật.</span>

                    </div>
                </div>
                <div className="arrow" id="arrow-right" onClick={slideRight}></div>
            </div>
            {/* <div className="test" onClick={autoSlide}>Click Me</div> */}
        </div>
    );
}

export default ImageSlider;

function createIndicator (sliderImages, handleClick) {
    console.log('indicator is running');
        let output = [];
        for (var i = 0; i < sliderImages.length; i++) {
            output.push(<a key={i} id={i} onClick={handleClick}>O</a>)
            }
        return output;
}

// function autoSlide () {
//     const sliderImages = document.querySelectorAll('.imageSlide');
//     let current = 0;
//     const reset = () => {
//         for (let i = 0; i < sliderImages.length; i++) {
//             sliderImages[i].style.display = 'none';
//             sliderImages[i].classList.remove = 'sliderAni';
//         }
//     }

//     const slideEdge = (arrow) => {
//         reset();
//         if ( current === 0 & arrow === 'left') {
//             sliderImages[sliderImages.length - 1].style.display = 'block';
//             sliderImages[sliderImages.length - 1].classList.add('sliderAni');
//             current = sliderImages.length - 1;
//         };
//         if (current === (sliderImages.length - 1) & arrow === 'right') {
//             sliderImages[0].style.display = 'block';  
//             sliderImages[0].classList.add('sliderAni');
//             current = 0;
//         }
//     }

//     const slideRight = () => {
//         if (current < sliderImages.length - 1) {
//             reset();
//             sliderImages[current + 1].style.display = 'block';
//             sliderImages[current + 1].classList.add('sliderAni'); 
//             current++;
//         } else {
//             slideEdge('right');
//         }
        
//     }
//     setInterval(slideRight, 4000);
//     console.log('Outside fuction is running');


// }