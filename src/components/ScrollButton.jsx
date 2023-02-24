import React, { useEffect, useState } from "react";
import Arrow from '../assets/arrow.webp'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener(
            "scroll", toggleVisible
        );
    }, []);

    return (
        <div className="fixed w-full left-[82%] bottom-[90px] z-1 cursor-pointer md:left-[92%] xl:left-[95%] overflow-x-hidden">
            <img
                src={Arrow}
                className="w-[36px] md:w-[46px] xl:w-[46px]"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none", }}
            />
        </div>
    );
};

export default ScrollButton;