import React from 'react';
import logo from '../../assets/loading/logo.png'
import styles from './styles.module.css'


const Loading: React.FC = () => {
  
  return (
    <div className={styles.load}>
      <img className={styles.img}src={logo} alt='Loading'/>  
      <h3> Cargando</h3>
    </div>
  );
};

export default Loading;
