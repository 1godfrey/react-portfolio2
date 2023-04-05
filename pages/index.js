import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiOutlineGithub} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Godfrey Mwalupindi Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Career Portfolio</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className='cursor-pointer text-2xl'/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-1 py-2 rounded-md ml-8' href="https://gist.githubusercontent.com/1godfrey/256fc13b15948be1d8355fc4fc4524b2/raw/442c6ed9b187e7c440a4ed63280f3cb871a19770/2023%2520resume%2520updated%2520(3).docx" alt="pic">Resume</a></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-1 py-2 rounded-md ml-8' href="https://gist.githubusercontent.com/1godfrey/13af4f82a9aad5ee84a12cad98852af3/raw/5a85bc8ca7e804dc2e4092c893ccb062e0cf7a76/contactinfo.docx" alt="pic">Contact</a></li>
            </ul>
          </nav>
          <div className='text-center'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Hi, I'm Godfrey Mwalupindi</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer/Developer</h3>
            {/* <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>[Add a paragraph about yourself here if you want]</p> */}
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
             <AiFillLinkedin className='cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/godfrey-mwalupindi-9b2165244/', '_blank')} />
             <AiOutlineGithub className='cursor-pointer' onClick={() => window.open('https://github.com/1godfrey', '_blank')} />
          </div>
          <div className='relative scale-75 bottom-12 mx-auto bg-gradient-to-b from-teal-500 rounded-full md:w-40 md:h-40 mt-0 mb-0 overflow-hidden lg:h-96 lg:w-96'>
            <Image src={deved} alt="deved" className="absolute lg:right-20 lg:top-20 md:top-30 scale-150 "/>
          </div>
    
          <section className='text-3xl font-bold text-center mb-10'>Projects
            <div className=''>
              <h3 className='text-3xl font-bold py-4 text-center dark:text-white'></h3>
            </div>
            <div className='flex flex-col gap-10 py-0 lg:flex-row lg:flex-wrap'>
              <div className='basic-1/3 flex-1'>
                <Image src={web1} alt="Web 1" className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 hover:scale-105" style="responsive" onClick={() => window.open('https://m2moh1.csb.app/', '_blank')} />
              </div>
              <div className='basic-1/3 flex-1'>
                <Image src={web2} alt="Web 2" className="cursor-pointer rounded-lg object-cover h-full w-full transition-transform duration-300 hover:scale-105" style="responsive" onClick={() => window.open('https://netflix-clone-deploy-cw4ehd6ju-1godfrey.vercel.app/auth', '_blank')} />
              </div>
              {/* <div className='basic-1/3 flex-1'>
                <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} style="responsive" />
              </div>
              <div className='basic-1/3 flex-1'>
                <Image  src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} style="responsive" />
              </div>
              <div className='basic-1/3 flex-1'>
                <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} style="responsive" />
              </div>
              <div className='basic-1/3 flex-1'>
                <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} style="responsive" />
              </div> */}
              
            </div>
          </section>

          <div>
            <h3 className='text-3xl py-1 font-bold text-center dark:text-white'>Services Available</h3>
            {/* <p className='text-md py-2 leading-8 text-gray-800'>[Add a <span className='text-teal-300'>paragraph</span> about your <span className='text-teal-300'>services</span> here if you want]</p> */}
          </div>
          <div className='lg:flex justify-center gap-10 mb-20'>
  <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
    <Image className='mx-auto' src={design} width={100} height={100} />
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
    <Image className='mx-auto' src={code} width={100} height={100} />
    <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
    <p className='py-2'>
    Proficient in creating modern, attractive web applications using Next.js and Tailwind.css. This can range from simple calculator apps to fully fleshed out UI interfaces. 

    </p>
    <h4 className='py-4 font-bold text-teal-600'>Main Technologies</h4>
    <p className='text-gray-800 py-1'>Next.js</p>
    <p className='text-gray-800 py-1'>Tailwind.css</p>
    <p className='text-gray-800 py-1'>React</p>
    <p className='text-gray-800 py-1'>Javascript</p>
  </div>

          </div>
          </section>

      </main>
      </div>

  )
}
