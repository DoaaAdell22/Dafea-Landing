import { Button , Image } from "antd"
import { motion } from "framer-motion"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const { pathname } = useLocation();

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
        <div className="flex md:flex-row flex-row-reverse  justify-between   items-center gap-5 p-5 container mx-auto   ">
            <div className="block md:hidden " onClick={clicked}><Hamburger /></div>
            <Button className="md:p-[20px] p-[10px]  rounded-3xl bg-[#F9CE29] lg:text-[14px] text-[12px] ">احصل على التطبيق الأن</Button>
            
            <ul className="  flex-row justify-center items-center gap-8 lg:text-[14px] text-[12px] hidden md:flex ">
            <NavLink to="contact" >  كيفية تشغيل التطبيق</NavLink>
            <NavLink to="more" >  طلبات الدفع </NavLink>
            <NavLink to='building'      >  المحفظة</NavLink>
            <NavLink  to='Description'    > لمحة عن التطبيق </NavLink>
            <NavLink to='/'  >  الرئيسية </NavLink>
            </ul>
            <div className="flex flex-row justify-center items-center " >
                <Image src='/logoDafea.png' className="sm:w-[114px] sm:h-[48px] " width={60} height={30}/>
            </div>
            
            
        </div>
        {
            isOpen ?  <motion.ul   initial="hidden"
            animate="visible"
            exit="exit"
            variants={list} className="flex flex-col-reverse p-6  gap-5 text-end  md:hidden">
            <motion.li variants={item}><NavLink to="contact" >  كيفية تشغيل التطبيق</NavLink></motion.li>
            <motion.li variants={item}><NavLink to="more" >  طلبات الدفع </NavLink></motion.li>
            <motion.li variants={item}><NavLink to='building'      >  المحفظة</NavLink></motion.li>
            <motion.li variants={item}><NavLink  to='Description'    > لمحة عن التطبيق </NavLink></motion.li>
            <motion.li  variants={item}><NavLink to='/'  >  الرئيسية </NavLink></motion.li>
          </motion.ul> : ''

          }
    </div>
    )
}

export default Header