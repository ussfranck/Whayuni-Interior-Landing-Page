import React from "react";
import "../css/App.css";
import {FaPlay} from "react-icons/fa";
import {faqData, Features} from "../services/data.js";
import {FeatureCard} from "../components/FeatureCard.jsx";
import {ProjectSlider} from "../components/ProjectSlider.jsx";
import {FaqItem} from "../components/FAQItem.jsx";
import {WhIcon} from "../components/WhIcon";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 80
});

function App() {
  return (
    <React.Fragment>
      <section className="whayuni-landing">
        <header className="whayuni-landing__header" data-aos={"fade-down"}>
          <div className="logo"><p>Whayuni</p></div>
          <nav className={'whayuni-landing__header-nav'}>
            <ul>
              <li><a href={'#about-us'}>About</a></li>
              <li><a href={'#services'}>Services</a></li>
              <li><a href={'#portfolio'}>Portfolio</a></li>
              <li><a href={'#contact'}>Contact</a></li>
            </ul>
          </nav>
          <div className={'whayuni-landing__header-utility-widgets'}>
            <div className={'lang'}>
              <div className={'img-container-lang'}>
                <img src={'/icons/flag.png'} alt={'english flag'}/>
              </div>
              <p>Eng</p>
            </div>
            <button type={'button'} id={'get-started'}>Get started</button>
            <div id={"menu-icon"}>
              <img src={"/icons/menu.svg"} alt="menu icon"/>
            </div>
          </div>
        </header>
        <div className={'whayuni-landing__header-review'}>
          <h1 data-aos={"fade-up"}>Make room better living.</h1>
          <p data-aos={"fade-up"}>
            Bring your dream home to life with one-on-one design help & hand-picked<br/>
            products tailored to your style, space, and budget.
          </p>
        </div>
        <div className={'whayuni-landing__preview-observer'}>
          <div className={'whayuni-landing__preview-observer-box'} data-aos={"fade-up"}></div>
          <div className={'whayuni-landing__preview-observer-banner-indicator'}>Special Price</div>
        </div>
        <div className={'whayuni-landing__bottom-preview'}>
          <div className={'whayuni-landing__bottom-preview-box'}><h3 data-aos={"fade-up"}>Latest Project</h3></div>
          <div className={'whayuni-landing__bottom-preview-box'}>
            <span data-aos={"fade-up"}>Themes</span>
            <h4 data-aos={"fade-up"}>Retro Living-room</h4>
          </div>
          <div className={'whayuni-landing__bottom-preview-box'}>
            <span data-aos={"fade-up"}>Price</span>
            <h4 data-aos={"fade-up"}>$ 1280.50</h4>
          </div>
        </div>
        <div className={'whayuni-landing__preview-observer-min-player-card'} data-aos={"fade-left"}>
          <div className={'whayuni-landing__preview-observer-min-player-card__scene'}>
            <img src={'/images/about-bg.jpg'} alt={'preview'}/>
          </div>
          <div className={'whayuni-landing__preview-observer-min-player-card__right-container'}>
            <div className={'whayuni-landing__preview-observer-min-player-card-play-button'}>
              <FaPlay/>
            </div>
            <div className={'whayuni-landing__preview-observer-min-player-card__progress'}>
              <p>01</p>
              <progress max={100} value={33}/>
              <p>03</p>
            </div>
          </div>
        </div>
      </section>
      <section className={'whayuni-services'}>
        <div className={'whayuni-services__box'} data-aos={"fade-up"}>
          <p>Bedroom <span>25</span></p>
          <div className={'over'}></div>
        </div>
        <div className={'whayuni-services__box'} data-aos={"fade-up"}>
          <p>Dining Room <span>20</span></p>
          <div className={'over'}></div>
        </div>
        <div className={'whayuni-services__box'} data-aos={"fade-up"}>
          <p>Kitchen <span>14</span></p>
          <div className={'over'}></div>
        </div>
        <div className={'whayuni-services__box'} data-aos={"fade-up"}>
          <p>Home Office<span>18</span></p>
          <div className={'over'}></div>
        </div>
        <div className={'whayuni-services__box'} data-aos={"fade-up"}>
          <p>Living Room <span>24</span></p>
          <div className={'over'}></div>
        </div>
      </section>
      <section className={'whayuni-about-us'} id={'about-us'}>
        <div className={'whayuni-about-us__pic'}>
          <img src={'/images/about.jpg'} alt={'about-us pic'} data-aos={"zoom-in"}/>
        </div>
        <div className={'whayuni-about-us__review'}>
          <h3 data-aos={"fade-up"}>About</h3>
          <h2 data-aos={"fade-right"}>Enhance your interior <br/> <span>through design</span></h2>
          <p data-aos={"fade-up"}>
            Our practice is Designing Complete EnvironmentTM — exceptional buildings, communities and places — in
            special
            situations, where a unique historic or natural environment requires an especially thoughtful and innovative
            solution.
          </p>
          <button type={'button'} data-aos={"fade-up"}>Learn more</button>
        </div>
      </section>
      <section className={'whayuni-featured'} id={'services'}>
        <div className={'whayuni-featured__headline'}>
          <h4 data-aos={"fade-up"}>Featured</h4>
          <h2 data-aos={"fade-up"}>Best Solutions <span>for your home</span></h2>
        </div>
        <div className={'whayuni-featured__container'} data-aos={"fade-up"}>
          {
            Features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.desc} Icon={feature.icon}/>
            ))
          }
        </div>
      </section>
      <section className={'whayuni-banner'} data-aos={"slide-up"}>
        <div className={'whayuni-banner__wrapper'}>
          <div className={'whayuni-banner__overlay'}>
            <h2>
              We&apos;ve worked <div className={'whayuni-banner__overlay-circle-view'} data-aos={"zoom-out"}></div>
              in iconic <span>natural<br/>settings</span>, historic towns, and growing cities, across 6 continents
              and&nbsp;
              <span>20+ countries.</span>
            </h2>
          </div>
        </div>
        <div className={'whayuni-banner__widget'}>
          <div className={'whayuni-banner__widget-border-view__wrapper'}>
            <div className={'whayuni-banner__widget-border-view-bubble'}>
              <div></div>
            </div>
            <div className={'whayuni-banner__widget-border-view'}>
              <p>Simple</p>
              <div className={'whayuni-banner__widget-border-view-img-container'}>
                <img src={'/icons/star-ring.svg'} alt={'image'}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={'whayuni-projects'} id={'portfolio'}>
        <div className={'whayuni-projects__headline'}>
          <div className={'whayuni-projects__headline-left'}>
            <h3 data-aos={"fade-up"}>Project</h3>
            <h2 data-aos={"fade-up"}>Explore <span>Our Project</span></h2>
          </div>
          <div className={'whayuni-projects__headline-right'} data-aos={"fade-left"}>
            We love our residential design and build projects - big and
            small! From full builds, major renovations or a new lease of life
            to individual space and create perfect place.
          </div>
        </div>
        <div data-aos={"fade-up"}>
          <ProjectSlider/>
        </div>
      </section>
      <section className={'whayuni-faq'}>
        <div className={'whayuni-faq__headline'}>
          <h3 data-aos={"fade-down"}>FAQ&apos;S</h3>
          <h2 data-aos={"fade-up"}>Keep up to date with <span>news & insight</span></h2>
        </div>
        <div className={'whayuni-faq__container'} data-aos={"fade-up"}>
          {faqData.map((faq, index) => (
            <FaqItem key={index} categories={faq.categories} question={faq.question} answer={faq.answer}/>
          ))}
        </div>
      </section>
      <footer className={"whayuni-footer"} data-aos={"fade-up"}>
        <div className={"whayuni-footer__headline"}>
          <div className={"footer-logo"} data-aos={"fade-right"}>Whayuni.</div>
          <div className={"whayuni-footer__headline-review"} data-aos={"fade-left"}>
            <p>
              Committed to delivering with high projects and innovating design solutions.
            </p>
            <div id={"decoration"}></div>
          </div>
        </div>
        <div className={"whayuni-footer__content"} data-aos={"fade-up"}>
          <div className={"whayuni-footer__content-left-side"}>
            <h3 data-aos={"fade-up"}>Join Our Newsletter</h3>
            <div className={"whayuni-footer__content-left-side__input"} data-aos={"fade-up"}>
              <input type={"text"} placeholder={"Email Address"} name={"usr-email"}/>
              <div>
                <WhIcon color={"rgba(220,220,220,0.8)"}/>
              </div>
            </div>
          </div>
          <div className={"whayuni-footer__content-right-side"} data-aos={"fade-right"}>
            <div className={"whayuni-footer__content-right-side__box"} data-aos={"fade-up"}>
              <h3>Social</h3>
              <ul>
                <li><a href={"#"}>Instagram</a></li>
                <li><a href={"#"}>Twitter</a></li>
                <li><a href={"#"}>LinkedIn</a></li>
                <li><a href={"#"}>Facebook</a></li>
              </ul>
            </div>
            <div className={"whayuni-footer__content-right-side__box"} data-aos={"fade-up"}>
              <h3>About</h3>
              <ul>
                <li><a href={"#"}>Our Brand</a></li>
                <li><a href={"#"}>Designers</a></li>
                <li><a href={"#"}>Blog <span>New</span></a></li>
                <li><a href={"#"}>Shipping</a></li>
              </ul>
            </div>
            <div className={"whayuni-footer__content-right-side__box"} data-aos={"fade-up"}>
              <h3>Offices</h3>
              <ul>
                <li><a href={"#"}>Jakarta - INA</a></li>
                <li><a href={"#"}>Tokyo - JPN</a></li>
                <li><a href={"#"}>San Diego - CA</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={"whayuni-footer__banner"}>
          <p>Since 1998</p>
          <p>&copy;2023 Copyright By <span>WHAYUNI-CANTIK.CO — Copy2-5</span></p>
          <p>
            <a href={"#"}>Term</a>
            <a href={"#"}>Privacy</a>
            <a href={"#"}>Policy</a>
          </p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default App;
