// src/App.tsx
import { useState } from 'react';
import CardForm from './components/CardForm';
import CreditCard from './components/CreditCard';
import ThankYou from './components/ThankYou'; // Make sure this component exists
import type { CardDetails } from './types';

function App() {
  const [formData, setFormData] = useState<CardDetails>({
    cardNumber: { value: '', isValid: false, isTouched: false },
    cardHolderName: { value: '', isValid: false, isTouched: false },
    expiryDate: { value: '', isValid: false, isTouched: false },
    cvv: { value: '', isValid: false, isTouched: false },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const allValid = Object.values(formData).every((field) => field.isValid);

    if (allValid) {
      setIsSubmitted(true);
    } else {
      const updatedData: CardDetails = Object.keys(formData).reduce(
        (acc, key) => {
          const field = formData[key as keyof CardDetails];
          acc[key as keyof CardDetails] = { ...field, isTouched: true };
          return acc;
        },
        {} as CardDetails
      );

      setFormData(updatedData);
    }
  };

  const validateField = (name: string, value: string): boolean => {
    switch (name) {
      case 'cardNumber':
        return /^\d{4} \d{4} \d{4} \d{4}$/.test(value);
      case 'cardHolderName':
        return /^[a-zA-Z\s]{2,}$/.test(value);
      case 'expiryDate':
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
      case 'cvv':
        return /^\d{3,4}$/.test(value);
      default:
        return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue =
      name === 'cardNumber'
        ? value
            .replace(/\D/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: {
        value: formattedValue,
        isTouched: true,
        isValid: validateField(name, formattedValue),
      },
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name as keyof CardDetails],
        isTouched: true,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 justify-center p-6 xl:flex-row">
      <main className="bg-white max-w-[1200px] w-full h-[800px] xl:h-[600px] shadow-lg flex flex-col xl:flex-row">
        {/* Card Preview Section */}
        <div
          className={`w-full xl:w-1/3 h-[250px] md:h-[400px] xl:h-auto relative
            bg-cover bg-center
            bg-[url('/src/assets/bg-main-mobile.png')]
            xl:bg-[url('/src/assets/bg-main-desktop.png')]`}
        >
          <div className="absolute top-20 left-20 lg:left-10  xl:left-40 md:top-40">
            <CreditCard {...formData} />
          </div>
        </div>

        {/* Form or Thank You */}
        <div className="w-full xl:w-2/3 p-6 flex items-center justify-center">
          {!isSubmitted ? (
            <CardForm
              formData={formData}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ThankYou />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
