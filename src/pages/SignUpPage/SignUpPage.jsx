import {React, useState} from 'react'
import {useForm} from 'react-hook-form'
import Form from '../../components/Form/Form'
import "./SignUpPage.css"

const SignUpPage = (props) =>{
    
    // const {reset} = useForm()

    // const submitForm = (data) => {
    //     let { name, email, password } = data;
    //     let stringifiedData = JSON.stringify(data);
    //     let user = JSON.parse(localStorage.getItem("user"));
    //     if (user && user.email === email) {
    //       alert("this email is used by other account");
    //       setIsRegistred(true);
    //     } else {
    //       localStorage.setItem("user", stringifiedData);
    //       setIsAuth(true)
    //       reset()
    //     }
    // };

    return (
          <Form 
                registration = {true}
                />  
    )
}


export default SignUpPage