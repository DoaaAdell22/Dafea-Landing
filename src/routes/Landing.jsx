import { Image , Button } from "antd"
import { Link } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";

const Landing = () => {
    return (
        <div id="Landing" className="bg-[rgba(249,206,41,0.1)]">
            <div className="container mx-auto p-5 flex  sm:flex-row flex-col-reverse justify-between items-center gap-4 ">
                <div><img src="/landing.png" className=" w-full "/></div>
                <div className="flex flex-col sm:items-end gap-4 sm:w-[50%] w-auto  text-center sm:text-end">
                    <h1 className="text-[#F9CE29] md:text-[24px] text-[26px]   ">دافع</h1>
                    <p className="lg:text-[40px] text-[18px] text-[#292D32]">إدارة معاملاتك المالية بكل سهولة وأمان مع دافع</p>
                    <p className="text-[15px] text-[#333333] ">تتيح دافع للمستخدمين إدارة عملياتهم المالية بكل سهولة وأمان.
                    توفر دافع مجموعة من خدمات الدفع والحلول للأفراد والشركات على حد سواء. تتيح دافع للمستخدمين 
                    إدارة عملياتهم المالية بكل سهولة وأمان. توفر دافع مجموعة من خدمات الدفع والحلول للأفراد 
                    والشركات على حد سواء. تتيح دافع للمستخدمين إدارة عملياتهم المالية بكل سهولة
                    وأمان. توفر دافع مجموعة من خدمات الدفع والحلول للأفراد والشركات على حد سواء.</p>
                    <div className="flex md:flex-row flex-col-reverse items-center  lg:gap-4 gap-2 justify-end">
                        <Link className="flex justify-center items-center lg:gap-3 gap-2 text-[#292D32] lg:text-[14px] text-[12px]">
                            <GoArrowLeft className="w-5 h-5"/>
                            <div className=""> تواصل مع خدمة العملاء</div>  
                        </Link>
                        <button  className="md:p-[11px] p-[8px]  rounded-3xl bg-[#F9CE29] lg:text-[14px] text-[12px]  ">احصل على التطبيق الأن</button>
                        </div>

                </div>
            </div>
        
        </div>
    )
}

export default Landing
