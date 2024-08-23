import React from "react";
import styles from "./text-card.module.css"

interface TextCardProps {
    content: string;
    alignment?: 'left' | 'center' | 'right';
    fontFamily?: string;
    color?: string;
    fontWeight?: 'bold' | 'normal';
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    cursor?: string
}

const TextCard: React.FC<TextCardProps> = ({ 
    content,
    alignment,
    fontFamily,
    color,
    textTransform,
    headingLevel="h5",
    fontWeight
})  => {
    const cardStyle = {
        textAlign : alignment as "left" | "center" |"right",
        fontFamily,
        color,
        textTransform,
        headingLevel,
        fontWeight,
        cursor: "default",
    };

    return (
        <div className={styles.card} style={cardStyle}>
            <p className={styles[headingLevel]}>{content}</p>
        </div>
    )
}


export default TextCard;
