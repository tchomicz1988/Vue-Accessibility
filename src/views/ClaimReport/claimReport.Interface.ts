export interface claimReportForm {
  Step1: claimReportStep1,
  Step2: claimReportStep2,
  Step3: claimReportStep3,
}

export interface claimReportStep1 {
  firstName: string,
  secondName: string,
  birthDay: string,
  phoneNumber: string,
  email: string,
  policyNumber: string
}

export interface claimReportStep2 {
  proposeOfTravel: string,
  country: string,
  date: string,
  incidentDescription: string
}

export interface claimReportStep3 {
  expense: expenseInterface[]
}

export interface expenseInterface {
  id?: string,
  price: number | string | null,
  name: string | null
}
