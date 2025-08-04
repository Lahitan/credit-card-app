export interface FieldState {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

export interface CardDetails {
  cardNumber: FieldState;
  cardHolderName: FieldState;
  expiryDate: FieldState;
  cvv: FieldState;
}
