import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FloatingScores = () => {
    const dispatch = useDispatch();
    const floatingScores = useSelector(state => state.floatingScores);

    return <>
        {floatingScores.map((fs, index) => {
            return <div className="floating-score" style={{ left: fs.x, top: fs.y }} key={index}>
                <div>{fs.text}</div>
            </div>
        })}
    </>;
};

export default FloatingScores;