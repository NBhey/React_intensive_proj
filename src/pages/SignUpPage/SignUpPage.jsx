import {React, useState} from 'react'
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import "./SignUpPage.css"
const schema = Yup.object().shape({
    email: Yup.string()
        .required('Обязательное поля для заполнения')   
        .email('Некорректный email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Пароль'),
    passwort: Yup.string()
        .required('Пароль обязателен')
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'Пароль должен содержать буквы, спецсимвол, цифру'),
    name: Yup.string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа')    
})
const SignUpPage = (props) =>{
    // const [email, setEmail] = useState(null)
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const submitForm = (e) => {
        console.log(e)
    }
    return (
        <>
            <form onSubmit = {handleSubmit(submitForm)}>
                <h1>
                    Создайте аккаунт и читайте с нами!
                </h1>
                <div className="inputs">
                    <input type="text" placeholder="Введите e-mail" {...register('email')}/> 
                    {errors.email && <p>{errors.email.message}</p>}                
                    <input type="text" placeholder="Введите пароль" {...register('passwort')} />
                    {errors.passwort && <p>{errors.passwort.message}</p>}
                    <input type="text" placeholder="Введите имя" {...register('name')}/>
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <button type="submit">
                    Создать Аккаунт
                </button>
            </form>
            
        </>
    )
}


export default SignUpPage