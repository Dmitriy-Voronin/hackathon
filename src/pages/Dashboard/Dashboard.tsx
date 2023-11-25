import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Content } from './components/Content'
import styles from './dashboard.module.css'

export const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Content />
        </div>

    )
}
