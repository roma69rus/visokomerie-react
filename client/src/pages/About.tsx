import * as React from 'react';
import { VMFooter } from '../components/UI/footer/VMFooter';
import { Header } from '../components/UI/header/Header';

export interface IAboutProps {
}

export function About(props: IAboutProps) {
  return (
    <div>
      <Header color='BLACK' />
      <section className="about">
        <h2 className="about__heading">О бренде для высоких</h2>
        <p className="about__text">Привет, меня зовут Даша, <br />Я основательница бренда VM</p>
        <div className="about_imgwrapper">
          <a href="beige_palaco_product.html" className="">
            <img className="about__img" src="/about.jpg" alt="PALAZZO BLACK" />
          </a>
        </div>
        <div className="about__text">VISOKOMERIE (VM) - бренд одежды для высоких девушек. <br />
          Идея шить одежду для высоких долго вынашивалась и ждала своего часа. я хотела, чтобы, наконец, все девушки ростом 170+ смогли надеть свои идеальные брюки на высокий рост, так как с ними, в основном, самая большая проблема.
          <br /><br />
          Мой рост 180 см. и я лично знаю, что такое брать брюки/джинсы на размеры больше, чтобы подходили по длине и потом ушивать в талии или смотреть на супер классный фасон и понимать, что их длина на среднестатистические 164 см.
          <br /><br />
          Пора менять эту несправедливость и дать высоким красоткам возможность носить вещи, которые будут сидеть безупречно.<br />
          Я хочу, чтобы бренд VM стал объединением высоких, уверенных девушек, кто ценит и любит свою нестандартность.<br />
          #явышеэтого
        </div>
      </section>
      <VMFooter />
    </div>
  );
}
