import React from 'react'
import { Image  } from "antd"

const Orders = () => {
  return (
    <div id="Orders" className="">
        <div className="container mx-auto p-5 flex  sm:flex-row flex-col justify-between items-center gap-4 ">
            <div className="flex flex-col sm:items-end gap-4 sm:w-[50%] w-auto  text-center sm:text-end">
                <div className=' flex flex-col gap-5 items-center  sm:items-end sm:text-end text-center'>
                    <h1 className="text-[#F9CE29] md:text-[24px] text-[26px]   "> طلبات الدفع </h1>
                    <p className="lg:text-[32px] text-[20px] text-[#292D32]"> تتبع معاملاتك المالية بسهولة     </p>
                    <p className=" text-[#333333]">    تتيح لك منصة دافع إدارة جميع طلبات الدفع الخاصة بك بسهولة من خلال واجهة مستخدم مبسطة وآمنة.     </p>
                    <ul className='flex flex-col gap-6'>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'>  إدارة سهلة للطلبات   </span>
                                <Image src='/cube-04.png' />

                            </div>
                            <p className='text-[#333333]'>تتيح لك صفحة الطلبات الحالية على منصة دافع إدارة جميع الطلبات بسهولة فائقة. بضغطة زر واحدة، يمكنك الوصول إلى كافة التفاصيل اللازمة لكل طلب، بما في ذلك تاريخ الطلب، المبلغ المطلوب، وحالة التنفيذ الحالية.</p>
                        </li>
                        <li className='flex flex-col gap-2'>
                            <div className='flex sm:justify-end justify-center items-center gap-3'>
                                <span className='text-[#222222] md:text-[18px]'> تفاصيل شاملة لكل طلب   </span>
                                <Image src='/cube-02.png' />
                            </div>
                            <p className='text-[#333333] '>تتضمن صفحة الطلبات تفاصيل شاملة لكل طلب، مثل المعاملات السابقة والتفاصيل المالية، مما يسهل عليك إدارة وتتبع كافة النشاطات المالية الخاصة بك بكل دقة وسهولة.</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div><Image src="/order.png" className="sm:w-[50%] w-[30%] "/></div>
            </div>
        
        </div>
  )
}

export default Orders
