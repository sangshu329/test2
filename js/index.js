$(function(){
	var ww=$(window).width();
	var wh=$(window).height();

	/*sec01*/



	var $sec2uli=$("#sec2ul > li");
	$("#sec01 .sec1_ul li").hover(function() {
		var index=$(this).index();
		$(this).children().stop(true,false);
		$(this).children(".sec1_lidown").show();
		$("#sec01").find(".sec1_dl dd").hide();
		$("#sec01").find(".sec1_dl dd:eq("+index+")").show();
	}, function() {
		var index=$(this).index();
		$(this).children(".sec1_lidown").fadeOut();
		$("#sec01").find(".sec1_dl dd:eq("+index+")").hide();
		$("#sec01").find(".sec1_dl dd").hide();
	});
	var $sec2=$("#sec2");
	var count=$("#sec2ul>li").length;
	var sec2ww=count*462;
	$(".sec_maincon").width(sec2ww);
	$(".sec_maincon").height(wh);
	/*if(ww>sec2ww){
		$sec2.css('width', ww);
	}else{
		$sec2.css('width', count*462);
	}*/

	$("#sec2ul > li,#sec2btmul > li").hover(function() {
		$(this).children().stop(true,false);
		$(this).find(".sec2_li_bk").fadeIn();
		$(this).find(".sec2_li_bktext").fadeIn("600");
	}, function() {
		$(this).children().stop(true,false);
		$(this).find(".sec2_li_bk").hide();
		$(this).find(".sec2_li_bktext").hide();
	});
	$("#secpiclist").width(ww/2);
	$("#secpiclist").height(wh);
	$("#sectoplbk").width(ww/2).css('left', ww/2);
	$("#sectopcon").css('left', (ww/2+ww/4)).height(wh-200);
	$(".sec2lmaincon").css('margin-top',(wh-500)/2-80);

	$('#secpiclist,#sectoplbk,#sectopcon').mousewheel(function(event) {
	    return false;
	});
	$('#secpiclist,#sectoplbk,#sectopcon').hide();
	$("#sec2ul > li,#sec2btmul > li").click(function(event) {
		$('#secpiclist,#sectoplbk,#sectopcon').fadeIn();
		$(".sec2_ico").hide();
	});
	$("#sec2top_gbico").click(function(event) {
		$('#secpiclist,#sectoplbk,#sectopcon').fadeOut('400', function() {
			$(".sec2_ico").show();
		});
	});

	$(".mouse_pic").css('left', ww/2-50);
	$("#mouse_ico").mousewheel(function(event){
		$(this).fadeOut();
		return false;
	})
	TweenMax.to(".mouse_pic", 0.4, {
					opacity:0.5,
                    ease: Quad.easeOut,
                    repeat: -1,
                    yoyo: true
                });
	TweenMax.to("#sec1_ul li", 1.5, {
					opacity:0.7,
                    ease: Quad.easeOut,
                    repeat: -1,
                    yoyo: true
                });
	TweenMax.to("#sec1_ul .sec1_dl", 1, {
					bottom:"-100px",
                    ease: Quad.easeOut,
                    repeat: -1,
                    yoyo: true
                });
	set_div();
})
	function set_div(){
			$(window).resize(function(event) {
				var ww=$(window).width();
				var wh=$(window).height();
				$("#secpiclist").width(ww/2);
				$("#secpiclist").height(wh);
				$("#sectoplbk").width(ww/2).css('left', ww/2);
				$("#sectopcon").css('left', (ww/2+ww/4)).height(wh-200);
				$(".sec2lmaincon").css('margin-top',(wh-500)/2-80);
		});
	}