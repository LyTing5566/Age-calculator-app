import { useState } from 'react';

const textShadow = {
  textShadow: '2px 2px 4px #333333',
};

function App() {
  return (
    //
    <div
      className=" bg-white w-[860px] h-[651px] mx-auto mt-10 p-14"
      style={{
        borderRadius: '0 0 200px 0',
      }}
    >
      <div className="flex gap-8">
        <div className="flex flex-col ">
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2"
          >
            DAY
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="DD"
          />
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2"
          >
            MONTH
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="MM"
          />
        </div>

        <div className="flex flex-col ">
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2"
          >
            YEAR
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="YYYY"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div>
          <hr className="bg-[#50d71e] border w-[632px]" />
        </div>
        <div className="">
          <button className=" self-center">
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="96" height="96" rx="48" fill="#854DFF" />
              <path
                d="M26 48.0189C33.3333 47.6859 48 51.6158 48 70"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M48 70V26" stroke="white" strokeWidth="2" />
              <path
                d="M70 48.0189C62.6667 47.6859 48 51.6158 48 70"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="font-extrabold" style={textShadow}>
        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            38
          </span>
          <span className="text-[104px] leading-[114px]">years</span>
        </div>

        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            3
          </span>
          <span className="text-[104px] leading-[114px]">months</span>
        </div>

        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            26
          </span>
          <span className="text-[104px] leading-[114px]">days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
