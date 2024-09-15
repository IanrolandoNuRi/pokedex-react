import styles from "./pokemon-types-circles.module.css";
import {typeColors} from "../../../types/typeColors";

interface ColorCirclesProps {
    circles: string[];
}

const ColorCircles: React.FC<ColorCirclesProps> = ({ circles }) => {

    return (
        <div>
            <div className={styles.circles}>
                {circles.map((circleColor, index) => (
                    <span key={index} className={styles.circle} style={{ backgroundColor: typeColors[circleColor] }}></span>
                ))}
            </div>
    </div>
    );
};

export default ColorCircles;