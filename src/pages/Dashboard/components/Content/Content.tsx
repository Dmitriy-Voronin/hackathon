import { DashboardHeader } from './components/DashboardHeader'
import { Sessions } from './components/Sessions'
import { Transfers } from './components/Transfers'
import { Visits } from './components/Visits'
import styles from './content.module.css'

const tableList = [
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Yahoo',
        amount: 'Р36,850',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
    {
        name: 'Перевод',
        to: 'Google',
        amount: 'Р42,000',
        status: 'Одобрено',
        date: '12 Jan 2023',
        city: 'Москва',
        timestamp: '12:20',
        repeat: false
    },
   
]

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
                    <Sessions dates='1-6 ноября, 2023' />
                    <Transfers list={list} />
                    <Visits dates={' 1-6 Dec, 2023'} count={7} value={2.1} />
                </section>
                <section className={styles.table_wrap}>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th className={styles.th}>Имя операции</th>
                                <th className={styles.th}>Куда</th>
                                <th className={styles.th}>Сумма</th>
                                <th className={styles.th}>Статус операции</th>
                                <th className={styles.th}>Дата</th>
                                <th className={styles.th}>Город перевода</th>
                                <th className={styles.th}>Время транзакции</th>
                                <th className={styles.th}>Повторение транзакций</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableList.map((taibleListitem) => (
                                <tr>
                                    {Object.values(taibleListitem).map((item) => (
                                        <td>{item}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>

    )
}