const Contact = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-start gap-10">
      <div className="w-[100%] bg-[#406E00] text-white flex flex-col justify-center items-center rounded-b-lg h-20 mb-4">
        <h1 className="text-2xl sm:text-5xl font-bold">Contact Us</h1>
      </div>
      <div className=" w-full min-h-[60vh] flex flex-col justify-center items-center gap-4">
        <div className=" flex flex-col w-full sm:w-6/12 py-4 px-8 gap-5">
          <input
            className="border-2 border-[#406E00] focus:border-[#181F1C] py-4 px-2 rounded-lg"
            placeholder="Name"
          />
          <input
            placeholder="Email"
            className="border-2 border-[#406E00] focus:border-[#181F1C] py-4 px-2 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="border-2 border-[#406E00] focus:border-[#181F1C] py-4 px-2 rounded-lg"
          />
        </div>
        <button className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;
