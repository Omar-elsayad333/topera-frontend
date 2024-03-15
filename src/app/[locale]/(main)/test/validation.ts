import * as yup from 'yup'
export const selectSchema = yup.object({
  multi: yup.array().required(),
  single: yup.object().required(),
})
