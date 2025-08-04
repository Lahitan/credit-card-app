import GradientInput from './GradientInput';
import type { CardDetails } from '../types';

interface CardFormProps {
  formData: CardDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CardForm: React.FC<CardFormProps> = ({
  formData,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <GradientInput
        label="Cardholder Name"
        name="cardHolderName"
        value={formData.cardHolderName.value}
        onChange={handleChange}
        onBlur={handleBlur}
        isTouched={formData.cardHolderName.isTouched}
        isValid={formData.cardHolderName.isValid}
        placeholder="e.g. Jane Appleseed"
      />

      <GradientInput
        label="Card Number"
        name="cardNumber"
        value={formData.cardNumber.value}
        onChange={handleChange}
        onBlur={handleBlur}
        isTouched={formData.cardNumber.isTouched}
        isValid={formData.cardNumber.isValid}
        placeholder="e.g. 1234 5678 9123 0000"
      />

      <div className="flex gap-4">
        <GradientInput
          label="Exp. Date (MM/YY)"
          name="expiryDate"
          value={formData.expiryDate.value}
          onChange={handleChange}
          onBlur={handleBlur}
          isTouched={formData.expiryDate.isTouched}
          isValid={formData.expiryDate.isValid}
          placeholder="MM/YY"
        />

        <GradientInput
          label="CVV"
          name="cvv"
          value={formData.cvv.value}
          onChange={handleChange}
          onBlur={handleBlur}
          isTouched={formData.cvv.isTouched}
          isValid={formData.cvv.isValid}
          placeholder="e.g. 123"
        />
      </div>

      <button
        type="submit"
        className="w-2/3 bg-violet-900 hover:bg-violet-800 text-white py-2 rounded-lg font-semibold transition duration-200 flex justify-center mx-auto mt-6 cursor-pointer"
      >
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
