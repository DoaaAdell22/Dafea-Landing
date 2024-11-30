import { Input , Space , Button } from 'antd';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {



  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid  xl:grid-cols-5 gap-8  xl:gap-6 items-start sm:text-end">
        <div className="flex flex-col gap-3 items-end text-end  col-span-3 xl:col-span-1 xl:min-w-[280px]">
          <h1 className="text-[18px] ">اشترك الان بالبريد ليصلك كل جديد</h1>
          <hr className="w-10 h-[2px] bg-[#000000]" />
          <p className='sm:text-[15px] w-full'>
            ادخل بريدك الالكتروني لدينا للاشتراك ليصلك كل جديد عن اخر عروضنا ومنتجاتنا
          </p>
          <Space.Compact style={{ width: 300  , direction:'rtl' }}>
        <Input placeholder='ارسل البريد الالكترونى'   />
          <Button  className='bg-[#F9CE29]  text-[black] hover:bg-[#F9CE29]'>اشتراك</Button>
          </Space.Compact>
          

        </div>

        <div className=" flex-col gap-3  items-end  text-end flex col-span-3 lg:col-span-1">
          <h1 className="sm:text-[16px] text-[12px] md:text-[18px] hidden lg:block">تواصل معنا</h1>
          <hr className="w-10 h-[2px] bg-[#000000] hidden lg:block" />
          <div className="flex flex-col  justify-between gap-6">
            <div className='flex flex-row-reverse lg:flex-col  gap-2'>
              <a href="#" className=" flex  justify-end items-center  text-end gap-2">
                <span className="  sm:text-[15px]"> : اتصل بنا الان</span>
                <span className="  text-[#F9CE29]">
                  <FaPhone />
                </span>
              </a>
              <a className=' sm:text-[15px]' href="tel:+966847514768">+966847514768</a>
            </div>
            <div className='flex flex-row-reverse lg:flex-col  gap-2'>
              <a href="#" className="flex  justify-end items-center text-end gap-2">
                <span className="  sm:text-[15px]"> : ارسل عبر البريد الالكتروني  </span>
                <span className="text-[#F9CE29]">
                  <MdEmail />
                </span>
              </a>
              <a className=' sm:text-[15px]' href="mailto:Dafea@info.com ">Dafea@info.com</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end  text-end  ">
          <h1 className="sm:text-[16px] text-[12px] md:text-[18px] min-w-[95px] sm:w-auto">علاقات المستثمرين</h1>
          <hr className="w-10 h-[2px] bg-[#000000]" />
          <div className="flex flex-col gap-4 text-[10px] sm:text-[15px]">
            <span>الحوكمة</span>
            <span>البيانات المالية</span>
            <span>البيانات الصحفية</span>
            <span>الفعاليات والأحداث</span>
          </div>

        </div>

        <div className="flex flex-col gap-3 items-end text-end ">
          <h1 className="sm:text-[16px] text-[12px] md:text-[18px]">المستهلك</h1>
          <hr className="w-10 h-[2px] bg-[#000000]" />
          <div className="flex flex-col gap-4 text-[10px] sm:text-[15px]">
            <span>سداد الفواتير</span>
            <span>الخدمات المالية</span>
            <span>المكافآت والولاء</span>
            <span>إيداع الأموال</span>
            <span>سحب الأموال</span>
          </div>
        </div>

        <div className="flex flex-col gap-3  items-end  text-end">
          <h1 className="sm:text-[16px] text-[12px] md:text-[18px]">الشركة</h1>
          <hr className="w-10 h-[2px] bg-[#000000]" />
          <div className="flex flex-col gap-4 text-[10px] sm:text-[15px]">
            <span>الرئيسية</span>
            <span>عنا</span>
            <span>الشروط والاحكام</span>
            <span>الاسئلة الشائعة</span>
            <span>فرص وظيفية</span>
          </div>
        </div>
        
      </div>

      <hr className="w-full h-[2px] my-4" />

      <div className="flex  justify-between items-center sm:gap-4">
        <div className="flex gap-1">
          <a href="#">
            <img className="md:w-10 md:h-10 w-6 h-6" src="/facebook.png" />
          </a>
          <a href="#">
            <img className="md:w-10 md:h-10 w-6 h-6" src="/twitter.png" />
          </a>
          <a href="#">
            <img className="md:w-10 md:h-10 w-6 h-6" src="/Vector (10).png" />
          </a>
          <a href="#">
            <img className="md:w-10 md:h-10 w-6 h-6" src="/instagram.png" />
          </a>
        </div>
        <div className="flex sm:gap-2 justify-between gap-1 items-center">
          <span className="text-[10px] md:text-[14px]">حقوق النشر © 2024 دافع كل الحقوق محفوظة</span>
          <img src="/logoDafea.png" className="md:w-14 md:h-7 w-10 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
// ml-[81px] sm:ml-0