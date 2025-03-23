import * as Yup from 'yup'

const regSchema = Yup.object().shape({
    email: Yup.string()
        .email('Некорректный email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Не существующий e-mail')
        .required('Обязательное поле для заполнения'),   
    password: Yup.string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'Пароль должен содержать буквы, спецсимвол, цифру')
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Пароль обязателен'),
    name: Yup.string()
        .min(2, 'Имя должно содержать минимум 2 символа')    
        .required('Имя обязательно')
})
const authSchema = Yup.object().shape({
    email: Yup.string()
        .email('Некорректный email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Не существующий e-mail')
        .required('Обязательное поле для заполнения'),   
    password: Yup.string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'Пароль должен содержать буквы, спецсимвол, цифру')
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Пароль обязателен'),
})

const schema = {regSchema, authSchema}

export default schema