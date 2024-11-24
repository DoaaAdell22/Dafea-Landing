import React from 'react'
import { Image  } from "antd"

const Wallet = () => {
  return (
    <div className="bg-[rgba(249,206,41,0.1)]">
        <div className="container mx-auto p-5 flex  sm:flex-row flex-col-reverse justify-between items-center gap-4 ">
            <div><Image src="/wallet.png" className="sm:w-[50%] w-[30%] "/></div>

            <div className="flex flex-col sm:items-end gap-4 sm:w-[50%] w-auto  text-center sm:text-end">
                <div className=' flex flex-col gap-5 items-center  sm:items-end sm:text-end text-center'>
                    <h1 className="text-[#F9CE29] md:text-[24px] text-[26px]   ">  المحفظة</h1>
                    <p className="lg:text-[32px] text-[20px] text-[#292D32]">    إدارة أموالك بكل سهولة  </p>
                    <p className='text-[#333333]'>محفظة دافع الرقمية تتيح لك إدارة أموالك بكل سهولة وأمان، مما يمكنك من إتمام جميع المعاملات المالية اليومية والدورية بسرعة وسهولة.</p>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>  تحويل الأموال الفوري</span>
                                <Image src='/cube-04.png' />

                            </div>
                            <p className='text-[#333333]'>استمتع بتحويل الأموال بين حساباتك المالية أو لأصدقائك وعائلتك بكل سهولة وأمان.</p>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>   تحليل الإنفاق </span>
                                <Image src='/cube-02.png' />
                            </div>
                            <p className='text-[#333333] '>تعرف على نمط إنفاقك من خلال تقارير مالية شاملة لمساعدتك في اتخاذ قرارات مالية أفضل.</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        
        </div>
  )
}

export default Wallet
