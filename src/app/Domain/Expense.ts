export interface Expense {
  id: string
  description: string,
  tax: number,
  price: number,
  date: string
}

export interface ExpenseRequestDTO {
  description: string,
  tax: number,
  price: number,
  date: string
}
