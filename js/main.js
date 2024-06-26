$(function () {
    function chk() {
        if ($(window).width() <= 1030) {
            $('main .about .icon span:nth-child(5)').removeClass('ind-5');
        }}

    chk();
    $(window).on('resize orientationchange', chk);

    $('#main').fullpage({
        //각 section 배경색깔
        sectionsColor: ['#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1', '#f1f1f1', '#b0d9e0'],

        // 내비게이션 메뉴와 섹션 연결
        anchors: ['home', 'about', 'video', 'graphic', 'process'],

        // 슬라이드 내에서 수평 루프
        loopHorizontal: true,

        // 너비가 1000이하가 되면 풀페이지 해제하기
        //responsiveWidth: 500,

        // 슬라이드 반응형 여부
        //responsiveSlides: false,

        // 첫 페이지에는 header 안나오게
        // 현재 보고 있는 화면을 카테고리에 강조
        afterLoad: function (ancorLink, index) {
            if($(window).width() <=1030){
                if (index == 1) {
                    $('header').animate({
                        'top': '-10%'
                    }, 500)

                    $('.mobile-nav').fadeOut()

                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(1)').find('a').addClass('on')

                    $('main .about .icon span:nth-child(1)').removeClass('res1-1')
                    $('main .about .icon span:nth-child(2)').removeClass('res1-2')
                    $('main .about .icon span:nth-child(3)').removeClass('res1-3')
                    $('main .about .icon span:nth-child(4)').removeClass('res1-4')
                    $('main .about .icon span:nth-child(5)').removeClass('res1-5')
                    $('main .about .icon span:nth-child(6)').removeClass('res1-6')
                    $('main .about .icon span:nth-child(7)').removeClass('res1-7')
                    $('main .about .icon span:nth-child(8)').removeClass('res1-8')
                }else if (index == 2) {
                    $('header').animate({
                        'top': '0'
                    }, 500)

                    $('.mobile-nav').hide()

                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(2)').find('a').addClass('on')

                    $('main .about .icon span:nth-child(1)').addClass('res1-1')
                    $('main .about .icon span:nth-child(2)').addClass('res1-2')
                    $('main .about .icon span:nth-child(3)').addClass('res1-3')
                    $('main .about .icon span:nth-child(4)').addClass('res1-4')
                    $('main .about .icon span:nth-child(5)').addClass('res1-5')
                    $('main .about .icon span:nth-child(6)').addClass('res1-6')
                    $('main .about .icon span:nth-child(7)').addClass('res1-7')
                    $('main .about .icon span:nth-child(8)').addClass('res1-8')
                }else if (index == 3){
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(3)').find('a').addClass('on')

                    $('main .about .icon span:nth-child(1)').removeClass('res1-1')
                    $('main .about .icon span:nth-child(2)').removeClass('res1-2')
                    $('main .about .icon span:nth-child(3)').removeClass('res1-3')
                    $('main .about .icon span:nth-child(4)').removeClass('res1-4')
                    $('main .about .icon span:nth-child(5)').removeClass('res1-5')
                    $('main .about .icon span:nth-child(6)').removeClass('res1-6')
                    $('main .about .icon span:nth-child(7)').removeClass('res1-7')
                    $('main .about .icon span:nth-child(8)').removeClass('res1-8')
                }else if (index == 4){
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(4)').find('a').addClass('on')
                }else if (index == 5){
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(5)').find('a').addClass('on')
                }
            }else{
                if (index == 1) {
                    $('header').animate({
                        'top': '-10%'
                    }, 500)
                    $('header ul li').first().find('#home').addClass('on')
    
                    $('main .about .icon span:nth-child(1)').removeClass('idx-1')
                    $('main .about .icon span:nth-child(2)').removeClass('idx-2')
                    $('main .about .icon span:nth-child(3)').removeClass('idx-3')
                    $('main .about .icon span:nth-child(4)').removeClass('idx-4')
                    $('main .about .icon span:nth-child(5)').removeClass('idx-5')
                    $('main .about .icon span:nth-child(6)').removeClass('idx-6')
                    $('main .about .icon span:nth-child(7)').removeClass('idx-7')
                    $('main .about .icon span:nth-child(8)').removeClass('idx-8')
    
                } else if (index == 2) {
                    $('header').animate({
                        'top': '0'
                    }, 500)
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(2)').find('a').addClass('on')
    
                    //span 펼치기
                    $('main .about .icon span:nth-child(1)').addClass('idx-1')
                    $('main .about .icon span:nth-child(2)').addClass('idx-2')
                    $('main .about .icon span:nth-child(3)').addClass('idx-3')
                    $('main .about .icon span:nth-child(4)').addClass('idx-4')
                    $('main .about .icon span:nth-child(5)').addClass('idx-5')
                    $('main .about .icon span:nth-child(6)').addClass('idx-6')
                    $('main .about .icon span:nth-child(7)').addClass('idx-7')
                    $('main .about .icon span:nth-child(8)').addClass('idx-8')
    
                    $('main .about .me img').mouseenter(function () {
                        $('main .about .me-hover').fadeIn()
                    })

                    $('main .about .me-hover').mouseenter(function(){
                        $('main .about .me-hover').show()
                    })
                    $('main .about .me-hover').mouseleave(function(){
                        $('main .about .me-hover').fadeOut()
                    })
                } else if (index == 3) {
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(3)').find('a').addClass('on')
    
                    $('main .about .icon span:nth-child(1)').removeClass('idx-1')
                    $('main .about .icon span:nth-child(2)').removeClass('idx-2')
                    $('main .about .icon span:nth-child(3)').removeClass('idx-3')
                    $('main .about .icon span:nth-child(4)').removeClass('idx-4')
                    $('main .about .icon span:nth-child(5)').removeClass('idx-5')
                    $('main .about .icon span:nth-child(6)').removeClass('idx-6')
                    $('main .about .icon span:nth-child(7)').removeClass('idx-7')
                    $('main .about .icon span:nth-child(8)').removeClass('idx-8')
    
                } else if (index == 4) {
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(4)').find('a').addClass('on')
    
                } else if (index == 5) {
                    $('header ul li a').removeClass('on')
                    $('header ul li:nth-child(5)').find('a').addClass('on')
                    $('main .contact .inner').delay(0).animate({
                        bottom: '-20%',
                        opacity: 0,
                    }, 500)
                    
                }
            }}
    })


    // 탭 메뉴
    $('main .video .video-left .title h2').hover(function () {
        $('main .video .video-right a > *').css({
            left: '100%',
            opacity: 0,
        })

        let idx = $(this).index()
        console.log(idx)

        $('main .video .video-right a > *').eq(idx).css({
            left: '0%',
            opacity: 1,
        })
    })

    // .mobile-nav-btn을 클릭했을 때 nav 나오게
    $('.mobile-nav-btn a').click(function(){
        $('.mobile-nav').toggleClass('on')
        $('.mobile-nav a').toggleClass('up')
    })

})