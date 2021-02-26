import {Link} from 'react-router-dom';
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className="nav">
            <div className="nav-icon" onClick={() => setMenu(!menu)}><MenuIcon /></div>
            <ul className={menu ? 'small-clicked' : ""}>
                <Link to="/"><li>TRANG CHỦ</li></Link>
                <Link to="/"><li>SẢN PHẨM</li></Link>
                <li>KIỂM TRA ĐƠN HÀNG</li>
                <li>BLOG LÀM VƯỜN</li>
                <li>CẨM NANG LÀM VƯỜN</li>
                <Link to="/"><li>LIÊN HỆ</li></Link>
            </ul>
        </div>

    );
}

export default Navbar