import {React, useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import schema from '../../servises/schema'
import { LogStateContext } from '../../Providers/LogState'
import './FormStyle.css'



export const SignInForm = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema.authSchema),
        mode: 'onChange'
    })
    const {login} = useContext(LogStateContext)
    const [wrongPass, setWrongPass] = useState(false)
    const navigate = useNavigate()
   
    
    
    const authFunc = (data) =>{
        let user = JSON.parse(localStorage.getItem("user"));
        if(user.email === data.email && user.password === data.password){
            login()
            setTimeout(()=>navigate('/'), 1000)
            if(wrongPass) setWrongPass(false)
            
        }else {
            setWrongPass(true)
        }
    }
    
    
        
    const removeRedFunc = () =>{
        let inputErrorStyle = 'input-error'
        setTimeout(()=>{
            setWrongPass(false)
        }, 3000)
        return inputErrorStyle
    }

    return(
            <div className ={'wrapper'}>
                <form onSubmit = {handleSubmit(authFunc)}>
                    <p>
                        Вход в учетную запись
                    </p>
                    <span className={!wrongPass?'none':'wrongPass'}>Вы ввели неправильный пароль или логин</span>
                    
                    <div className={`inputs ${wrongPass&&removeRedFunc()}`}>
                        <input type="text" placeholder="Введите e-mail" {...register('email')}/> 
                        {errors.email && <p>{errors.email.message}</p>}                
                        <input type="password" placeholder="Введите пароль" {...register('password')} />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className={"buttons signIn--buttons"}>
                        <button type="submit">
                            Войти
                        </button>
                        <button type="button" onClick ={(e)=>{
                            e.preventDefault()
                            navigate('/SignUpPage')
                        }}>
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
            )
}
