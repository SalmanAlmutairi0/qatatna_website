import React from 'react'
import './benefitsSection.css'
import benefitsSvg from '../../assets/Mask_Group.svg'
import addUser from '../../assets/benefitsIcons/addUser.png'
import Budget from '../../assets/benefitsIcons/Budget.png'
import create from '../../assets/benefitsIcons/create.png'
import Group from '../../assets/benefitsIcons/Group.png'

const BenefitCard = ({ icon, title, desc,color }) => {
    const blue = 'linear-gradient(169deg, #00D4EC -31.79%, #7310FF 207.23%)'
    const purple = 'linear-gradient(169deg, #00D4EC -31.79%, #4264F7 -31.76%, #7310FF -31.74%, #7310FF 207.23%)';
    
    if(color === 'blue'){
        color = blue
    }else if(color === 'purple'){
        color = purple
    }



    return (
        <div className="benfits-card">
                <div className="icon" style={{background:color}}>
                        <img src={icon} alt="addUser" />
                </div>
                <div className="card-content">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                </div>
        </div>
    )
} 
export default function BenefitsSection() {

    const benefitsCardData = [
    {
        icon: addUser,
        title: 'قم بدعوة الاصدقاء',
        desc: 'قم بدعوة الأفراد الذين ترغب في مشاركة المصاريف معهم إلى مجموعتك',
        color: 'blue'

    },
    {
        icon: Group,
        title: 'قم بانضمام الأفراد',
        desc: 'قم بانضمام الأفراد الذين ترغب في مشاركة المصاريف معهم إلى مجموعتك',
        color: 'purple'
    },
    {
        icon: create,
        title: 'استخدام التطبيق',
        desc: 'قم بانضمام الأفراد الذين ترغب في مشاركة المصاريف معهم إلى مجموعتك',
        color: 'blue'
    },
    {
        icon: Budget,
        title: 'اضافة المصاريف',
        desc: 'قم بانضمام الأفراد الذين ترغب في مشاركة المصاريف معهم إلى مجموعتك',
        color: 'purple'
    }
]
    
  return (
    <section id='benefits'>
        <img src={benefitsSvg} alt="benefits" className='benefits-back-img' />

        <div className="benefits-container">
            <div className="benfits-title">
                <h1>كيفية الاستفادة من خدمات قطّتنا</h1>
                <p>إليك بعض التفاصيل عن  كيفية استخدام تطبيق قطّتنا </p>
            </div>

            <div className="benfits-cards">
               
                {benefitsCardData.map((item, index) => (
                    <BenefitCard key={index} {...item} />
                ))}



            </div>

        </div>
        
    </section>
  )
}
