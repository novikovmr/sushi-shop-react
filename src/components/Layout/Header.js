import React from 'react';
import sushiImg from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton.js';

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi-Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImg} alt='Блюдо'/>
      </div>
    </React.Fragment>
  )
}

export default Header