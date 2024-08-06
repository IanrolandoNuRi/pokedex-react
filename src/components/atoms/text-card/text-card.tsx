import React from "react";
import styles from "./text-card.module.css"

interface TextCardProps {
    content: string;
    alignment?: 'left' | 'center' | 'right';
    fontFamily?: string;
    color?: string;
}

const TextCard: React.FC<TextCardProps> = ({ content, alignment, fontFamily, color})  => {
    const cardStyle = {
        textAlign : alignment as "left" | "center" |"right",
        fontFamily,
        color,
    };

    return (
        <div className="syles.card" style={cardStyle}>
            <p className={styles.content}>{content}</p>
        </div>
    )
}


export default TextCard;
