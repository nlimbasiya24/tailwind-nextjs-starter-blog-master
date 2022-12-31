import React from 'react'


export default function homeMobile() {
 
  return (
    <>
      <div className="bg-gradient-to-r from-slate-50 to-sky-50">
        <div className="flex flex-col justify-center rounded-b-3xl bg-white ">
          <div className="mt-10 ml-7 flex">
            <img
              className="h-8 w-8 rounded-full"
              src="/static/images/mobile/avatar2.jpg"
              alt="asdadadasd"
            />
            <h1 className="ml-2 mt-1">Hello Marion</h1>
            <img
              style={{"marginLeft":"155px"}}
              src="/static/images/mobile/menu.png"
              alt="asdadadasd"
            />
          </div>
          <div className="mt-9 mb-7 ml-7 flex h-40 w-80 rounded-3xl bg-rose-100">
            <div className="ml-6">
              <svg className="mt-9 h-28 w-28">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="white"
                  className="text-gray-700"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="200"
                  className="rounded-lg text-blue-500"
                />
              </svg>
              <p className="absolute ml-7 -mt-20 text-2xl font-bold">75%</p>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Good Result</h1>
              <p className="text-left text-blue-600/50">Your France has been improved</p>
            </div>
          </div>
        </div>
        <div className="mt-3 ml-7 text-left font-semibold">Your Lesson</div>
        <div className="m-3 flex flex-wrap items-center justify-center gap-3">
          <div className="dark:bg-secondary-dark-bg h-44 rounded-3xl bg-white p-4  pt-9 dark:text-gray-200 md:w-56 ">
            <div className="flex items-center justify-between" style={{ marginTop: '-14px' }}>
              <div>
                <img src="/static/images/mobile/reading.png" alt="asdadadasd" />
                <p className="text-lg font-bold text-sky-700" style={{ marginTop: '14px' }}>
                  Reading
                </p>
                <p className="mt-2 text-sm font-light text-gray-800">you completed 74%</p>
                <div class="mt-5 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div class="h-2.5 rounded-full bg-emerald-300" style={{ width: '74%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:bg-secondary-dark-bg h-44 rounded-3xl bg-white p-4  pt-9 dark:text-gray-200 md:w-56 ">
            <div className="flex items-center justify-between" style={{ marginTop: '-14px' }}>
              <div>
                <img src="/static/images/mobile/listening.png" alt="asdadadasd" />
                <p className="text-lg font-bold text-sky-700" style={{ marginTop: '14px' }}>
                  Listening
                </p>
                <p className="mt-2 text-sm font-light text-gray-800">you completed 74%</p>
                <div class="mt-5 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div class="h-2.5 rounded-full bg-indigo-800" style={{ width: '59%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:bg-secondary-dark-bg h-44 rounded-3xl bg-white p-4  pt-9 dark:text-gray-200 md:w-56 ">
            <div className="flex items-center justify-between" style={{ marginTop: '-14px' }}>
              <div>
                <img src="/static/images/mobile/speaking.png" alt="asdadadasd" />
                <p className="text-lg font-bold text-sky-700" style={{ marginTop: '14px' }}>
                  Speaking
                </p>
                <p className="mt-2 text-sm font-light text-gray-800">you completed 74%</p>
                <div class="mt-5 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div class="h-2.5 rounded-full bg-orange-700" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:bg-secondary-dark-bg h-44 rounded-3xl bg-white p-4  pt-9 dark:text-gray-200 md:w-56 ">
            <div className="flex items-center justify-between" style={{ marginTop: '-14px' }}>
              <div>
                <img src="/static/images/mobile/Grammer.png" alt="asdadadasd" />
                <p className="text-lg font-bold text-sky-700" style={{ marginTop: '14px' }}>
                  Grammer
                </p>
                <p className="mt-2 text-sm font-light text-gray-800">you completed 74%</p>
                <div class="mt-5 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div class="h-2.5 rounded-full bg-yellow-400" style={{ width: '53%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 mr-5 flex  h-16 items-center justify-between rounded-full bg-white">
          <img className="ml-10" src="/static/images/mobile/book.png" alt="asdadadasd" />
          <img src="/static/images/mobile/home.png" alt="asdadadasd" />
          <img className="mr-10" src="/static/images/mobile/men.png" alt="asdadadasd" />
        </div>
        <br />
      </div>
    </>
  )
}
