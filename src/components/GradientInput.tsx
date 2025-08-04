// // src/components/GradientInput.tsx
// import React from 'react';

// interface InputProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
//   isValid: boolean;
//   isTouched: boolean;
//   placeholder?: string;
// }

// const GradientInput: React.FC<InputProps> = ({
//   label,
//   name,
//   value,
//   onChange,
//   onBlur,
//   isValid,
//   isTouched,
//   placeholder,
// }) => {
//   const showError = isTouched && !isValid;
//   const showSuccess = isTouched && isValid;

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-300 mb-1">
//         {label}
//       </label>
//       <div
//         className={`
//           p-[2px] rounded-md
//           ${
//             showError
//               ? 'bg-red-500'
//               : showSuccess
//               ? 'bg-green-500'
//               : 'bg-gradient-to-r from-[hsl(249,99%,64%)] to-[hsl(278,94%,30%)] focus-within:bg-gradient-to-r'
//           }
//         `}
//       >
//         <input
//           type="text"
//           name={name}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           placeholder={placeholder}
//           className="w-full p-2 bg-white rounded-md outline-none focus:outline-none"
//         />
//       </div>
//       {showError && (
//         <p className="text-red-500 text-sm mt-1">
//           Please enter a valid {label.toLowerCase()}.
//         </p>
//       )}
//     </div>
//   );
// };

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
      : 'border-red-500'
    : 'border-gray-300';

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 font-medium mb-1 md:text-base text-sm"
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
          'focus:border-transparent focus:ring-2 focus:ring-offset-2',
          'focus:ring-[hsl(278,94%,30%)] focus:outline-none'
        )}
        style={{
          boxShadow:
            value && !isValid && isTouched ? '0 0 0 2px red' : undefined,
        }}
      />
    </div>
  );
};

export default GradientInput;
