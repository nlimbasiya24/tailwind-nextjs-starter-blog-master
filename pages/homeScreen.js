import React from 'react'
export default function homeScreen() {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-sky-50">
      <div className="mt-16 ml-7 flex">
        <img
          className="mt-4 h-8 w-8 rounded-full"
          src="/static/images/mobile/close.png"
          alt="asdadadasd"
        />
        <h1 className="ml-24 mt-5">Grammer</h1>
      </div>
      <div className="mx-7 flex">
        <div class="mt-7 h-2.5 w-full rounded-full bg-gray-200 dark:bg-white">
          <div class="h-2.5 rounded-full bg-yellow-400" style={{ width: '45%' }}></div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center rounded-3xl bg-white">
        <div className="flex rounded-t-3xl bg-white">
          <img
            className="ml-7 mt-7 h-8 w-8 rounded-full"
            src="/static/images/mobile/gift.png"
            alt="asdadadasd"
          />
          <p className="ml-2 mt-8">Translate this sentence</p>
        </div>
        <div className="mx-6 mt-14 flex h-32 justify-center rounded-3xl bg-rose-50">
          <div>
            <img
              style={{ position: 'absolute', marginTop: '86px', marginLeft: '-78px' }}
              src="/static/images/mobile/dog.png"
              alt="asdadadasd"
            />
          </div>
          <h1 className="mt-12 mr-1 font-semibold text-yellow-400">Un</h1>
          <h1 className="mt-12 mr-1 font-semibold text-sky-800">garcon</h1>
          <h1 className="mt-12 font-semibold text-yellow-400">et</h1>
          <h1 className="mt-12 mr-1 font-semibold text-sky-800">un</h1>
          <h1 className="mt-12 font-semibold text-sky-800">chat</h1>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-center rounded-t-3xl bg-slate-50">
        <div className="flex justify-center space-x-2">
          <button className=" rounded-md bg-yellow-400 px-3 py-1 font-mono text-white">a</button>
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">eat</button>
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">
            breakfast
          </button>
          <button className=" rounded-md  bg-yellow-400 px-3 py-1 font-mono text-white">boy</button>
        </div>
        <div className="mt-2 flex justify-center space-x-2">
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">man</button>
          <button className=" rounded-md bg-yellow-400 px-3 py-1 font-mono text-white">and</button>
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">drink</button>
          <button className=" rounded-md bg-yellow-400 px-3 py-1 font-mono text-white">a</button>
        </div>
        <div className="mt-2 flex justify-center space-x-2">
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">eat</button>
          <button className=" rounded-md bg-white px-3 py-1 font-mono text-sky-900">coffee</button>
          <button className=" rounded-md bg-yellow-400 px-3 py-1 font-mono text-white">cat</button>
        </div>
        <button className="mx-9 mt-9 rounded-full bg-blue-600  py-5 text-white hover:bg-blue-700">
          check it
        </button>
      </div>
    </div>
  )
}
