import React from 'react'
// import styles from './authPage.module.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Form } from './components/Form/Form'

export const AuthPage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <Form />
        </>

    )
}
