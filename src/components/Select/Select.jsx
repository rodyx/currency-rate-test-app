import { Select } from 'antd';
import styles from './styles.module.scss';
import { flagArr } from './selectData';
import { useStore } from 'effector-react';
import { $baseCurrency } from '../../features/currency';

export const SelectComponent = ({ setSelected }) => {
  const baseCurrency = useStore($baseCurrency)

  const handleSelect = (option) => {
    console.log(option)
    setSelected(option);
  };
  
  return (
    <Select
      defaultValue='USD'
      value={baseCurrency}
      className={styles.select}
      onSelect={handleSelect}
    >
      {flagArr.map((item) => (
        <Select.Option
          value={item.name}
        >
          <div className={styles.option}><img src={item.img} alt="flag" height="20px" width="20px" />{item.name}</div>
        </Select.Option>
      )
        
      )}
    </Select>
  )
}

