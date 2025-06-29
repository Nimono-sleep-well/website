import React, { useEffect, useState } from "react";
import SplitText from "./SplitText/SplitText";

const OpeningAnimation = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish();
        }, 2000); // 2秒表示
        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!visible) return null;
    return (
        <div 
            className="fixed inset-0 flex items-center justify-center z-[9999] transition-opacity duration-700"
            style={{ pointerEvents: 'none' }}>
            <SplitText>
                Hello
            </SplitText>
        </div>
    );
};

export default OpeningAnimation;