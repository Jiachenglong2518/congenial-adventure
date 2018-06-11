   
    var src='';
    var pos = {};
    var isclickMenu = false;
    $('.menuImgBox img').click(function(){
        isclickMenu = true
        src = $(this).attr('src')
        $('.mouseImg').attr('src',src)
        var imgurl = 'url(' + src + ')'
        $('.mouseImg').show()
    })

    //点击主内容区
    $('.imgBox li').click(function(){
        if(src){
            $(this).children('img').attr('src',src)
        }
    })
    // 滑过时隐藏遮罩层
    $('.imgBox li').hover(
        function() {
            $(this).children('.mark').hide()
        },function(){
            $(this).children('.mark').show()
    });
    // 获取挂光标位置,选中的图片跟随鼠标移动
    $('body').mousemove(function(e) {  
        pos.x = e.originalEvent.x ||e.originalEvent.layerX || 0;      
        pos.y = e.originalEvent.y ||e.originalEvent.layerY || 0;
        h =  document.body.clientHeight
        w = document.body.clientWidth
        $('.mouseImg').css({
            'left':pos.x + 10 +'px',
            'top':pos.y - 50 + 'px'
        })
    })
    $('.container').mouseenter(function(){
        $('.mouseImg').show()
    })
    $('.container').mouseleave(function(){
        $('.mouseImg').hide()
    })

   
