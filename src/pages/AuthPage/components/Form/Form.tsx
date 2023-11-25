import styles from './form.module.css'
import { FormProps } from './form.props'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Input } from '../../../../components/ui/Input'
import { Button } from '../../../../components/ui/Button'

export type FormData = {
  name: string,
  password: string,
}

export type FormErrors = {
  name: string,
  password: string,
}

const initialFormValue = {
  name: '',
  password: '',
}

export function Form({ ...props }: FormProps) {
  const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState<FormData>(initialFormValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate('/dashboard')
    console.log('submit')
  }



  return (
    <div className={styles.wrapper}>
      <div className={[styles.form__container, 'container'].join(' ')}>
        <h2 className={styles.title}>Авторизация</h2>
        <form className={styles.form} id='form' onSubmit={handleSubmit} {...props}>
          <Input
            name='name'
            label='Введите логин:'
            type='text'
            value={formValues.name}
            onChange={handleChange}
            onClick={() => {
              setFormValues({ ...formValues, name: '' })
            }}
            btns={true}
          />
          <Input
            name='password'
            label='Введите пароль:'
            type='password'
            value={formValues.password}
            onChange={handleChange}
            onClick={() => {
              setFormValues({ ...formValues, password: '' })
            }}
            btns={true}
          />
          <Button
            className={styles.btnSubmit}
            disabled={(formValues.name === '' || formValues.password === '')}
            type='submit'
            // onClick={handleSubmit}
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}

