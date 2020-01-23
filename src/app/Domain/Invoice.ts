export interface Invoice {
  id: string
  description: string,
  subtotal: number,
  tax: number,
  total: number,
  time: number
}

export interface InvoiceRequestDTO {
  description: string,
  taxPercentage: number,
  total: number,
  time: number,
  date: string
}
