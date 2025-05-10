import Image from 'next/image';

export default function page() {
  return (
    <div>
      <h1 className="text-center text-3xl my-3">Contact Me</h1>
      <div className="relative h-55">
        {/* Skewed Projects box on the side */}
        <div className="absolute left-4 top-30 w-90 h-11 bg-white transform -skew-x-30 flex items-center justify-center shadow">
          <div className="transform skew-x-30 text-blue-900 text-2xl">Email: furba916@gmail.com</div>
        </div>
        <Image className="mx-auto rounded-full mt-8" src="/man.jpg" width="200" height="200" alt="image"></Image>
        <form className="border-4 border-white max-w-1/2 md:mt-12 sm:mt-6 lg:mt-28 flex flex-col text-center p-3 mx-auto">
          <div className="p-4">
            <label className="text-2xl">Name: </label>
            <input type="text" className="border border-blue-400"></input>
          </div>
          <div className="p-4">
            <label className="text-2xl">Email: </label>
            <input type="email" className="border border-blue-400"></input>
          </div>
          <div className="p-4">
            <label className="block mb-1 text-2xl text-blue-500">Message For Me ?</label>
            <textarea className="border border-blue-400 w-3/5 md:max-h-20 lg:max-h-50"></textarea>
          </div>
          <button
            type="submit"
            className="max-w-40 mx-auto cursor-pointer mt-9 bg-cyan-500 shadow-lg text-2xl rounded-md p-2 hover:shadow-cyan-500/50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
