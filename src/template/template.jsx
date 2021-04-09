import styles from './styles.module.scss';
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