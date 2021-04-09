import { useStore } from 'effector-react';
import { useState } from 'react';
import { Template } from '../../template/template';
import { $convertRate, $convertResult, sendInputValue } from './model';
import styles from './styles.module.scss';

export const Converter = () => {
  const [value,setValue] = useState('')
  const convertResult = useStore($convertResult)
  const convertRate = useStore($convertRate)
  
  const handleSubmit = e => {
    sendInputValue(value)
    
    e.preventDefault()
    e.currentTarget.reset()
  }

  const handleInputChange = e => {
    setValue(e.target.value)
  }

  return (
    <Template>
      <div className={styles.converter}>
        <form onSubmit={handleSubmit}>
          <div className={styles.converterInput}>
            <input 
            placeholder="100 usd in..."
            onChange={handleInputChange}
            />
          </div>
        </form>
        <div className={styles.resultWrapper}>
          <div className={styles.resultBlock}>
            <span className={styles.resultText}>Rate</span>
            <div className={styles.resultValue}>{convertRate?.toFixed(2)}</div>
          </div>
          
          <div className={styles.resultBlock}>
            <span className={styles.resultText}>Result</span>
            <div className={styles.resultValue}>{convertResult?.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </Template>
  )
}