import React from 'react'
import "./Hero.css"
import HeroImg from "../../../assets/Images/hero.png"
import HeroInvert from "../../../assets/Images/HeroInvert.png"
import Input from '../../../assets/Components/Input/Input'
import Button from '../../../assets/Components/Btn/Button'
const Hero = () => {
  return (
    <section className='hero'>
   <div className="container">
    <div className="hero-wrapper">
      <div className="hero-content-wrapper">
        <img className='hero-invert' src={HeroInvert} alt="heroinvert" width={100} height={"auto"}/>
        <h1 className='hero-title'>Sochlaringiz To'kiliyaptimi?</h1>
    <p className='hero-text'>Biz xavfsiz va samarali, tibbiy jihatdan tasdiqlangan soch tiklash
muolajalarini taklif qilamiz. Ular tabiiy ko'rinish va uzoq muddatli
natijalarni ta'minlaydi, ishonchingizni qayta tiklaydi.</p>
        
      </div>
      <img src={HeroImg} alt="doctor" width={520} height={"auto"} />
    </div>

   <div className='book-content'>
    <h2 className='book-title'>Qabulga yozilish!</h2>
        <div className="book-wrapper">
            <Input type={"text"} labelName={"Ismingiz"}/>
            <Input type={"number"} labelName={"Telefon Raqamingiz"}/>
           <a href='#' className='book-btn'>YUBORISH</a>

        </div>

        </div>
    
   </div>
    </section>
  )
}

export default Hero
