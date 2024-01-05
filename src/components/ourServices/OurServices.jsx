import React from "react";
import "./ourServices.css";
import cyanShape from "../../assets/cyanShape.svg";
import purbleShape from "../../assets/purbleShape.svg";

import ToDoIcon from "../../assets/icons/ToDo.png";
import ConnectedPeople from "../../assets/icons/Connected_People.png";
import Management from "../../assets/icons/Management.png";
import Addproperties from "../../assets/icons/Addproperties.png";

function Service({ img, icon, title, desc }) {
  return (
    <div className="service">
      <div className="img-container">
        <img src={img} alt="" />

        <div className="img-icon">
          <img src={icon} alt="" />
        </div>
      </div>

      <p className="service-title">{title}</p>
      <p className="service-desc">{desc}</p>
    </div>
  );
}

export default function OurServices() {
  return (
    <section className="our-services">
      <div className="our-services-container">
        <h1>مرحبًا بك في خدمات تطبيق قطّتنا تعرّف على المميزات </h1>

        <div className="services">
      

          <Service
            img={cyanShape}
            icon={ToDoIcon}
            title="تقسيم القطات"
            desc="قدم خدمات تنظيم القطات، والتي تشمل تقسيم المصاريف بين مجموعة من الأشخاص بطريقة عادلة وشفافة. سواء كنت في رحلة مع أصدقائك أو تعيش مع زملائك في المنزل، يساعدك نظامنا في إدارة المال بكفاءة"
          />

          <Service img={purbleShape}
           icon={ConnectedPeople} 
           title="الدورية" 
           desc= 'توفير دوريات دورية لتحديد المساهمات المستمرة بين الأعضاء. سواء كنتم تقومون بمشروع مشترك أو تشاركون في نفقات شهرية، يمكنكم الاعتماد على نظامنا لجعل هذه العمليات أكثر يسرًا وفعالية , ومعرفة الادوار'
           />

          <Service img={purbleShape}
           icon={Management} 
           title="إدارة الأعضاء" 
           desc = 'نقدم أدوات إدارية لسهولة إضافة وإزالة الأعضاء من مجموعات القطات الخاصة بك. سواء كنت تحتاج إلى تحديثات دورية أو إدارة مشروع مستمر، يمكنك الاعتماد على منصتنا لتيسير هذه العمليات'
           />

          <Service img={cyanShape}
           icon={Addproperties} 
           title="إضافة مصاريف" 
            desc ='إضافة مصاريف إضافية بسهولة، مثل تكاليف الماء أو أي نفقات إضافية. يساعد نظامنا في تعزيز الشفافية وتحقيق التوازن في التقسيم العادل للمصاريف.'
        />

        </div>
      </div>
    </section>
  );
}
