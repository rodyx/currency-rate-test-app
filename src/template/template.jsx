import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { Header } from '../components/Header/Header'

export const Template = (props) => {
  return (
    <>
      <Header />
      <main className={styles.appMain}>
        {props.children}
      </main>
    </>
  )
}