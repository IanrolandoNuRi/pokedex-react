import React, { useState } from "react";
import styles from "./pokemon-types-circles.module.css";
import {typeColors} from "../../../types/typeColors";

interface ColorCirclesProps {
    circles: string[];
}

const ColorCircles: React.FC<ColorCirclesProps> = ({ circles }) => {
    const [isCircleHovered, setIsCircleHovered] = useState(false);
    const [isToolTipHovered, setIsToolTipHovered] = useState(false);

    const handleMouseEnterCircle = () => {
      setIsCircleHovered(true);
    };
  
    const handleMouseLeaveCircle = () => {
      setIsCircleHovered(false);
    };
    
    const handleMouseEnterToolTip = () => {
      setIsToolTipHovered(true);
    };
  
    const handleMouseLeaveToolTip = () => {
      setIsToolTipHovered(false);
    };

    return (
        <div>
            <div className={styles.circles}
            onMouseEnter={handleMouseEnterCircle}
            onMouseLeave={handleMouseLeaveCircle}
            >
                {circles.map((circleColor, index) => (
                    <span key={index} className={styles.circle} style={{ backgroundColor: typeColors[circleColor] }}></span>
                ))}
            </div>
            {(isCircleHovered || isToolTipHovered) && (
        <div
        className={styles.hoveredElement}
        onMouseEnter={handleMouseEnterToolTip}
        onMouseLeave={handleMouseLeaveToolTip}
        style={{border: '1px solid #ccc', padding: '10px', position: "absolute", backgroundColor: "white", zIndex:4}}>
          <table>
            <thead>
              <tr>
                <th>Color</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
                {circles.map((circleColor, index) => (
                    <tr>
                        <td>
                        <span 
                            key={index}
                            className={styles.circle}
                            style={{ 
                                backgroundColor: typeColors[circleColor]
                            }}></span>
                        </td>
                        <td>{circleColor}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default ColorCircles;