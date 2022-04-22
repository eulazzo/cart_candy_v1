const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <p className="text-center text-lg px-2">{message}</p>
    </div>
  );
};

export default Spinner;
