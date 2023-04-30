import { useState } from 'react';

const textShadow = {
  textShadow: '2px 2px 4px #333333',
};

// 計算指定月份有幾天
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function App() {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [ageData, setData] = useState({});

  function calculateAge(birthYear, birthMonth, birthDay) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let age = today.getFullYear() - birthYear;
    let month = today.getMonth() - birthMonth + 1;
    let day = today.getDate() - birthDay;

    if (today < birthDate.setFullYear(today.getFullYear())) {
      age--;
      month = 12 - birthMonth + today.getMonth();
      day =
        today.getDate() +
        daysInMonth(today.getMonth(), today.getFullYear()) -
        birthDay;
    }

    if (month < 0) {
      age--;
      month = 12 - birthMonth + today.getMonth();
    }

    setData({
      age: age,
      month: month,
      day: day,
    });
  }

  return (
    <div
      className=" bg-white w-[860px] h-[651px] mx-auto mt-10 p-14"
      style={{
        borderRadius: '0 0 200px 0',
      }}
    >
      <div className="flex gap-8">
        <div>
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2 block"
          >
            DAY
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="DD"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2 block"
          >
            MONTH
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="MM"
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor=""
            className="text-[#808080] border-[#716F6F] text-[14px] mb-2 block"
          >
            YEAR
          </label>
          <input
            type="text"
            className="border border-[#DCDCDC] rounded-lg h-[72px] w-[160px] text-[32px] py-3 px-6"
            placeholder="YYYY"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center">
        <hr className="bg-[#50d71e] border w-[632px]" />

        <button
          onClick={() => calculateAge(year, month, day)}
          className=" self-center"
        >
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

      <div className="font-extrabold" style={textShadow}>
        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            {ageData.age}
          </span>
          <span className="text-[104px] leading-[114px]">years</span>
        </div>

        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            {ageData.month}
          </span>
          <span className="text-[104px] leading-[114px]">months</span>
        </div>

        <div>
          <span className="text-[104px] leading-[114px] mr-2 text-[#854DFF]">
            {ageData.day}
          </span>
          <span className="text-[104px] leading-[114px]">days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
