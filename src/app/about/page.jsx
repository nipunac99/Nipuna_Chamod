"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg-flex">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* biography title */}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* biography dec */}
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              totam nesciunt ut quos doloremque veritatis ipsam beatae quia
              ratione delectus. Non facilis eius perferendis nisi dignissimos?
              Enim reiciendis sequi numquam.
            </p>
            {/* biography quote */}
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, architecto?
            </span>
            {/* biography sign */}
            <div className="self-end">
              <p>nipuna chamod</p>{" "}
              {/**  <--------- -------- Type your sign here */}
            </div>
            {/* biography scroll  */}
            <svg
              height="50"
              viewBox="0 0 50 50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              id="fi_5421659"
            >
              <g id="Icons">
                <path d="m25 45a14 14 0 0 0 14-14v-12a14 14 0 0 0 -28 0v12a14 14 0 0 0 14 14zm-12-26a12 12 0 0 1 24 0v12a12 12 0 0 1 -24 0z"></path>
                <path d="m24 24.5h.09l.2.21a1 1 0 0 0 1.42 0l.2-.21h.09v-.09l5.71-5.7-1.42-1.42-4.29 4.3v-10.59h-2v10.59l-4.29-4.3-1.42 1.42 5.71 5.7z"></path>
              </g>
            </svg>
          </div>
          {/* skill container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* skill title  */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* skill list  */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
              <div className="rounded-full p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java Script
              </div>
            </div>
            {/* skill scroll svg  */}
            <svg
              height="50"
              viewBox="0 0 50 50"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              id="fi_5421659"
            >
              <g id="Icons">
                <path d="m25 45a14 14 0 0 0 14-14v-12a14 14 0 0 0 -28 0v12a14 14 0 0 0 14 14zm-12-26a12 12 0 0 1 24 0v12a12 12 0 0 1 -24 0z"></path>
                <path d="m24 24.5h.09l.2.21a1 1 0 0 0 1.42 0l.2-.21h.09v-.09l5.71-5.7-1.42-1.42-4.29 4.3v-10.59h-2v10.59l-4.29-4.3-1.42 1.42 5.71 5.7z"></path>
              </g>
            </svg>
          </div>
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* experience title  */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* experience list  */}
            <div className="">
              {/* experience list item  */}
              <div className="flex justify-between h-48">
                {/* left  */}
                <div className="w-1/3 ">
                  {/* job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem ipsum dolor sit amet.(02)
                  </div>
                  {/* job desc  */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, minus.
                  </div>
                  {/* job date  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022-2023
                  </div>
                  {/* job company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* center  */}
                <div className="w-1/6">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* (02) */}

              <div className="flex justify-between h-48">
                {/* left  */}
                <div className="w-1/3 "></div>
                {/* center  */}
                <div className="w-1/6">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem ipsum dolor sit amet.(01)
                  </div>
                  {/* job desc  */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, minus.
                  </div>
                  {/* job date  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022-2023
                  </div>
                  {/* job company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
              </div>

              {/* (03) */}

              <div className="flex justify-between h-48">
                {/* left  */}
                <div className="w-1/3 ">
                  {/* job title  */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Lorem ipsum dolor sit amet.(02)
                  </div>
                  {/* job desc  */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, minus.
                  </div>
                  {/* job date  */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022-2023
                  </div>
                  {/* job company  */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* center  */}
                <div className="w-1/6">
                  {/* line  */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle  */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:1/2"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
