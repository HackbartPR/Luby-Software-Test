import * as yup from 'yup'

export const emailSchema = yup.object().shape({
  email: yup.string().email('E-mail Inválido!').required('Campo não preenchido!'),
})

export const passwordSchema = yup.object().shape({
  password: yup.string().min(5, 'Mínimo 5 caracteres').required('Campo não preenchido!'),
})
