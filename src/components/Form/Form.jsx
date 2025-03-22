import {React, useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import schema from '../../servises/schema'


const Form = (props) =>{
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    
    
    let nameInput
    const [isRegistred, setIsRegistred] = useState(null);
    const [isAuth, setIsAuth] = useState(null)
    
    
    if (props.registration) {
        nameInput =  <>
            <input type="text" placeholder="Введите имя" {...register('name')}/>
            {errors.name && <p>{errors.name.message}</p>}
        </>
    }

    const handleFunc = (data) =>{
        let { email } = data;
            let stringifiedData = JSON.stringify(data);
            let user = JSON.parse(localStorage.getItem("user"));
        if(props.registration){
            
            if (user && user.email === email) {
                alert("this email is used by other account");
                setIsRegistred(true);
            } else {
                localStorage.setItem("user", stringifiedData);
                setIsAuth(true)
                reset()
            }
        }else{
            console.log(email)
        }
    }
   return(
        <form onSubmit = {handleSubmit(handleFunc)}>
            <h1>
               { props.registration?'Создайте аккаунт и читайте с нами!': 'Войти в Аккаунт'}
            </h1>
            <div className="inputs">
                {nameInput}
                <input type="text" placeholder="Введите e-mail" {...register('email')}/> 
                {errors.email && <p>{errors.email.message}</p>}                
                <input type="password" placeholder="Введите пароль" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">
                Создать Аккаунт
            </button>
        </form>
    )    
}

export default Form