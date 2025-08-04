// export default GradientInput;

import React from 'react';
import clsx from 'clsx';

interface GradientInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isTouched: boolean;
  isValid: boolean;
  placeholder?: string;
}

const GradientInput: React.FC<GradientInputProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  isTouched,
  isValid,
  placeholder,
}) => {
  const showValidation = isTouched;
  const borderColor = showValidation
    ? isValid
      ? 'border-green-500'
      : 'border-red-400'
    : 'border-gray-300';

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 font-medium mb-1 md:text-base text-[0.8rem]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={clsx(
          'w-full p-3 rounded-md border transition-all duration-300 outline-none',
          borderColor,
          'focus:border-transparent focus:ring-1 focus:ring-offset-1',
          'focus:ring-[hsl(278,94%,30%)] focus:outline-none'
        )}
        style={{
          boxShadow:
            value && !isValid && isTouched ? '0 0 0 1px red' : undefined,
        }}
      />
    </div>
  );
};

export default GradientInput;
