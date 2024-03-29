import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiOutlineGithub, AiOutlineArrowDown} from 'react-icons/ai'
import { BsCode, BsPlay } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { RiContactsBook2Line } from 'react-icons/ri'
import { SiApplearcade } from 'react-icons/si'
import { IoNotificationsSharp } from 'react-icons/io5'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import machinelearning from '../public/machinelearning.png'
import consulting from '../public/consulting.png'
import web1 from "./web1.jpg"
import web2 from "../public/lavapreview2.jpg"
import web3 from "../public/web3.jpg"
import web4 from "../public/guccipreview.jpg"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import web7 from "../public/web7.jpg"
import web8 from "../public/web8.jpg"
import web9 from "../public/web9.jpg"
import web10 from "../public/web10.png"
import web11 from "../public/web11.png"
import web12 from "../public/web12.png"
import { useState, useEffect } from 'react'
// import Resume_GodfreyMwalupindi from "../public/Resume_GodfreyMwalupindi.txt"
// import Contact_GodfreyMwalupindi from "../public/Contact_GodfreyMwalupindi.txt"


/* eslint-disable react/jsx-no-target-blank */

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [showImage, setShowImage] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

    const handleMoreInfoClick = () => {
    setShowImage(true);
  };

  const handleModalClose = () => {
    setShowImage(false);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Godfrey Mwalupindi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
  <div className="fixed top-0 left-0 h-screen w-screen z-[-1]">
    <Image src={web7} className="h-full w-full object-cover opacity-20 "/>
  </div>
  <section className='min-h-screen relative'>
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl dark:text-white font-bold'></h1>
      <ul className='flex items-center'>
  {/* <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-2xl transition-transform duration-300 hover:scale-110'/></li> */}
  {/* <li><a className='bg-blue-500 text-white font-bold px-2 py-2 rounded-md ml-5 flex items-center transition-transform duration-300 hover:scale-110' href="https://docs.google.com/document/d/1_0JeUy-i_pOtY9hxIzb2hVlNx2RsMyparTyQugGPzCU/edit?usp=sharing" target="_blank"><HiOutlineDocumentText size={22} className="mr-1"/>Resume</a></li> */}
  <li><a className='bg-blue-500 text-white  font-bold px-2 py-2 rounded-md ml-5 flex items-center transition-transform duration-300 hover:scale-110' href="https://gist.githubusercontent.com/1godfrey/13af4f82a9aad5ee84a12cad98852af3/raw/5a85bc8ca7e804dc2e4092c893ccb062e0cf7a76/contactinfo.docx" target="_blank"><RiContactsBook2Line size={22} className="mr-1"/>Contact</a></li>
</ul>
    </nav>
    <div className='text-center'>

      <h2 className='text-5xl py-2 text-blue-500 font-medium md:text-6xl'>Hi, I'm Godfrey Mwalupindi</h2>
      <h3 className='text-2xl py-2 md:text-3xl font-bold dark:text-white'>Software Engineer</h3>
      {/* <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>[Add a paragraph about yourself here if you want]</p> */}
    </div>
    <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
       <AiFillLinkedin className='cursor-pointer transition-transform duration-300 hover:scale-125' onClick={() => window.open('https://www.linkedin.com/in/godfrey-mwalupindi-9b2165244/', '_blank')} />
       <AiOutlineGithub className='cursor-pointer transition-transform duration-300 hover:scale-125' onClick={() => window.open('https://github.com/1godfrey', '_blank')} />
    </div>
    <div className={`mt-48 animate-bounce dark:text-white ${showIcon ? 'visible' : 'hidden'}`}>
      {showIcon && <AiOutlineArrowDown size={30} />}

    </div>

    {/* <div className='relative scale-75 bottom-0 mx-auto bg-gradient-to-r from-black to-blue-500 rounded-full md:w-40 md:h-40 -mt-20 -mb-20 overflow-hidden lg:h-96 lg:w-96'>
      <Image src={deved} alt="deved" className="absolute cursor-pointer lg:right-20 lg:top-40 md:top-30 scale-150"/>
    </div> */}
    <div className='mt-48 dark:mt-48'></div>
          <section className='text-3xl font-bold text-center mt-96 mb-10 dark:text-white'>
            <div>
              <div className='-mb-20 flex flex-row items-center gap-1'>
              <IoNotificationsSharp className='animate-bounce transition duration-1000' size={15}/>
              <span className='font-light text-sm'>Hover Projects for Technologies Used</span>
              </div>
              <h2 className='text-5xl font-bold py-10 text-center text-black dark:text-white'>Projects</h2>
            </div>
          
          {/* ALL PROJECTS WRAPPER */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 lg:mt-0 lg:-mb-4">

                    {/* PROJECT 1 */}
                    <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
  <div className="relative cursor-pointer transition-transform duration-300 -mb-4 hover:scale-90" title="Technologies Used: React, Next.js, Javascript, HTML, CSS, API for clothes">
    <Image 
      src={web3} 
      alt="Web 3" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://store-ten-chi.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      E-commerce Website #1
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://store-ten-chi.vercel.app/', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/store', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div>

                   
                    {/* PROJECT 2 */}

                    <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
  <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" 
    title="Technologies Used: React, Next.js, Typescript, Mongo.DB, Tailwind, Prisma.DB">
    <Image 
      src={web2} 
      alt="Web 2" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://lava-tau.vercel.app/auth', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      Video Streaming Social App
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://lava-tau.vercel.app/auth', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/lava', '_blank')}><BsCode className="mr-2"/>Code</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://www.youtube.com/watch?v=wkHKId22jDU', '_blank')}><BsPlay className="mr-1"/>Preview</button>
  </div>
</div>




                      {/* PROJECT 3 */}

                      <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
  <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" title="Technologies Used: Python, Tensorflow, Fast API, Jupyter">
    <Image 
      src={web12} 
      alt="Web 12" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://github.com/1godfrey/CancerSegmentation', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      Cancer Segmentation API using AI
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    {/* <button className="bg-blue-500 hover:bg-red-500 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/airbnbclone', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo Soon</button> */}
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/CancerSegmentation', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div>

                      {/* PROJECT 4 */}
                      <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115 -mt-4'>
  <div className="relative cursor-pointer scale-y-90 transition-transform duration-300 -mb-12 hover:scale-90" title="Technologies Used: Python, Pandas, LucidChart, Jupyter, Google Cloud Storage, Mage AI, Google BigQuery, Looker Studio">
    <Image 
      src={web10} 
      alt="Web 10" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://lookerstudio.google.com/u/0/reporting/300129e7-def8-4216-a5f1-c5662bae6853/page/KTwOD?s=n2t34WEmlMI', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      Uber Data Model
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://lookerstudio.google.com/u/0/reporting/300129e7-def8-4216-a5f1-c5662bae6853/page/KTwOD?s=n2t34WEmlMI', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/uber-data-model', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div>
 

                      {/* PROJECT 5 */}
                     <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
  <div className="relative cursor-pointer transition-transform duration-300 -mb-4 hover:scale-90" title="Technologies Used: Python, SocketsIO, Flask, Django, Javascript, HTML, CSS">
    <Image 
      src={web9} 
      alt="Web 9" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://lava-chat-app.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      Real-Time Chat Room
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://lava-chat-app.vercel.app/', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/Lava_ChatApp', '_blank')}><BsCode className="mr-2"/>Code</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://www.youtube.com/watch?v=GlHKoyR_YJ0', '_blank')}><BsPlay className="mr-1"/>Preview</button>

  </div>
</div>

                      {/* PROJECT 3 */}

                      <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
  <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" title="Technologies Used: React, Next.js, Typescript, Tailwind, Mongo.DB, Prisma.DB">
    <Image 
      src={web8} 
      alt="Web 8" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
       
    />
    <div onClick={() => window.open('https://store-ten-chi.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      Airbnb Clone
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-red-500 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/airbnbclone', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo Soon</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/airbnbclone', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div>



                      {/* PROJECT 7 */}
                      <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2 scale-y-115'>
                    <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" 
                      title="Technologies Used: React, D3.JS, Javascript, HTML, CSS" >
  <Image 
    src={web1} 
    alt="Web 1" 
    className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
    style="responsive" 
   
  />
  <div onClick={() => window.open('https://dashboard-hazel-two.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100" >
    D3/React Dashboard
  </div>
</div>

  <div className="flex justify-center mt-10 -gap-2">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-2 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://dashboard-hazel-two.vercel.app/', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-2 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/godfrey-d3reactdashboard-map-v2', '_blank')}><BsCode className="mr-2"/>Code</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-2 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button>
  </div>
</div>




                        {/* PROJECT 8 */}
      <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2'>
  <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" title="Technologies Used: React, Next.js, Javascript, HTML, CSS, API for clothes">
    <Image 
      src={web4} 
      alt="Web 4" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
      
    />
    <div onClick={() => window.open('https://gucci-gold.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      E-commerce Website #2
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://gucci-gold.vercel.app/', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/gucci', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div>     

                        {/* PROJECT 9 */}
                        <div className='basic-1/3 flex-1 col-span-2 lg:col-span-2'>
  <div className="relative cursor-pointer transition-transform duration-300 hover:scale-90 -mb-4" title="Technologies Used: React, Javascript, Tailwind, HTML/CSS">
    <Image 
      src={web11} 
      alt="Web 11" 
      className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 scale-y-200 hover:scale-90" 
      style="responsive" 
      
    />
    <div onClick={() => window.open('https://countdown-timer-two-zeta.vercel.app/', '_blank')} className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70 text-blue-500 font-bold text-5xl opacity-0 transition-opacity duration-300 hover:opacity-100">
      To-Do App
    </div>
  </div>
  <div className="flex justify-center -gap-8 mt-10">
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://countdown-timer-two-zeta.vercel.app/', '_blank')}><SiApplearcade size={26} className="mr-3"/>Demo</button>
    <button className="bg-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://github.com/1godfrey/Countdown-Timer', '_blank')}><BsCode className="mr-2"/>Code</button>
    {/* <button className="bg-gradient-to-r from-black to-blue-500 hover:bg-blue-700 scale-75 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 flex items-center" onClick={() => window.open('https://youtu.be/OPMurHovNX4', '_blank')}><BsPlay className="mr-1"/>Preview</button> */}

  </div>
</div> 

</div>

          </section>

          <div className='py-6 -mb-14'>
            <h3 className='text-5xl py-1 font-bold text-center dark:text-white'>Working Skills</h3>
          </div>
          <div className='lg:flex justify-center gap-5 mb-0'>
  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <Image className='mx-auto' src={design} alt="design" width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2'>Data Visualization</h3>
    <p className='py-2 text-s'>
      Interactive data visualizations/dashboards using D3.js and React. This can range from standard bar charts to fully interactive Geographical Maps.
    </p>
    <h4 className='py-4 font-bold text-teal-600'>Main Technologies</h4>
    <p className='text-gray-800 py-1'>D3.js</p>
    <p className='text-gray-800 py-1'>React</p>
    <p className='text-gray-800 py-1'>HTML/CSS</p>
    <p className='text-gray-800 py-1'>Javascript</p>
  </div>

  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <Image className='mx-auto' src={code} alt="code" width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
    <p className='py-2'>
    Proficient in creating modern, attractive web applications using Next.js and Tailwind.css. This can range from simple calculator apps to fully fleshed out UI interfaces. 

    </p>
    <h4 className='py-4 font-bold text-teal-600'>Main Technologies</h4>
    <p className='text-gray-800 py-1'>React</p>
    <p className='text-gray-800 py-1'>Tailwind.css</p>
    <p className='text-gray-800 py-1'>Next.js</p>
    <p className='text-gray-800 py-1'>Javascript</p>
  </div>

  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <Image className='mx-auto' src={machinelearning} alt="machinelearning" width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2'>Machine Learning</h3>
    <p className='py-2'>
    Proficient in creating and implementing advanced algorithms to utilize AI to analyze/extract relevant information from unique company documents in the Cloud.
    </p>
    <h4 className='py-4 font-bold text-teal-600'>Main Technologies</h4>
    <p className='text-gray-800 py-1'>Python</p>
    <p className='text-gray-800 py-1'>Google Cloud Platform</p>
    <p className='text-gray-800 py-1'>Pytorch</p>
    <p className='text-gray-800 py-1'>NumbPy</p>
  </div>

          </div>
          </section>

      </main>
      </div>

  )
}
