// import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/ui/Button';
import { TabBar } from '../../../../components/ui/TabBar';
import { Logo } from '../../../../components/ui/logo'
import styles from './Header.module.css'
// import { useDispatch } from 'react-redux';

type THeader = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const tabList = [
  {
    text: 'Направления',
    path: ''
  },
  {
    text: 'Отбор',
    path: ''
  },
  {
    text: 'Условия',
    path: ''
  },
  {
    text: 'FAQ',
    path: ''
  },
];

export const Header = ({ ...props }: THeader) => {
  //   const navigate = useNavigate()


  //   const handleClick = () => {
  //     dispatch(removeUserData())
  //     dispatch(removeThemes())
  //     navigate('/')
  //   }
  return (
    <header className={styles.header} {...props}>
      <div className={[styles.header__container, 'container'].join(' ')}>
        <Logo className={styles.logo} />
        <TabBar className={styles.header__tabBar} list={tabList} />
        <Button className={styles.btn}>
          ВОЙТИ
        </Button>

      </div>
    </header>
  )
}