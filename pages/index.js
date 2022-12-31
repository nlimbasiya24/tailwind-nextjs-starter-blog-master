

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-96">
        <img
          src="/static/images/mobile/boyGirl.png"
          className="h-auto w-full max-w-sm"
          alt="asdadadasd"
        />
      </div>
      <div className="m-2 w-full px-10 pt-12 pb-4 text-left">
       <p className="text-2xl font-bold text-blue-900"> Are you ready to learn languages easily in funniest way?</p>
      </div>
      <div className="m-2 px-1 text-center text-gray-800">
        <button className="opacity-0.9 rounded-full bg-blue-600 py-5  px-14 text-white hover:bg-blue-700">
          Get for free
        </button>
      </div>
    </div>
  )
}
