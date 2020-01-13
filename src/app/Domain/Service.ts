export interface Service {
  id: string
  description: string,
  subtotal: number,
  tax: number,
  total: number,
  time: number
}

export interface ServiceRequestDTO {
  description: string,
  taxPercentage: number,
  total: number,
  time: number
}
