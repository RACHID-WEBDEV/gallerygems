import * as yup from "yup";

export const registerSchema = yup
  .object({
    full_name: yup
      .string()
      .required("Full name is required")
      .min(4, "Mininum 4 characters")
      .max(40, "Maximum 30 characters"),
    loan_amount: yup
      .string()
      .required("Loan amount is required")
      .min(4, "Mininum 4 digits number"),

    repayment_duration: yup
      .string()
      .required("Repayment duration is required")
      .min(1, "Mininum 1 number of digits")
      .max(2, "Maximum 99 weeks or months"),
  })
  .required();
