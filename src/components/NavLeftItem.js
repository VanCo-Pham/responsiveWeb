import React, { useState, useEffect } from 'react'
import ImageSlider from './ImageSlider'

const NavLeftItem = () => {

    return (
        <div className="show-item">
            <div className = "right-item">
                    <ImageSlider />
            </div>
        </div>
    );
}

export default NavLeftItem;
