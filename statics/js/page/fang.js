fml.define('page/fang', [], function(require, exports) {

    // DOM加载完成后进行swiperinit
    $(document).ready(function () {
        // 进行基本配置及回调
        var mySwiper = new Swiper ('.swiper-container', {
            hashnav: true,
            direction: 'vertical',
            speed: 1000,
            keyboardControl: true,
            mousewheelControl: true,
            mousewheelForceToAxis: true,
            paginationClickable :true,
            pagination : '.swiper-pagination',
            noSwipingClass : 'viewerBox',
            onSlideChangeStart: function(swiper){
                // mySwiper.disableMousewheelControl()
                console.log(swiper.previousIndex, swiper.activeIndex)
                var topString = (swiper.activeIndex - swiper.previousIndex > 0 ? '-' : '+')+'='+Math.abs((swiper.activeIndex - swiper.previousIndex)*120)+'px'
                $('.sky').animate({
                    'top': topString
                }, 1000, function(){})
            },
            onInit: function(swiper){
                console.log(swiper)
            }
        })
        // 获取总silde个数
        var sildeLength = mySwiper.slides.length
        // 开始播放
        $('.startBtn').on('click', function(){
            if($('.fullScreen').length){
                mySwiper.slideNext(true, 1000)
            }else{
                $(this).addClass('fullScreen')
                fullScreen()
                setTimeout(function(){
                    mySwiper.slideNext(true, 1000)
                },2000)
            }
        })
        // 跳转图片查看器
        $('.viewerBtn').on('click', function(){
            mySwiper.slideTo(8, 1000, true)
        })
    })

    // 查看全屏
    function fullScreen() {
        var el = document.documentElement,
            rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
            wscript;

        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            return;
        }

        if(typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if(wscript) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    // 图片查看器拖拽
    var dragX = 0
        ,dragY = 0
        ,imgPosX = 0
        ,imgPosY = 0
        isMouseDown = false
    $('.viewer').on('mousedown', function(event){
        isMouseDown = true
        dragX = event.pageX
        dragY = event.pageY
        return false
    })
    $('.viewer').on('mousemove', function(event){
        if(isMouseDown){
            console.log(parseInt($('.imgDemo').css('left')))
            imgPosX = event.pageX - dragX + parseInt($('.imgDemo').css('left'))
            imgPosY = event.pageY - dragY + parseInt($('.imgDemo').css('top'))
            dragX = event.pageX
            dragY = event.pageY
            $('.imgDemo').css({'left':imgPosX, 'top':imgPosY})
        }
    })
    $('.viewer').on('mouseup', function(event){
        isMouseDown = false
    })

    // 图片查看器缩放功能
    var rangeMouseDown = false
    $('.sclaeRange').on('mousedown', function(){
        console.log(111)
        rangeMouseDown = true
    }).on('mousemove', function(){
        console.log(111)
        if(rangeMouseDown){
            $('.imgDemo').css('transform', 'scale('+$(this).val()+')')
        }
    }).on('mouseup', function(){
        rangeMouseDown = false
    })
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/6./i)=="6."){
        alert("请使用高级浏览器");
        window.close()
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7."){
        alert("请使用高级浏览器");
        window.close()
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8."){
        alert("请使用高级浏览器");
        window.close()
    }
    else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9."){
        alert("请使用高级浏览器");
        window.close()
    }
});
