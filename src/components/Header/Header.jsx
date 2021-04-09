import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SelectComponent } from '../Select/Select';
import { currencyWantToChange, send } from '../../features/currency';

export const Header = () => {
  const [selected, setSelected] = useState();
  
  useEffect(() => {
    currencyWantToChange(selected)
    send(selected)
  }, [selected])
  
  return (
    <header className={styles.appHeader}>
      <NavLink exact={true} to="/" activeClassName={styles.selected}>
        <div>Converter</div>
      </NavLink>
      <div className={styles.selectWrapper}>
        <span>Currency:</span>
        <SelectComponent className={styles.headerSelect}  {...{ setSelected }} />
      </div>
      <NavLink to="/currency-rate" activeClassName={styles.selected}>
        <div>Rates</div>
      </NavLink>
    </header>
  )
}