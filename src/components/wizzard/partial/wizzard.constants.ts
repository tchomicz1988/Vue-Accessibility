import { claimReportForm } from '../../../views/ClaimReport/claimReport.Interface';
import { email, required, helpers, minValue, minLength } from '@vuelidate/validators';


const minDate = (( value: string  ) =>{
  return  new Date(value) <= new Date(new Date().toLocaleDateString());
})

export const CLAIM_REPORT_FORM_VALUES: claimReportForm = {
  Step1: {
    firstName: '',
    secondName: '',
    birthDay: '',
    phoneNumber: '',
    email:'',
    policyNumber: '',
  },
  Step2: {
    proposeOfTravel: '',
    country: '',
    date: '',
    incidentDescription: ''
  },
  Step3: {
    expense: []
  }
}

export const CLAIM_REPORT_FORM_VALIDATIONS = {
  Step1: {
    firstName: {required},
    secondName: {required},
    birthDay: {required, minDate: helpers.withMessage('Value cannot be from the future', minDate)},
    phoneNumber: {required},
    email: {required, email },
    policyNumber: {required}
  },
  Step2: {
    proposeOfTravel: {required},
    country: {required},
    date:  {required, minDate: helpers.withMessage('Value cannot be from the future', minDate)},
    incidentDescription: {required}
  },
  Step3: {
    expense: {required},
  }

}

export const MODAL_FORM_VALIDATIONS = {
  price: {required, minValue: minValue('0.01')},
  name: {required},
}
