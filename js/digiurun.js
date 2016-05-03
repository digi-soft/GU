$(function() {
    /* init */
    function Height() { 
        return $(window).innerHeight(); 
    }
    function Menu() {
        /*Menu Toggle*/
        $('#menuOpen').click(function() {
            $('#menu').fadeIn(200, function() {
                $('#menu ul').fadeIn(300);
            });
        });
        $('#menuClose').click(function() {
            $('#menu ul').fadeOut(300, function() {
                $('#menu').fadeOut(200);
            });
        });
    }
    function angle(e) {
        /* angle responsive kodu */
        var w = $(window).innerWidth();
        var anglediv = $(e);
        anglediv.addClass('angleSpecial');
        var classSplit = anglediv.attr('class').split(' ')[1];
        var query = '.'+classSplit+':after{ border-right:'+w/2+'px solid transparent;border-left:'+w/2+'px solid transparent; }'
        $('head style').html(query);
        /* head <style> içindeki after kodunu değiştirir. */  
    }
    function ahmetSpy(e, speed) {
        /* Alternatif ScrollSpy */ 
        $(e + ' :first').addClass('active');
        $(e).click(function() {

            var index = $(this).parent().index();
            $(e).removeClass('active');
            $(this).addClass('active');

            $('html,body').stop().animate({
                scrollTop: Height() * (index + 2)
            }, speed)

        })
        var scrollBack = 0;
        $(window).scroll(function() {
            var entirePage = document.body.offsetHeight;
            var scroll = $(window).scrollTop()
            var footerH = $('#footer').height();
            var footerO = $('#footer').offset().top;
            
            var xKonum = $('#x').css('top');
            
            var newScroll =  0;        
            //console.log(scroll +' '+ scrollBack)
            //console.log( scroll - 4295);
            if( scroll >= 4295){
                
               /* newScroll = scroll - 4295;
                //$('#x').animate({'top':5295+'px'},1000);
                 $('#x').css('top', parseInt(xKonum) + newScroll/5 +'px');
                // console.log(parseInt(xKonum) + newScroll/5);
            
                if(parseInt(xKonum) + newScroll/5 >= entirePage ){ 
                    $('#x').css('top', 4795 +'px');
                 }*/
             }               
                
            if (scroll >= Height() * 2 && scroll < $('#footer').offset().top - Height() * 0.7) {
                
                $('.scrollNav').stop().animate({ 'opacity': '1' }, 300);
                $('.scrollNav svg line').css('stroke-dashoffset', -scroll*2/13.50+'px');
                if (scroll >= $('#second').offset().top && scroll < $('#third').offset().top) {
                    $(e).removeClass('active');
                    $(e).eq(1).addClass('active');
                } else if (scroll >= $('#third').offset().top && scroll < $('#fourth').offset().top) {
                    $(e).removeClass('active');
                    $(e).eq(2).addClass('active');
                } else if (scroll >= $('#fourth').offset().top) {
                    $(e).removeClass('active');
                    $(e).eq(3).addClass('active');
                } else {
                    $(e).removeClass('active');
                    $(e).eq(0).addClass('active');
                }
            } else {
                $('.scrollNav').stop().animate({ 'opacity': '0' }, 300);
            }
        })
        $('a').click(function() {
            $('#menu ul').fadeOut(300, function() {
                $('#menu').fadeOut(200);
            });
        })
    }
    function effects() {
        
        /* Typed.js */
        $("#typed").typed({
            strings: [
                "BU ÜRÜN GÜVENLİ MİDİR?",
                "BU ÜRÜN ALINIR MI?",
                "BU ÜRÜN İYİ MİDİR?",
                "BU ÜRÜNÜ NEREDE TEST ETTİREBİLİRİM?"
            ],
            startDelay: 1000,
            typeSpeed: 50, 
            cursorChar: "|",
            backSpeed: -70,
            backSpeedDelay: 150,
            backDelay: 1000,
            loop: true,
            contentType: 'html'
        });
        /////////////////// typed.js */
        
        $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            
            /* Cogwhell rotate olayı */
            $('.cog').css({'transform':'rotate('+scroll/5+'deg)',
                           '-moz-transform':'rotate('+scroll/5+'deg)'})
            $('.rightcog .cog').css({'transform':'rotate(-'+scroll/5+'deg)',
                           '-moz-transform':'rotate(-'+scroll/5+'deg)'})
            /////////////////////// cogwhell rotate olayı */
            
            /* Speedometer rotate olayı */
            $('.str').css({'transform':'rotate('+scroll/5.5+'deg)',
                           '-moz-transform':'rotate('+scroll/5.5+'deg)'})
            /////////////////////// speedometer rotate olayı */
            
            /* SmallMenu açılma olayı */               
            if(scroll >= Height()){
                $('#smallMenu').stop().animate({'opacity':1},500);
            } 
            if(scroll <= Height()){
                $('#smallMenu').stop().animate({'opacity':0},300);
            }
            /////////////////////// smallMenu açılma olayı */
            
            /* Tokalasma olayı */
            if (scroll >= $('#fourth').offset().top - Height() / 2) {
                $('.arka').addClass('arkakalk');
                $('.sol').animate({ 'left': '26%' }, 2500);
                $('.sag').animate({ 'right': '28.5%' }, 2500);
            }
            /////////////////////// tokalasma olayı */
        })
        
        /* Small Menu animasyon olayı */ 
        $('#smallKimiz').click(function(){$('body,html').animate({scrollTop:Height()+1},500);})
        $('#smallNasil').click(function(){$('body,html').animate({scrollTop:Height()*2},500);})
        $('#smallIletisim').click(function(){$('body,html').animate({scrollTop:Height()*6},500);})
        $('.scrollNav svg').attr('height',$('#menuButtons').height()-2);
        ///////////////////////// Small Menu animasyon olayı */     
    
    }
    function videoPlayer(){
        var vid           = document.getElementById("guvenilirVideo");
        var pauseButton   = $('#videoPause');
        var refreshButton = $('#videoRefresh');
        var muteButton    = $('#videoMute');
      
        pauseButton.click(function(){
            if (vid.paused) {
                vid.play();
                pauseButton.innerHTML = "Pause";
                $('#tooglePlay').removeClass('fa-play');
                $('#tooglePlay').addClass('fa-pause');
            } else {
                vid.pause();
                pauseButton.innerHTML = "Paused";
                $('#tooglePlay').removeClass('fa-pause');
                $('#tooglePlay').addClass('fa-play');
            }
        })
        
        muteButton.click(function(){
            if(vid.muted){
               $('#toggleAudio').removeClass('fa-volume-off');
               $('#toggleAudio').addClass('fa-volume-up');
               $('#volumeRange').val('100');
               vid.muted = false;
              }else{
               $('#toggleAudio').removeClass('fa-volume-up');
               $('#toggleAudio').addClass('fa-volume-off');
               $('#volumeRange').val('0');
               vid.muted=true;
            }
        })
        
        refreshButton.click(function(){
            vid.load();
        })
    
        $('#volumeRange').on('change',function(){
            vid.muted=false;
            var volume = $(this).val()/100;
            vid.volume = volume/2;
            if(vid.volume == 0.0){
               $('#toggleAudio').removeClass('fa-volume-up');
               $('#toggleAudio').removeClass('fa-volume-down');
               $('#toggleAudio').addClass('fa-volume-off'); 
            }else if(vid.volume>0.4 && vid.volume <=0.7){
               $('#toggleAudio').removeClass('fa-volume-down');
               $('#toggleAudio').removeClass('fa-volume-off');
               $('#toggleAudio').addClass('fa-volume-up'); 
            } else{
               $('#toggleAudio').removeClass('fa-volume-up');
               $('#toggleAudio').removeClass('fa-volume-off');
               $('#toggleAudio').addClass('fa-volume-down');  
            }
        })
    }
    /* init */
    
    videoPlayer();
    $('.scrollSpy, #menu').height(Height());
    ahmetSpy('.scrollNav ul li i', 500);
    angle('.angle');
    Menu();
    $(window).on('resize', function() { 
        angle('.angle'); 
        $('.scrollSpy, #menu').height(Height());
    });
    effects();

});
