$(function(){

    // gsap 셋팅
    gsap.set('header .header_bg',{yPercent:-100})
    gsap.set('.visual_area .font_absol_box',{yPercent:-50,rotation :-8,scale:1.2})
    gsap.set('header .menu_item .bar',{yPercent:-100})
    gsap.set('header .group_menu',{yPercent:-100})
    gsap.set('.stagger_text span',{yPercent:100})
    gsap.set('.gif_box .gif_motion_img',{opacity:0})
    gsap.set('.sc_about .text_box',{opacity:0,yPercent:20})
    gsap.set('.sc_contact .text1',{xPercent:-50})




    var introMotion = gsap.timeline({
        paused:true
    })
    introMotion
    .addLabel('a')
    .to('.intro_bg',1.5,{yPercent:-130},'a')
    .to('.visual_area .font_absol_box',{yPercent:0,rotation :0,scale:1,stagger: {from: "end",amount: 0.5}},'a')

    $(document).ready(function(){
        introMotion.play()
    })
    var headerslideMotion = gsap.timeline({
        paused:true
    })
    headerslideMotion
    .to('header .header_item span',{"color":"#000"})
    .to('header .header_bg',0.1,{
        yPercent:0,
    })
    .to('header .group_menu',{
        yPercent:0,
    })
    .to('header .menu_item .bar',{
        yPercent:0,
        stagger:0.3,
    })
    

    $('.menu').click(function(){
        let onClass = $(this).hasClass('on');

        switch (onClass) {
            case true:
                headerslideMotion.reverse();
                $(this).removeClass('on');
                $('body').css({"overflow":"auto"});
                break;

            case false:
                headerslideMotion.play();
                $(this).addClass('on');
                $('body').css({"overflow":"hidden"});
            break;
        
            default:
                break;
        }
    })

    

    // 헤더 모션
    headerLogoMotion = gsap.to('.br_logo span',{
        yPercent:0,
        stagger:0.1,
        paused:true
    })

    headerMenuMotion = gsap.to('.br_menu span',{
        yPercent:0,
        stagger:0.1,
        paused:true
    })

    $('.br_logo').hover(function(){
        headerLogoMotion.play()
    },function(){
        headerLogoMotion.reverse()
    })
    $('.br_menu').hover(function(){
        headerMenuMotion.play()
    },function(){
        headerMenuMotion.reverse()
    })

    // 서브메뉴 클릭시 이동 모션
    $('header .menu_list .menu_item:nth-child(1)').click(function(){
        headerslideMotion.reverse();
        $('body').css({"overflow":"auto"});
        gsap.to(window, {duration: 2, scrollTo:"#about"});
    })
    $('header .menu_list .menu_item:nth-child(2)').click(function(){
        headerslideMotion.reverse();
        $('body').css({"overflow":"auto"});
        gsap.to(window, {duration: 2, scrollTo:"#projects"});
    })
    $('header .menu_list .menu_item:nth-child(3)').click(function(){
        headerslideMotion.reverse();
        $('body').css({"overflow":"auto"});
        gsap.to(window, {duration: 2, scrollTo:"#contact"});
    })

    // gif 이미지 모션
    $('.gif_box').each(function(index,element){
        gsap.to($(this).find('img'),0,{
            repeat:-1,
            opacity:1,
            stagger:1,
        })
    })

    // 메인 비주얼 스크롤 움직임
    var gifMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_visual',
            start:'0% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:true
        }
    })

    gifMotion
    .to('.gif_box',{yPercent:-400})

    var mainTextMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_visual',
            start:'30% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:true
        }
    })

    mainTextMotion
    .addLabel('textMove')
    .to('.sc_visual .move1',{xPercent:10},'textMove')
    .to('.sc_visual .move2',{xPercent:-10},'textMove')
    .to('.sc_visual .move3',{xPercent:10},'textMove')
    .to('.sc_visual .move4',{xPercent:-10},'textMove')
    .to('.sc_about .bg_radius_wrap',{scaleY:1.5},'textMove')


    // bg_black 일때 헤더 바꾸기
    var aboutBgMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_about',
            start:'-70% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:true
        }
    })

    aboutBgMotion
    .to('header .header_item span',0.5,{"color":"#fff"})


    // about h2 모션
    ScrollTrigger.create({
        trigger: '.sc_about',
        start:'0% 70%',
        end:'300% 100%',
        //markers:true,
        toggleClass:'on'
    })


     // about scrub text 모션
    var aboutMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.container',
            start:'25% 0%',
            end:'100% 100%',
            //markers:true,
            scrub:true
        }
    })

    aboutMotion
    .to('.sc_about .circle_area',{xPercent:-100})
    
    // about 모션
    var abouttMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_about',
            start:'0% 0%',
            end:'100% 100%',
            //markers:true
        }
    })

    abouttMotion.to('.sc_about .text_box',{opacity:1, yPercent:0})

    // work h2 모션
    ScrollTrigger.create({
        trigger: '.sc_work',
        start:'0% 50%',
        end:'100% 100%',
        //markers:true,
        scrub:true,
        toggleClass:'on'
    })


    // about circle 모션
    var aboutCircleMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_contact',
            start:'0% 80%',
            end:'100% 100%',
            //markers:true,
            scrub:true,
        }
    })

    aboutCircleMotion
    .to('.sc_contact .bg_radius_wrap',{yPercent:-60})

    var aboutTexttMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_contact',
            start:'0% 50%',
            end:'100% 100%',
            //markers:true,
            scrub:true,
        }
    })

    aboutTexttMotion
    .addLabel('moveText')
    .to('.sc_contact .text1',{xPercent:0},'moveText')



    // work h2 모션
    ScrollTrigger.create({
        trigger: '.sc_contact',
        start:'0% 100%',
        end:'200% 100%',
        //markers:true,
        toggleClass:'on'
    })

    // bgwhite 일때 헤더 바꾸기
    var aboutBgMotion = gsap.timeline({
        scrollTrigger:{
            trigger: '.sc_contact',
            start:'0% 100%',
            end:'100% 100%',
            //markers:true,
            scrub:true
        }
    })

    aboutBgMotion
    .to('header .header_item span',0.5,{"color":"#000"})



    
})