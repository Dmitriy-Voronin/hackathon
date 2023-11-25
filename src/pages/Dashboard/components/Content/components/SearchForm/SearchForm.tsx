import React from 'react'
import styles from './searchForm.module.css'
import { Input } from '../../../../../../components/ui/Input'
import { Icons } from '../../../../../../components/ui/Icons'

export const SearchForm = () => {
    const [value, setValue] = React.useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <form className={styles.searchForm}>
            <Input
                className={styles.search__input}
                btns={false}
                value={value}
                onChange={handleChange}
                searchIcon={Icons.SearchIcon}
                placeholder='Поиск'
            />
        </form>

    )
}
