import {React, useState} from 'react'

const SignUpPage = (props) =>{
    const [email, setEmail] = useState(null)
    return (
        <>
            <form>
                <h1>
                    Создайте аккаунт и читайте с нами!
                </h1>
                <div className="inputs">
                    <input type="text" placeholder="введите e-mail" />
                    
                    
                    <input type="text" placeholder="введите пароль" />
                    <input type="text" placeholder="введите Имя" />
                </div>
                <button type="submit">
                    Создать Аккаунт
                </button>
            </form>
            
        </>
    )
}


export default SignUpPage