import React from 'react';
import styles from "./sidebar.module.css";
import { Logo } from '../../../../components/ui/logo';
import { TabBar } from '../../../../components/ui/TabBar';

type TSidebar = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>



export const Sidebar: React.FC<TSidebar> = ({ ...props }) => {
    const navList = [
        {
          text: 'Dashboard всплесков',
          path: '',
          icon: 'IconDashboard'
        },
        {
          text: 'Dashboard операций',
          path: '',
          icon: 'IconTables'
        },
        {
          text: 'Функции',
          path: '',
          icon: 'IconKanban'
        },
        {
          text: 'Профиль',
          path: '',
          icon: 'IconProfile'
        },
        {
          text: 'Вход в  систему',
          path: '',
          icon: 'IconAuthentication'
        },
      ];
    console.log(navList)
    return (
        <aside className={styles.aside} {...props}>
            <Logo />
            <TabBar className={styles.nav} list={navList} />
        </aside>
    )
}