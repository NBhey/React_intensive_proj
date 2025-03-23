import {React, useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import schema from '../../servises/schema'
import { LogStateContext } from '../../Providers/LogState'
import "./SignUpPage.css"


const SignUpPage = (props) =>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema.regSchema),
        mode: 'onChange'
    })
    const authState = useContext(LogStateContext)

    const {isAuth, login, logout} = authState
    
    const [isRegistred, setIsRegistred] = useState(false);

    let btnSignIn

    let user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate()

    const registerFunc = (data) =>{
        
        if(user && user.email === data.email){
            setIsRegistred(true);
        }else {
            localStorage.setItem("user",  JSON.stringify(data));
            login()
            navigate('/')
            reset()
        }
        
    }
    const navToSignInPage = (e) =>{
        e.preventDefault()
        navigate('/')

    }
    if(isRegistred){
        btnSignIn = <button type="button" onClick={navToSignInPage}>Войти в Аккаунт</button>
    }
    return(
        <form onSubmit = {handleSubmit(registerFunc)}>
            <h1>
              {!isRegistred?"Создайте аккаунт и читайте с нами!":"Похоже, такая почта уже используется друшим аккаунтом"}
            </h1>
            <div className="inputs">
                <input type="text" placeholder="Введите имя" {...register('name')}/>
                {errors.name && <p>{errors.name.message}</p>}
                <input type="text" placeholder="Введите e-mail" {...register('email')}/> 
                {errors.email && <p>{errors.email.message}</p>}                
                <input type="password" placeholder="Введите пароль" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">
                Создать Аккаунт
            </button>
            {btnSignIn}
        </form>
    )    
}


export default SignUpPage