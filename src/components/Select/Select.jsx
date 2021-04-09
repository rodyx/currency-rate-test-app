import { Select } from 'antd';
import styles from './styles.module.scss';
import 'antd/dist/antd.css';
import { options } from './selectData';

export const SelectComponent = ({ setSelected }) => {
  const handleSelect = (option) => {
    console.log(option)
    setSelected(option);
  };
  
  return (
    <Select
      defaultValue={localStorage.getItem('currency') || 'USD'}
      className={styles.select}
      options={options}
      onSelect={handleSelect}
    />
  )
}