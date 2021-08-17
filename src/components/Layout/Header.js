import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>GreenEats</h1>
        <HeaderCartButton />
      </header>
      <button>Cart</button>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='Good food' />
      </div>
    </>
  );
};

export default Header;
