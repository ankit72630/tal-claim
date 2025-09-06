const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <div className="w-20 h-20 border-6 border-transparent border-t-indigo-500 rounded-full animate-spin" />
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 text-indigo-500 font-semibold">
        Loading...
      </p>
    </div>
  );
};
export default Loader;