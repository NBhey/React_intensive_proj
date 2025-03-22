import * as Yup from 'yup'

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Обязательное поле для заполнения')   
        .email('Некорректный email')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Не существующий e-mail'),
    password: Yup.string()
        .required('Пароль обязателен')
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/, 'Пароль должен содержать буквы, спецсимвол, цифру'),
    name: Yup.string()
    .required('Имя обязательно')
    .min(2, 'Имя должно содержать минимум 2 символа')    
})

export default schema