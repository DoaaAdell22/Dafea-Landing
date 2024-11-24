import React from 'react'
import { Image  } from "antd"
const About = () => {
  return (
    <div className="">
        <div className="container mx-auto p-5 flex  sm:flex-row flex-col justify-between items-center gap-4 ">
            <div className="flex flex-col sm:items-end gap-4 sm:w-[50%] w-auto  text-center sm:text-end">
                <div className=' flex flex-col gap-5 items-center  sm:items-end sm:text-end text-center'>
                    <h1 className="text-[#F9CE29] md:text-[24px] text-[26px]   ">لمحة عن التطبيق</h1>
                    <p className="lg:text-[32px] text-[20px] text-[#292D32]"> حياة مالية أسهل مع دافع </p>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>تحكم كامل بلمسة واحدة</span>
                                <Image src='/star-05.png' />

                            </div>
                            <p className='text-[#333333]'>عند تسجيل الدخول إلى تطبيق دافع، ستجد واجهة مستخدم بسيطة وسهلة الاستخدام تتيح لك الوصول إلى جميع خدماتنا بكل سهولة. من الصفحة الرئيسية، يمكنك:</p>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>ادفع كل مشترياتك عبر دافع</span>
                                <Image src='/cube-04.png' />

                            </div>
                            <p className='text-[#333333]'>إن منصة دافع الرقمية تتيح لك إتمام جميع المعاملات المالية على الصعيد المحلي والدولي بكل سهولة وامان تام دون الحاجة إلى البنك أو النقد.</p>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>معلوماتك في أمان مع دافع</span>
                                <Image src='/cube-02.png' />
                            </div>
                            <p className='text-[#333333] '>شارك معلوماتك وحساباتك معنا بكل امان وثقة، لن نستخدمها إلا لتقديم الخدمات لك. حيث نقوم بالربط بين حساباتك المالية بشكل آمن وسري.</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div><Image src="/about.png" className="sm:w-[50%] w-[30%] "/></div>
            </div>
        
        </div>
  )
}

export default About
