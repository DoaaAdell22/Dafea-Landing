import React from 'react'
import { Image } from 'antd'
const Download = () => {
  return (
    <div id="Download" className='bg-[black] downloading'>
        <div className='px-5 py-20 mt-[-5px] mx-auto container flex flex-col justify-center items-center gap-8 star'>
            <img src='/Soft Star.png' className='w-10 h-10' />
            <div className='felx flex-col items-center justify-center text-center  lg:w-[588px]'>
                <h1 className='md:text-[32px] text-[20px] text-[#F9CE29]'>مميزاتنا لا تتوقف عند هذا الحد! هناك المزيد والمزيد لعملائنا المميزين</h1>
                <p className='text-[#C8C8C8] text-[14px] mt-4'>مع دافع، يمكنك الاستمتاع بمجموعة واسعة من المكافآت والعروض المستمرة التي تجعل تجربتك المالية أكثر فائدة وإثارة.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex relative justify-center items-center download'>
                <img src='/download.png' className='relative sm:translate-x-[-130px] sm:translate-y-[20px] translate-x-[-90px] translate-y-[-5px] w-18 h-14  '/>
                <h2 className='text-[#F9CE29] md:text-[28px] text-[20px]'>حمل تطبيق دافع الآن</h2> 
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <a href='#'><img src='/Badge.png' className=' h-10 w-18 relative z-20' /></a>
                    <a href='#'><img src='/appstore.png' className=' h-10 w-18' /></a>
                    <a href='#'><img src='/googleplay.png' className=' h-10 w-18' /></a>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Download
