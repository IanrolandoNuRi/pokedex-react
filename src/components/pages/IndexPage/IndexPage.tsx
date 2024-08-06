// src/components/pages/IndexPage/IndexPage.tsx
import React from 'react';
import styles from './IndexPage.module.css';
import Pokedex from '../../organisms/pokedex-dashboard/pokedex-dashboard';
import myImage from '../../../assets/img/pokedex-title.png'

const IndexPage: React.FC = () => {
  return (
    <div className={styles.indexPage}>
      <h1>Welcome to the Index Page</h1>
      <img src={myImage} alt="Description" />
      <p>This is the main landing page of the application.</p>
      <Pokedex />
    </div>
  );
};

export default IndexPage;