import React from 'react'
import styles from './dashboardHeader.module.css'
import { SearchForm } from '../SearchForm'
import avatar from '../../../../../../assets/images/avatar.jpg'
import { Icons } from '../../../../../../components/ui/Icons'

export const DashboardHeader = () => {
    return (
        <header className={styles.dashboard__header}>
            <h1 className={styles.dashboard__title}>Dashboard всплесков</h1>
            <div className={styles.userBlock}>
                <SearchForm />
                <div className={styles.icons_block}>
                    <span className={styles.icons_block_item}>{Icons.notifications_none}</span>
                    <span className={styles.icons_block_item}>{Icons.moon_solid}</span>
                    <span className={styles.icons_block_item}>{Icons.info_outline}</span>
                </div>
                <img src={avatar} alt="avatar" />
            </div>

        </header>

    )
}
