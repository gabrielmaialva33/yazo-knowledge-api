import * as yup from 'yup'

const store = yup.object().shape({
  title: yup.object().typeError('title must be a `object` type').required(),
})

const PartnerValidator = {
  Store: store,
}

export default PartnerValidator
