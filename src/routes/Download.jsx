import React from 'react'
import { Image } from 'antd'
const Download = () => {
  return (
    <div className='bg-[black]  '>
        <div className='px-5 py-20 mt-[-5px] mx-auto container flex flex-col justify-center items-center gap-10'>
            <div className='felx flex-col items-center justify-center text-center  lg:w-[588px]'>
                <h1 className='text-[32px] text-[#F9CE29]'>مميزاتنا لا تتوقف عند هذا الحد! هناك المزيد والمزيد لعملائنا المميزين</h1>
                <p className='text-[#C8C8C8] mt-4'>مع دافع، يمكنك الاستمتاع بمجموعة واسعة من المكافآت والعروض المستمرة التي تجعل تجربتك المالية أكثر فائدة وإثارة.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex relative justify-center '>
                <Image src='/download.png' className='relative translate-x-[-60px] translate-y-[-30px] '/>
                <h2 className='text-[#F9CE29] text-[28px] '>حمل تطبيق دافع الآن</h2> 
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <a><Image src='/Badge.png' width={150} /></a>
                    <a><Image src='/appstore.png' width={150} /></a>
                    <a><Image src='/googleplay.png' width={150} /></a>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Download
