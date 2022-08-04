$(document).ready(function(){
    $('.aboutSlider').slick({
        infinite: false,
        arrow:false,
        dots:true,

        slidesToShow:1,
        // centerMode:true,
        // variableWidth:true,

        appendArrows:$('.nav_arrows'),
        appendDots:$('.nav_dots'),

    });

  

});
$(document).ready(function(){
    $('.header__content__right').slick({

        arrow:false,
        dots:false,

        slidesToShow:1,
        centerMode:true,
        variableWidth:true,

        appendArrows:$('.header__content__bot__right'),

    });

  

});

/*Open menu*/
const navLeng = `<div id="navLeng"class="navLeng">
<div class="container__navLeng">
    <div class="navLeng__content">
        <a href="#" class="navLeng__content__item">English</a>
        <a href="#" class="navLeng__content__item">Arabic</a>
        <a href="#" class="navLeng__content__item">Chinese (Simplified)</a>
        <a href="#" class="navLeng__content__item">Chinese (Traditional)</a>
        <a href="#" class="navLeng__content__item">French</a>
        <a href="#" class="navLeng__content__item">German</a>
        <a href="#" class="navLeng__content__item">Italian</a>
        <a href="#" class="navLeng__content__item">Polish</a>
        <a href="#" class="navLeng__content__item">Russian</a>
        <a href="#" class="navLeng__content__item">Ukrainian</a>
        <a href="#" class="navLeng__content__close navLeng__close">
            <svg class="navLeng__close"width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line class='navLeng__content__close__line navLeng__close'x1="1.35355" y1="0.995568" x2="18.2206" y2="17.8626" stroke="white"/>
                <path class='navLeng__content__close__line navLeng__close'd="M1.13405 17.8672L18.0011 1.00011" stroke="white"/>
                </svg>
                
        </a>
        <a href="#" class="navLeng__content__closeMedia navLeng__close">
        <svg class="navLeng__close" width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="navLeng__content__close__line navLeng__close" d="M9.5 1L1 9.5L9.5 18" stroke="white"/>
            </svg>
        </a>
          
    </div>
</div>
</div>
`,
navHelp = `<div class="navHelp" id="navHelp">
<div class="container">
    <div class="navHelp__title">
        HOW CAN WE HELP YOU?
    </div>
    <div class="navHelp__text">
       <p> Welcome to our help center. Our goal is to make the process of 
        getting acquainted and purchase as easy and pleasant as possible. Need help with your KAT VR loco product? Many product questions can be resolved by reviewing our Product Support <a href="#">FAQs</a>.
        </p>
        <p>
Please also feel free to <a href="#">Contact Us</a> directly should you need anything further. We’re happy to help.
            </p>

    </div>
    <div class="navHelp__links">
        <a href="#" class="navHelp__link">Instruction manual</a>
        <a href="#" class="navHelp__link">Where to go for a warranty</a>
        <a href="#" class="navHelp__link">Service Policy</a>
    </div>
    <div class="navHelp__mails">
        <a href="#" class="navHelp__mail">+86-0571-86105373</a>
        <a href="#" class="navHelp__mail">global@katvr.com</a>
        <a href="#" class="navHelp__mail">overseas@katvr.com</a>

    </div>
    <svg class="navHelp__close navHelpClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line class="navHelpClose" x1="1.35355" y1="0.995568" x2="18.2206" y2="17.8626" stroke="white"/>
        <path class="navHelpClose" d="M1.13428 17.8672L18.0014 1.00011" stroke="white"/>
        </svg>
        
</div>
</div>
`,
nav = `<div id="nav" class="nav">
<div class="containerNav">
    <div class="nav__content">
        <a href="#about" class="nav__content__item nav_content_item_close">About</a>
        <a href="#tech" class="nav__content__item nav_content_item_close">Tech</a>
        <a href="#why" class="nav__content__item nav_content_item_close">Benefits</a>
        <a href="#getIn " class="nav__content__item nav_content_item_close">Contact</a>
        <a href="#" class="nav__content__item nav__content__item__leng">Language</a>
        <a href="#" class="nav__content__item">FAQ</a>
        <a href="#" class="nav__content__item HelpLink">Help</a>

        <a href="#" class="nav__content__close navLeng__close">
            <svg class="nav__close"width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line class='nav__content__close__line nav__close'x1="1.35355" y1="0.995568" x2="18.2206" y2="17.8626" stroke="white"/>
                <path class='nav__content__close__line nav__close'd="M1.13405 17.8672L18.0011 1.00011" stroke="white"/>
                </svg>
                
        </a>
    </div>
</div>
</div>
`,
video =`<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/video.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`

const aboutVideo1 = `
<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/video.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`,
aboutVideo2 = `<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/aboutVideo2.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`,
aboutVideo3 = `<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/aboutVideo3.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`,
aboutVideo4 = `<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/aboutVideo4.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`,
aboutVideo5 = `<div id="video" class="video">
<div class="videoContainer">

    <video id="vid" class="vid"   controls preload   autoplay muted="10%" >
        <source src="video/aboutVideo5.mp4">
    </video>

    <div class="videoContainer__close videoClose">
        <svg class="videoContainer__close videoClose" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line class="videoClose" x1="1.35355" y1="0.995446" x2="18.2206" y2="17.8625" stroke="white"/>
            <path class="videoClose"d="M1.13428 17.8671L18.0014 0.999984" stroke="white"/>
        </svg>

    </div>
</div>

</div>`;

document.addEventListener('click', function(event){
    
    /*navLeng*/

    if(event.target.classList.contains('navLeng__open')){
        if(document.querySelector('.navLeng') === null){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", navLeng )
            setTimeout(()=>(document.querySelector('.navLeng').classList.add("open__navLengAnim")), 1)
            
            
        }
        
    }
    if(event.target.classList.contains('navLeng__close')){
        document.querySelector('.navLeng').classList.remove("open__navLengAnim")
        setTimeout(()=>(document.querySelector('.navLeng').remove()), 300)
        
    }

    /*NAV 1280-320*/

    if(event.target.classList.contains('header__nav__open')){
        if(document.querySelector('.nav') === null){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", nav )
            setTimeout(()=>(document.querySelector('.nav').classList.add("open__navLengAnim")), 1)
        }
    }
    if(event.target.classList.contains('nav__close')){
        document.querySelector('.nav').classList.remove("open__navLengAnim")
        setTimeout(()=>(document.querySelector('.nav').remove()), 300)
        
    }

    if(event.target.classList.contains('nav_content_item_close')){
        document.querySelector('.nav').classList.remove("open__navLengAnim")
        setTimeout(()=>(document.querySelector('.nav').remove()), 300)
        
    }

    /*NAV Leng 1280-320  */

    if(event.target.classList.contains('nav__content__item__leng')){
        if(document.querySelector('.navLeng') === null){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", navLeng )

            setTimeout(()=>(document.querySelector('.navLeng').classList.add("open__navLengAnim")), 1)
        }
    }
    

    /*NavHelp*/

    if(event.target.classList.contains('HelpLink')){
        if(document.querySelector('.navHelp') === null){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", navHelp )
            setTimeout(()=>(document.querySelector('.navHelp').classList.add("open__navLengAnim")), 1)

            
        }
    }
    if(event.target.classList.contains('navHelpClose')){
        document.querySelector('.navHelp').classList.remove("open__navLengAnim")
        setTimeout(()=>(document.querySelector('.navHelp').remove()), 300)
        
        
        
    }

    /*Video*/

    if(event.target.classList.contains('VideoOpen')){
        if(document.querySelector('.video') === null){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", video)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
            
        }
    }
    if(event.target.classList.contains('videoClose')){
        document.querySelector('.video').classList.remove("videoAnim")
        setTimeout(()=>(document.getElementById('video').remove()),300)
        
    }
   
    
    
    
    



    /*tech openItem 768*/
    
    if(event.target.classList.contains("tech__content__768__itemSensorClick")){
        document.querySelector('.tech__content__768__itemSensor__sensor').classList.toggle('tech__content__768__item__sensorClick')
        document.querySelector('.tech__content__768__itemSensor__sensor__text').classList.toggle("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemSensor').classList.toggle('itemActive')
        document.querySelector('.tech__content__768__itemSensorClick1').classList.toggle('none')
    }
    if(!event.target.classList.contains("tech__content__768__itemSensorClick")){
        document.querySelector('.tech__content__768__itemSensor__sensor').classList.remove('tech__content__768__item__sensorClick')
        document.querySelector('.tech__content__768__itemSensor__sensor__text').classList.remove("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemSensor').classList.remove('itemActive')
        document.querySelector('.tech__content__768__itemSensorClick1').classList.remove('none')
    }





    if(event.target.classList.contains("tech__content__768__itemconectionnClick")){
        document.querySelector('.tech__content__768__itemconectionn__conectionn').classList.toggle('tech__content__768__item__CONNECTIONClick')
        document.querySelector('.tech__content__768__itemconectionn__conectionn__text').classList.toggle("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemconectionn').classList.toggle('itemActive')
        document.querySelector('.tech__content__768__itemconectionnClick1').classList.toggle('none')
        
    }
    if(!event.target.classList.contains("tech__content__768__itemconectionnClick")){
        document.querySelector('.tech__content__768__itemconectionn__conectionn').classList.remove('tech__content__768__item__CONNECTIONClick')
        document.querySelector('.tech__content__768__itemconectionn__conectionn__text').classList.remove("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemconectionn').classList.remove('itemActive')
        document.querySelector('.tech__content__768__itemconectionnClick1').classList.remove('none')
    }





    if(event.target.classList.contains("tech__content__768__itemBatterriesClick")){
        document.querySelector('.tech__content__768__itemBatterries__Batterries').classList.toggle('tech__content__768__item__BatterriesClick')
        document.querySelector('.tech__content__768__itemBatterries__Batterries__text').classList.toggle("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemBatterries').classList.toggle('itemActive')
        document.querySelector('.tech__content__768__itemBatterriesClick1').classList.toggle('none')
    
    }
    if(!event.target.classList.contains("tech__content__768__itemBatterriesClick")){
        document.querySelector('.tech__content__768__itemBatterries__Batterries').classList.remove('tech__content__768__item__BatterriesClick')
        document.querySelector('.tech__content__768__itemBatterries__Batterries__text').classList.remove("tech__content__768__item__sensor__textClick")
        document.querySelector('.tech__content__768__itemBatterries').classList.remove('itemActive')
        document.querySelector('.tech__content__768__itemBatterriesClick1').classList.remove('none')
    
    }


    /*openAboutVideo*/

    if(event.target.classList.contains("openAboutVideo")){
        if(document.querySelector(".aboutTopItem1").classList.contains('slick-active')){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", aboutVideo1)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
        }
        if(document.querySelector(".aboutTopItem2").classList.contains('slick-active')){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", aboutVideo2)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
        }
        if(document.querySelector(".aboutTopItem3").classList.contains('slick-active')){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", aboutVideo3)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
        }
        if(document.querySelector(".aboutTopItem4").classList.contains('slick-active')){
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", aboutVideo4)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
        }
        if(document.querySelector(".aboutTopItem5").classList.contains('slick-active')){
            
            document.querySelector('.headerBg').insertAdjacentHTML("beforebegin", aboutVideo5)
            setTimeout(()=>(document.querySelector('.video').classList.add("videoAnim")), 1)
        }
    }





})





/*slider arrowAnim*/


window.onload = function(){ 
    /*slider header arrow*/
    const NextArrowHeader = document.querySelector(".header__content__bot__right").querySelector(".slick-next"),
    PrevArrowHeader = document.querySelector(".header__content__bot__right").querySelector(".slick-prev")
    NextArrowHeader.onmouseover = function(event){
        document.querySelector("#header__content__bot__right__switch__item").classList.add('swipeSwitchItem')
    }
    PrevArrowHeader.onmouseover = function(event){
        document.querySelector("#header__content__bot__right__switch__item").classList.remove('swipeSwitchItem')
    }

    
    /*slider about arrow*/
    const NextArrowAbout = document.querySelector(".nav_arrows").querySelector(".slick-next"),
    PrevArrowAbout = document.querySelector(".nav_arrows").querySelector(".slick-prev")

    NextArrowAbout.onmouseover = function(event){
        document.querySelector(".nav_arrows__bot__item").classList.add('swipeSwitchItemAbout')
    }
    PrevArrowAbout.onmouseover = function(event){
    document.querySelector(".nav_arrows__bot__item").classList.remove('swipeSwitchItemAbout')
}

}