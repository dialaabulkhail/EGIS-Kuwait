import React from 'react'
import Image from 'next/image'
import logo1 from '../../public/assets/Layer.png'
import logo2 from '../../public/assets/GeoServer.png'
import logo3 from '../../public/assets/MaxCDN.png'
import logo4 from '../../public/assets/microsoft.png'

const AboutSection = () => {
  return (
    <div className=''>
               <div className='font-tajwal w-full flex justify-center mt-20'>
                <div className='grid justify-center'>
                    <h1 className='text-3xl text-[#162641]/70 text-center'>All The Technology You Need</h1>
                    <p className='text-[#162641]/80 text-center mt-5 font-extralight text-2xl'>This is version 1.0.0 of our GIS Platform served over the web as SaaS powered by </p>
                    <p className='text-[#162641]/80 font-extralight text-2xl text-center'>the highest security and the best infrastructure to serve your information </p>
                    <p className='text-[#162641]/80 font-extralight text-2xl text-center'>on the spot.</p>

                    <div className='flex justify-evenly my-20 gap-8'>
                        <Image alt="/" src={logo1} width={200} />
                        <Image alt="/" src={logo2} width={200} />
                        <Image alt="/" src={logo3} width={200} />
                        <Image alt="/" src={logo4} width={200} />
                    </div>
                </div>


            </div>
    </div>
  )
}

export default AboutSection