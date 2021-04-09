import styles from './styles.module.scss';

const flagMap = new Map([
  ["USD", 'https://cutt.ly/9cPAwVE'],
  ["EUR", 'https://cutt.ly/xcPATfI'],
  ["GBP", 'https://cutt.ly/6cPA0Ns'],
  ["CNY", 'https://cutt.ly/XcPSsKE'],
  ["JPY", 'https://cutt.ly/icPSRPi'],
  ["CHF", 'https://cutt.ly/ucPSKGQ'],
  ["RUB", 'https://cutt.ly/zcPSVhn'],
  ["UZS", 'https://cutt.ly/ucPS17P'],
]);

export const options = Array.from(flagMap).map(([key, value]) => {
  return (
    {
      value: key,
      label: <div className={styles.option}><img src={value} alt="flag" height="20px" width="20px" />{key}</div>
    }
  )
});