const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <img
        src="/src/assets/icon-complete.svg"
        alt="Complete"
        className="w-16 h-16"
      />
      <h2 className="text-2xl font-bold tracking-wide uppercase text-gray-800">
        Thank you!
      </h2>
      <p className="text-gray-500">We’ve added your card details</p>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg"
        onClick={() => window.location.reload()} // Reloads to reset form
      >
        Continue
      </button>
    </div>
  );
};

export default ThankYou;
