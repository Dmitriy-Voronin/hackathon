import { DashboardHeader } from './components/DashboardHeader'
import { Sessions } from './components/Sessions'
import { Transfers } from './components/Transfers'
import styles from './content.module.css'

const list = [
    {
        city: 'Москва',
        value: 10000
    },
    {
        city: 'Москва',
        value: 45000
    },
    {
        city: 'Париж',
        value: 5000
    },
    {
        city: 'Тель-Авив',
        value: 15000
    },
]

export const Content = () => {
    return (
        <div className={styles.dasboard__container}>
           <DashboardHeader />
            <main className={styles.main}>
                <section className={styles.info}>
                    <Sessions dates='1-6 ноября, 2023'/>
                    <Transfers list={list}/>
                    {/* <Visits /> */}
                </section>
            </main>
        </div>

    )
}