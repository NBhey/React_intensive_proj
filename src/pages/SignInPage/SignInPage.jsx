import {React, useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import schema from '../../servises/schema'
import { LogStateContext } from '../../Providers/LogState'
import "../SignUpPage/SignUpPage.css"



const SignInPage = (props) =>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema.authSchema),
        mode: 'onChange'
    })
    const {isAuth, login, logout} = useContext(LogStateContext)
    const navigate = useNavigate()
   
    
    const authFunc = (data) =>{
        let user = JSON.parse(localStorage.getItem("user"));
        if(user.email === data.email && user.password === data.password){
            login()
            setTimeout(()=>navigate('/'), 1000)
            
        }else{
            alert('hueta')
        }
    }
       
    return(
        <form onSubmit = {handleSubmit(authFunc)}>
            <h1>
              Войти в Аккаунт
            </h1>
            <div className="inputs">
                <input type="text" placeholder="Введите e-mail" {...register('email')}/> 
                {errors.email && <p>{errors.email.message}</p>}                
                <input type="password" placeholder="Введите пароль" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">
                Войти
            </button>
        </form>
    )    
}

export default SignInPage