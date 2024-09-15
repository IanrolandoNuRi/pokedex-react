import React from 'react';
import styles from './tooltip-pokemon-types.module.css';
import { typeColors } from '../../../types/typeColors';

interface TooltipProps {
  circles: string[];
}

const Tooltip: React.FC<TooltipProps> = ({  circles }) => {
  return (
    <div className={styles.tooltip}
    >
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {circles.map((circleColor, index) => (
            <tr key={index}>
              <td>
                <span
                  className={styles.circle}
                  style={{
                    backgroundColor: typeColors[circleColor],
                  }}
                ></span>
              </td>
              <td>{circleColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tooltip;