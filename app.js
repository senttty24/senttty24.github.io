body {
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: #6c7279;
    -webkit-font-smoothing: antialiasted; 

    background-color: #fff;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

p {
    margin: 0 0 10px;
}

/* Containter
================*/
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
/* Header
==================*/

.header {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
}

.header.fixed {
    height: auto;
    position: fixed;
    background-color: #31344e;
}

.header.fixed .header__inner {
    padding-bottom: 15px;
    padding-top: 15px;

    border-bottom: 0;
}

.header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;

    border-bottom: 1px solid #515369 ;
}

/* Nav
==================*/

.nav {
    display: flex;
    font-size: 13px;
    font-weight: 700px;
    text-transform: uppercase;
}

.nav__link {
    margin-left: 50px;
    color: #fff;
    text-decoration: none;
    opacity: 0.75;

    transition: opacity .2s linear;
}
.nav__link:first-child {
    margin-left: 0px;
}

.nav__link:hover {
    opacity: 1;

}

/* intro
============================ */
.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 750px;
    padding-top: 100px;
    background: #31344e url("D:/HTML/activeBoX/style/background.jpg") center no-repeat;
    background-size: cover;
}

.intro__inner {
    width: 100%;
    max-width: 970px;
    margin: 0 auto;
    text-align: center;
}

.intro__title {
    margin: 0 0 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: 65px;
    line-height: 1.1;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    
}

.intro__subtitle {
    margin-bottom: 60px;
    font-size: 22px;
    color: #fff;
    line-height: 1.5;
    font-weight: 400;
}

/* button
============================ */

.btn {
    display: inline-block;
    vertical-align: top;
    padding: 14px 40px;
    border-radius: 2px;
    border: 0;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;

    transition: background .1s linear;
}

.btn--red {
    background-color: #e84545;
    
}

.btn--red:hover {
    background-color: #dd3434;
}

.btn--long {
    min-width: 280px;
}

/* Features
============================ */

.features {
    display: flex;
    flex-wrap: wrap;
    margin: 95px 0;
}

.features__item {
    width: 33.33333%;
    padding: 0 40px;
    margin: 25px 0;
    text-align: center;
}

.features__icon {
    margin-bottom: 25px;
}

.features__title {
    font-size: 14px;
    color: #2d3033;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.features__text {
    font-size: 14px;
    line-height: 1.5;
    color: #6c7279;
}

/* works
======================= */

.works {
    display: flex;
    flex-wrap: wrap;
}

.works__item {
    width: 25%;
    height: 350px;

    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;

    position: relative;
    overflow: hidden;
}

.works__photo {
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;

    transform: translate3d(-50%, -50%, 0);
}

.works__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;

    background-color: rgba(232, 69, 69, .9);
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    transition: opacity .2s linear;
}

.works__item:hover .works__content {
    opacity: 1;
}

.works__title {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.works__text {
    font-size: 14px;
    color: #fff;
}


/* Team
============== */

.team {
    margin: 100px 0 70px;
}

.team__inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.team__item {
    margin-bottom: 30px;
    padding: 0 15px;
    width: 25%;
}

.team__photo {
    margin-bottom: 20px;

    display: block;
    max-width: 100%;
    height: auto;
}

.team__name {
    margin-bottom: 8px;
    
    font-size: 22px;
    color: #2d3033;
}

.team__prof {
    margin-bottom: 15px;

    font-size: 13px;
    color: #e84545;
    text-transform: uppercase;
}

.team__text {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.5;
    color: #6c7279;
}

/*  Social
===================*/

.social {
    display: flex;

}

.social--footer {
    justify-content: center;
}

.social__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 4px;

    background-color: #fff;
    border: 1px solid #e8ecee;

    transition: background .1s linear;
}

.social__item:hover {
    background-color: #e8ecee;
}

.social__item:hover .social__icon{
    fill: #000;
}

.social--footer .social__item {
    background: transparent;
    border-width: 2px;
    border-color: #fff;
    border-radius: 2px;
}

.social--footer .social__item:hover {
    background-color: #fff;
}

.social--footer .social__icon {
    fill: #fff
}

.social__icon {
    display: block;
    height: 18px;

    fill: #c6cacc;

    transition: fill .1s linear;
}


/*  Reviews
===================*/

.reviews {
    background-color: #53354a;
    overflow: hidden;
}

.reviews__slider {
    height: 500px;
    overflow: hidden;
}

.reviews__slider.slick-initialized {
    height: auto;
}

.reviews__item {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

.reviews__photo {
    width: 50%;
    height: 500px;
    position: relative;
}

.reviews__img  {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;

    transform: translateY(-50%);
}

.reviews__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-left: 80px;
}

.reviews__text {
    margin-bottom: 25px;
    font-family: 'Cardo', sans-serif;
    font-style: italic;
    font-size: 36px;
    line-height: 1.2;
    color: #fff;
}

.reviews__author {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
}

.slick-dots {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
}

.slick-dots li {
    margin: 0 5px;
    padding-bottom: 10px;

}

.slick-dots button {
   
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    padding: 0;
    opacity: 0.5;
    font-size: 0;
    color: transparent;
    cursor: pointer;
}

.slick-dots .slick-active button {
    opacity: 1;
}

.slick-dots button:focus {
    outline: 0;
}
/*  Dwnld
===================*/

.download {
    margin: 90px 0;

    text-align: center;
}

.download__title {
    margin-bottom: 10px;

    font-size: 28px;
    color: #2d3033;
    font-weight: 300;
}

.download__text {
    margin-bottom: 30px;
    font-size: 13px;
    color: #2d3033;
    font-weight: 700;
    text-transform: uppercase;
}

/*  Footer
===================*/

.footer {
    
    
    background-color: #3a3e64;
}

.footer__inner {
    padding: 70px 0;
    display: flex;
    flex-wrap: wrap;
}

.footer__block {
    width: 33.33333%;
    padding: 0 15px;

    text-align: center;
}

.footer__title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}

.footer__adress {
    font-size: 14px;
    line-height: 1.5;
    font-style: normal;
    color: rgba(255, 255, 255, .5);
}

.footer__text {
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, .5);
}

/*  Footer
===================*/

.copyright {
    padding: 20px 0;
    background-color: #313454;
}

.copyright__text {
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    color: #808080;
}

.copyright__text span {
    color: #fff;
}


/* Burger */

.burger {

    display: none;
    padding: 9px 2px;
    
    border: 0;
    background: none;
    cursor: pointer;

}

.burger__item {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    font-size: 0;
    color: transparent;
    
   

    position: relative;
}

.burger__item::before, .burger__item::after {
    content: "";
    width: 100%;
    height: 100%;

    background-color: #fff;

    position: absolute;
    left: 0;
    z-index: 1;
}

.burger__item::before {
    top: -8px;

}

.burger__item::after {
    bottom: -8px;
}


/*  Media
===================*/

@media (max-width: 1300px) {
    /* Works */

    .works__item {
        width: 50%;
    }
}

@media (max-width: 991px) {

    /* nav */
    .nav {
        display: none;
        width: 100%;
        flex-direction: column;

        background-color: #31344e;
        text-align: right;

        position: absolute;
        right: 0;
        top: 100%;
    }

    .nav.show {
        display: flex;
    }

    .nav__link {
        padding: 9px 15px;
    }

    .burger {
        display: block;
    }


    /* Intro */
    .intro__title {
        font-size: 40px;
    }

    /* Features */

    .features__item {
        width: 50%;
    }

    /* Team */

    .team__item {
        width: 50%;
        text-align: center;
    }
    
    .team__photo {
        margin-left: auto;
        margin-right: auto;
    }

    /* Social */

    .social {
        justify-content: center;
    }

    /* Reviews */

    .reviews__photo {
        width: 100%;
        margin: 15px 0 40px;
        overflow: hidden;
    }

    .reviews__content {
        width: 100%;
        padding-left: 0;
        padding-bottom: 40px;
    }

}

@media (max-width: 767px) {

    .intro {
        height: auto;
        padding-top: 130px;
        padding-bottom: 30px;
    }

    .intro__title {
        font-size: 30px;
    }

    .intro__subtitle {
        margin-bottom: 30px;
        font-size: 16px;
    }

    /* Features */

.features {
    margin: 40px 0;
}

    .features__item {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    /* Works */

    .works__item {
        width: 100%;
        height: 300px;
    }

    /* Team */

    .team {
        margin: 60px 0 30px;
    }

    .team__item {
        width: 100%;
        text-align: center;
    }

    /* Reviews */

    .reviews__text {
        font-size: 15px;
    }

    /* Btn */

    .btn--long {
        min-width: 260px;
    }

    /* Dwnld */

    .download {
        margin: 50px 0;
    }

    .download__title {
        font-size: 24px;
    }

    /* Footer */

    .footer__inner {
        padding: 30px 0;
    }

    .footer__block {
        margin-bottom: 30px;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }

    .footer__block:last-child {
        margin-bottom: 0;
    }
}

@media (max-width: 414px) {

    /* Reviews */

    .reviews__img {
        right: -150px;
    }
}
