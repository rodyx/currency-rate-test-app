import styles from './styles.module.scss';
import { Template } from '../../template/template';
import { useStore } from 'effector-react';
import { $baseCurrency, $currencyList, send } from '../../features/currency';
import useInterval from '../../api/useInterval';
import { useEffect } from 'react';

export const CurrencyRate = () => {
  const currencyList = useStore($currencyList)
  const baseCurrency = useStore($baseCurrency)
  
  useEffect(() => send(baseCurrency),[])
  useInterval(() => send(baseCurrency), 15000)
  
  return (
    <Template>
      <div className={styles.hWrapper}>
        <h1>Exchange Rates</h1>
        <span style={{ color: '#75777e'}}>(for 1 {baseCurrency})</span>
      </div>
      <div className={styles.rateWrapper}>
        {Array.from(currencyList).map(([key, value], index) => {
          return (
            <div className={styles.rateItem} key={key}>
              <div>{value.toFixed(2)}</div>
              <div>{key.slice(-3)}</div>
            </div>
          )
        })}
      </div>
    </Template>
  )
}