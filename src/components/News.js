import pic_01 from '../images/seed.jpg'
import pic_02 from '../images/pots.jpg'
import pic_03 from '../images/orchid.jpg'
import pic_04 from '../images/car_02.jpg'



const News = () => {
    
    return (
        <div className="news">
            <div className="news-title">Bài viết mới nhất</div>
            {/* <hr></hr> */}
            <div className="news-grid">
                <div className="news-grid-item">
                    <img src={pic_01} alt=""/>
                    <h2>Cách xử lý hạt giống trước khi gieo trồng?</h2>   
                    <p>
                    <span> 1. Ngâm hạt</span><br></br>
                    - Không nhất thiết hạt nào cũng phải ngâm trước khi gieo, cần dựa vào kích thước để quyết định.
                    
                    </p>                
                </div>
                <div className="news-grid-item">
                    <img src={pic_02} alt=""/>
                    <h2>Xử lý đất trồng bị thừa phân, thừa dinh dưỡng?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt molestiae quo qui aut cupiditate.</p>
                </div>
                <div className="news-grid-item">
                    <img src={pic_03} alt=""/>
                    <h2>Ý nghĩa và cách trồng hoa thanh liễu</h2>
                    <p>Ratione mollitia ipsa cupiditate vero accusamus reprehenderit eveniet molestias, voluptatum nam facere cumque odit.</p>
                </div>
                <div className="news-grid-item">
                    <img src={pic_04} alt=""/>
                    <h2>Cách tưới nước cho cây khi vắng nhà</h2>
                    <p>
                    Nếu bạn sắp đi chơi xa, công tác, du lịch… nhưng muốn đảm bảo cây được cung cấp đủ nước trong thời gian vắng nhà thì tìm hiểu ngay bài viết này nhé.</p>
                </div>
            </div>
            <div className="news-readmore"><a href="">Xem thêm</a> </div>
        </div>
    );
}

export default News