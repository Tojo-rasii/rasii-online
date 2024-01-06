import React from 'react'
import { useState, useEffect } from 'react';


function ClickLove() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <span type={showPassword ? "text" : "password"}>
            <i className={`bi-heart${showPassword ? "-fill" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
                id="icon-showMdp" style={{color: "red"}}
            ></i>
            </span>
        </div>
    )
}

export default ClickLove