// src/components/pages/IndexPage/IndexPage.tsx
import React from 'react';
import styles from './IndexPage.module.css';

const IndexPage: React.FC = () => {
  return (
    <div className={styles.indexPage}>
      <h1>Welcome to the Index Page</h1>
      <p>This is the main landing page of the application.</p>
    </div>
  );
};

export default IndexPage;