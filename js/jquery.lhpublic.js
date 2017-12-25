$(function(){
	lhBanner();
	lhTab();
	lhRoll();
	lhTwobanner();
	lhHeader();
	lfBanner();
})

//banner 轮播
function lhBanner(){
	jQuery(".lh_banner").slide({prevCell:".lh_prev",nextCell:".lh_next",titCell:".lh_banner_hd ul",mainCell:".lh_banner_bd ul",effect:"left",autoPage:true,autoPlay:true,vis:1});
}
function lfBanner(){
jQuery(".lf_banner").slide({mainCell:".lf_banner_bd ul",effect:"left",autoPage:true,autoPlay:true,vis:5});
}
//tab切换
function lhTab(){
	jQuery(".lh_tab_change").slide({titCell:".lh_tab_hd ul li",mainCell:".lh_tab_bd", trigger:'click'});
}
//列表滚动
function lhRoll(){
	jQuery(".lh_roll").slide({prevCell:".lh_prev",nextCell:".lh_next",mainCell:".lh_tab_bd ul",effect:"top",autoPlay:true,autoPage:true,vis:1});
}
//两行 轮播
function lhTwobanner(){
	jQuery(".lh_twoBanner").slide({titCell:".lh_twoBanner_hd ul",mainCell:".lh_twoBanner_bd",effect:"left",autoPage:true,autoPlay:true});	
}
//头部效果
function lhHeader(){
	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if(sTop>50){
			$(".lh_header_bg").animate({height:'70px'},200);
			$(".lh_logo").animate({marginTop:'10px'},200);
			$(".lh_nav").animate({marginTop:'30px'},200);
			$(".lh_header_r").slideUp();
			$(".lh_secondNav_box").animate({top:'70px'},200);		
		}else{
			$(".lh_header_bg").animate({height:'95px'},200);
			$(".lh_logo").animate({marginTop:'20px'},200);
			$(".lh_nav").animate({marginTop:'40px'},200);
			$(".lh_secondNav_box").animate({top:'95px'},200);
			$(".lh_header_r").slideDown();	
		}
		if(sTop>500){
			$(".lh_header_bg").addClass("lh_header_on");	
		}else{
			$(".lh_header_bg").removeClass("lh_header_on");	
		}
	});
	
	
	$(".lh_nav_ul li").hover(function(){
		var index = $(this).index();
		$(this).parent().next().children().css('display','none');
		$(this).parent().next().children().eq(index).css('display','block');
		$(this).parent().next().slideDown(200);
	});
	$(".lh_nav").hover(function(){		
	},function(){
		$(".lh_secondNav_box").slideUp(200);
	});
	
}