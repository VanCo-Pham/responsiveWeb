import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../images/logo.png'
const Topbar = () => {
    
    return (
        <div className="topbar" id="topbar">
            <div className="topbar-logo">
                
                <img src={logo} alt=""/>
            </div>
            <div className="topbar-other">

            <div className="topbar-search">
                {/* <form action="">
                    <select name="topbar-option" id="topbar-option">
                        <option value="sanpham">Sản Phẩm</option>
                        <option value="blog">Bài viết</option>
                    </select> */}
                    {/* <input type="text" name="search-text" id="search-text" size="25" placeholder="Bạn đang cần tìm sản phẩm nào?"/> */}
                    {/* <input type="submit" value="Search"/>
                </form> */}
                    <span className="topbar-search-Icon topbar-icons">
                        <SearchIcon />
                    </span>
            </div>
            <div className="topbar-login topbar-icons">
                {/* <p>Tài khoản</p> */}
                <AccountCircleIcon  />
                <p></p>
            </div>
            <div className="topbar-cart topbar-icons">
                {/* <p>Giỏ hàng</p> */}
                <ShoppingCartIcon  />
                <div className="topbar-cart-info">
                    <p>Hiện chưa có sản phẩm</p>
                    <hr></hr>
                    <div className="topbar-cart-info-sum">
                        <p>TỔNG TIỀN</p>    
                        <p className="sum" id="topbar-cart-info-sum">0 đ</p>
                    </div>
                    <div className="topbar-cart-info-action">
                        <p>Xem giỏ hàng</p>
                        <p>Đặt hàng</p>
                    </div>
                </div>
            </div>
                    </div>
        </div>
    );
}

export default Topbar