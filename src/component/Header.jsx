import {   Image } from "antd"
import { motion } from "framer-motion"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    const list = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
      };
    
      const item = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
      };


      const clicked = () => {
        setOpen(!isOpen)
       }
      
    return (
    <div className="bg-[rgba(249,206,41,0.1)]">
        <div className="flex md:flex-row flex-row  justify-between   items-center gap-5 p-5 container mx-auto   ">
            <div className="block md:hidden " onClick={clicked}><Hamburger /></div>
            <button  className="md:p-[11px] p-[10px]  rounded-3xl bg-[#F9CE29] lg:text-[14px] text-[12px]  ">احصل على التطبيق الأن</button>
            <ul className=" flex-row justify-center items-center gap-8 lg:text-[14px] text-[12px] hidden md:flex cursor-pointer">
                <Link to="Guide" smooth={true} duration={500} className="hover:text-[#F9CE29]">كيفية تشغيل التطبيق</Link>
                <Link to="Orders" smooth={true} duration={500} className="hover:text-[#F9CE29]">طلبات الدفع</Link>
                <Link to="Wallet" smooth={true} duration={500} className="hover:text-[#F9CE29]">المحفظة</Link>
                <Link to="About" smooth={true} duration={500} className="hover:text-[#F9CE29]">لمحة عن التطبيق</Link>
                <Link to="Landing" smooth={true} duration={500} className="hover:text-[#F9CE29]">الرئيسية</Link>
            </ul>
            <div className="flex flex-row justify-center items-center " >
                <img src='/logoDafea.png' className="sm:w-[114px] sm:h-[48px] " width={60} height={30}/>
            </div>
            
            
        </div>
        {
            isOpen ?  <motion.ul   initial="hidden"
            animate="visible"
            exit="exit"
            variants={list} className="flex flex-col-reverse p-6  gap-5 text-end  md:hidden cursor-pointer">
            <motion.li variants={item}><Link to="Guide" smooth={true} duration={500}  >  كيفية تشغيل التطبيق</Link></motion.li>
            <motion.li variants={item}><Link to="Orders" smooth={true} duration={500}  >  طلبات الدفع </Link></motion.li>
            <motion.li variants={item}><Link to="Wallet" smooth={true} duration={500}     >  المحفظة</Link></motion.li>
            <motion.li variants={item}><Link  to="About" smooth={true} duration={500}    > لمحة عن التطبيق </Link></motion.li>
            <motion.li  variants={item}><Link to="Home" smooth={true} duration={500} >  الرئيسية </Link></motion.li>
          </motion.ul> : ''

          }
    </div>
    )
}

export default Header
