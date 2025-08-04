import icon from '../assets/icon-complete.svg';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <img src={icon} alt="Complete" className="w-16 h-16" />
      <h2 className="text-2xl font-bold tracking-wide uppercase text-gray-800">
        Thank you!
      </h2>
      <p className="text-gray-500">We’ve added your card details</p>
      <button
        className="w-2/3 bg-violet-900 hover:bg-violet-800 text-white py-2 rounded-lg font-semibold transition duration-200 flex justify-center mx-auto mt-6 cursor-pointer"
        onClick={() => window.location.reload()} // Reloads to reset form
      >
        Continue
      </button>
    </div>
  );
};

export default ThankYou;
