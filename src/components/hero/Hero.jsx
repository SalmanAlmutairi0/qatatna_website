import React from 'react'
import './hero.css'
import heroMokup from '../../assets/mokup_hero.png'
import background from '../../assets/Background.svg'
import bottomSvg  from '../../assets/Decoration.svg'
export default function Hero() {
  return <section className='hero'>
        <div className="hero-container">
            <div className="hero-content">
                <h1>تطبيق قطتنا , اجمع وقسم مصاريف الاهل والاصدقاء بسهولة</h1>
                <p>تطبيق قطتنا هو رفيقك المثالي للخروج مع الاصدقاء حيث يجمع بين السهولة والتنظيم لجعل تجاربك الاجتماعية اكثر متعة و بساطة. بدلاً من التعامل مع التفاصيل المعقدة لتقسيم الفواتير. وجمع النقود, يقوم تطبيق قطتنا بتسهيل هذه العملية بشكل ذكي</p>
                <div className="hero-botton">
                    <button>حمل التطبيق</button>
                </div>
            </div>

            <img src={heroMokup} alt="" />
        </div>


        <div className="background-svg">
        <img src={background} alt="Background"/>
        <div className="bottom-svg">
            <img src={bottomSvg} alt="Bottom SVG"/>
        </div>
    </div>
  </section>
}
