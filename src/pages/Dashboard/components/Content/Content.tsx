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
        repeat: 'Нет'
    },
    {
        name: 'Покупка',
        to: 'Yahoo',
        amount: 'Р36,850',
        status: 'Обработка',
        date: '4 Feb 2023',
        city: 'Москва',
        timestamp: '15:45',
        repeat: 'Нет'
    },
    {
        name: 'Перевод',
        to: 'Microsoft',
        amount: 'Р12,300',
        status: 'Заблокированна',
        date: '18 Mar 2023',
        city: 'Стамбул',
        timestamp: '15:30',
        repeat: 'Нет'
    },
    {
        name: 'Покупка',
        to: 'Amazon',
        amount: 'Р89,456',
        status: 'Одобрено',
        date: '27 Apr 2023',
        city: 'Москва',
        timestamp: '23:00',
        repeat: 'Нет'
    },
    {
        name: 'Перевод',
        to: 'Flipkart',
        amount: 'Р32,800',
        status: 'Заблокированна',
        date: '18 May 2023',
        city: 'Лондон',
        timestamp: '22:00',
        repeat: 'Нет'
    },
    {
        name: 'Перевод',
        to: 'Meta',
        amount: 'Р12,300',
        status: 'Заблокированна',
        date: '21 Jun 2023',
        city: 'Лондон',
        timestamp: '22:01',
        repeat: 'Да'
    },
    {
        name: 'Перевод',
        to: 'X',
        amount: 'Р98,270',
        status: 'Заблокированна',
        date: '28 Jul 2023',
        city: 'Лондон',
        timestamp: '22:01',
        repeat: 'Да'
    },
    {
        name: 'Покупка',
        to: 'Youtube',
        amount: 'Р34,000',
        status: 'Обработка',
        date: '22 Aug 2023',
        city: 'Ростов-на-Дону',
        timestamp: '14:00',
        repeat: 'Нет'
    },
    {
        name: 'Перевод',
        to: 'Figma',
        amount: 'Р23,500',
        status: 'Одобрено',
        date: '13 Sep 2023',
        city: 'Воронеж',
        timestamp: '15:00',
        repeat: 'Нет'
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
                            <tr className={styles.tr}>
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
                                <tr className={styles.tr}>
                                    {Object.values(taibleListitem).map((item) => (
                                        <td className={styles.td}>{item}</td>
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