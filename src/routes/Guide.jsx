import React from 'react'
import { Image } from 'antd'
const Guide = () => {
  return (
    <div className="bg-[rgba(249,206,41,0.1)]">
        <div className='p-5 pb-0 mx-auto container flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-5 text-center'>
                <h1 className='text-[#F9CE29] md:text-[18px]'>كيفية تشغيل التطبيق</h1>
                <p className='lg:text-[32px]  md:text-[18px] text-[16px]  text-[#333333]'>خطوات سهلة وبسيطة لإنشاء حساب واستخدام التطبيق</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-between md:items-start items-center gap-6 text-center my-10 md:h-[220px]'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <Image src='/Number3.png' />
                    <h1 className='text-[#161C2D] lg:text-[18px] text-[16px]'>إجراء معاملة جديدة</h1>
                    <ul className='text-center list-circle text-[#333333]'>
                        <li>افتح تطبيق دافع واختر "إجراء معاملة جديدة</li>
                        <li>أدخل التفاصيل المطلوبة وأكد المعاملة بكل سهوله</li>
                        <li>تابع حالة المعاملة وتتبع الطلب من خلال التطبيق لضمان وصول طلبك</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <Image src='/Number2.png' />
                    <h1 className='text-[#161C2D] lg:text-[18px] text-[16px]'>  استعراض الميزات والخصائص</h1>
                    <ul className='text-center list-circle text-[#333333]'>
                        <li>استعرض ملخص حسابك، الأرصدة، والطلبات الأخيرة                        </li>
                        <li>ستعرض جميع الطلبات الحالية والسابقة، وتفاصيل كل طلب</li>
                        <li>قم بتحويل الأموال بين حساباتك أو إلى حسابات أخرى بسهولة</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <Image src='/Number.png' />
                    <h1 className='text-[#161C2D] lg:text-[18px] text-[16px]'>تسجيل حساب جديد  </h1>
                    <ul className='text-center list-circle text-[#333333]'>
                        <li>حمل التطبيق (الذي يدعم الأجهزة العاملة بنظم أندرويد وآيفون وهواوي)</li>
                        <li>سجّل حسابك بالاكتفاء بإدخال رقم هاتفك المحمول وإنشاء كلمة سر</li>
                    </ul>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 justify-between gap-12 items-center mt-10'>
                <div className='bg-bg1 bg-cover bg-center'><Image src='/orders.png' className='w-[324px]' /></div>
                <div className='bg-bg2 bg-cover bg-center'><Image src='/dafea.png' className='w-[324px]'  /></div>
                <div className='bg-bg3 bg-cover bg-center'><Image src='/login.png' className='w-[324px]' /></div>
            </div>
        </div>
    </div>
  )
}

export default Guide
