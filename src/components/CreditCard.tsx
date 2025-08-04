// import type { CardDetails } from '../types';
// import cardFront from '../assets/bg-card-front.png';
// import cardBack from '../assets/bg-card-back.png';
// import cardLogo from '../assets/card-logo.svg';

// interface Props extends CardDetails {}
// const CreditCard = ({ cardNumber, cardHolderName, expiryDate, cvv }: Props) => {
//   return (
//     <div className=" w-[200px] h-[120px] md:w-[280px] md:h-[150px]">
//       <div
//         className={`relative w-full h-full

//         }`}
//       >
//         {/* Front of card */}
//         <div className="absolute w-full h-full">
//           <img
//             src={cardFront}
//             alt="Card Front"
//             className="w-full h-full object-cover rounded-xl shadow-lg"
//           />
//           <div className="absolute top-6 left-10 md:w-9 md:h-8 w-5 h-4">
//             <img src={cardLogo} alt="Card Logo" />
//           </div>
//           <div className="absolute bottom-6 left-10 text-white ">
//             <p className="md:text-base text-[11px] tracking-widest">
//               {cardNumber.value || '0000 0000 0000 0000'}
//             </p>
//             <div className="md:text-[12px] text-[10px] flex justify-between mt-4">
//               <p className="uppercase">
//                 {cardHolderName.value || 'Jane Appleseed'}
//               </p>
//               <p>{expiryDate.value || '00/00'}</p>
//             </div>
//           </div>

//           {/* Back of card */}

//           <div className="absolute w-full h-full mt-5">
//             <img
//               src={cardBack}
//               alt="Card Back"
//               className="w-full h-full object-cover rounded-xl shadow-lg absolute md:left-15 right-5"
//             />
//             <div className="absolute md:top-[65px] top-[55px] right-10 text-white">
//               <p className="md:text-sm text-[10px] tracking-widest">
//                 {cvv.value || '000'}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreditCard;

import type { CardDetails } from '../types';
import cardFront from '../assets/bg-card-front.png';
import cardBack from '../assets/bg-card-back.png';
import cardLogo from '../assets/card-logo.svg';

interface Props extends CardDetails {}

const CreditCard = ({ cardNumber, cardHolderName, expiryDate, cvv }: Props) => {
  return (
    <div className="flex flex-col lg:items-center mt-[-30px] gap-4 xl:w-full w-[400px]">
      {/* Back of card - show on top in mobile */}
      <div className="relative w-[200px] h-[120px]  md:w-[280px] md:h-[150px] z-10 md:z-0 md:order-1 md:ml-20">
        <img
          src={cardBack}
          alt="Card Back"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute md:top-[65px] top-[55px] right-10 text-white">
          <p className="md:text-sm text-[10px] tracking-widest">
            {cvv.value || '000'}
          </p>
        </div>
      </div>

      {/* Front of card - show on top in desktop */}
      <div className="relative w-[200px] h-[120px]  md:w-[280px] md:h-[150px] z-10 md:z-10 mt-[-50px] ml-[20px]">
        <img
          src={cardFront}
          alt="Card Front"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute top-6 left-10 md:w-9 md:h-8 w-5 h-4">
          <img src={cardLogo} alt="Card Logo" />
        </div>
        <div className="absolute bottom-6 left-10 text-white">
          <p className="md:text-base text-[11px] tracking-widest">
            {cardNumber.value || '0000 0000 0000 0000'}
          </p>
          <div className="md:text-[12px] text-[10px] flex justify-between mt-4">
            <p className="uppercase">
              {cardHolderName.value || 'Jane Appleseed'}
            </p>
            <p>{expiryDate.value || '00/00'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
