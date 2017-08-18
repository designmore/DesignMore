$(function(){
//	初始化
	$('.bg li').eq(0).show();
	$('.div0').show();
	$('.div1,.div2,.div3,.div4').hide();
	$('.nav .navA li').eq(0).siblings().css('background','url()');
	$('.nav .navBg li').eq(0).show();
	$('.nav .navA li').hover(function(){
			$(this).css({'color':'#31c193'});
		},function(){
			$('.nav .navA li').eq(0).css({'color':'#31c193'});
			$('.nav .navA li').eq(0).siblings().css({'color':'#365854'});
		})
	$('.myWeb').hide();
	$('.designM').hide();
	$('.designM_day').hide();
	$('.dejia').hide();
	$('.panzi').hide();
	$('.yuyue').hide();
	$('.tangyi').hide();
	$('.jl').hide();
	$('.zxm').hide();
	$('.banner01').hide();
	$('.banner02').hide();
	$('.shouhui').hide();
	$('.zhuti').hide();
	$('.chahua').hide();
	$('.xstb').hide();
//初始化	
//点击导航
	var num = 0;
	var timer01 = null;
	$('.nav .navA li').click(function(){
	//导航位置
		if($(this).index() == 0){
			var iHeight=$(window).height();
	//			$('.nav').css({'top':''});
			$('.nav').animate({'top': iHeight-100},70);

		}else{
			$('.nav').animate({'top':'40px'},70);
		}
	//导航位置		
	//切换页面		
		$('.content div').eq($(this).index()).fadeIn(400);
		$('.content div').eq($(this).index()).siblings().hide();
//切换页面
		if($(this).index() == 0){
//首页			
			$('.bg').css('background-color','#0e1c1b');
			$('.bg li').eq(0).siblings().fadeOut(100);
			$('.bg li').eq(0).fadeIn(400);
			$('.nav .navA li').css({'color':'#365854'});
			$('.nav .navA li').eq(0).css({'background':'url(images/home_led.png) no-repeat 0 10px','color':'#31c193'});
			$('.nav .navA li').eq(0).siblings().css('background','url()');
			$('.nav .navBg li').eq(0).siblings().hide();
			$('.nav .navBg li').eq(0).show();
			$('.nav .navA li').hover(function(){
				$(this).css({'color':'#31c193'});
			},function(){
				$('.nav .navA li').eq(0).css({'color':'#31c193'});
				$('.nav .navA li').eq(0).siblings().css({'color':'#365854'});
			})
//首页
		}else if($(this).index() == 1){
//关于			
			$('.bg').css('background-color','#131d11');
			$('.bg li').eq(1).siblings().fadeOut(100);
			$('.bg li').eq(1).fadeIn(400);
			$('.nav .navA li').css({'color':'#355934'});
			$('.nav .navA li').eq(1).css({'background':'url(images/about_led.png) no-repeat 0 14px','color':'#9b9f5e'});
			$('.nav .navA li').eq(1).siblings().css('background','url()');
			$('.nav .navBg li').eq(1).siblings().hide();
			$('.nav .navBg li').eq(1).show();
			$('.nav .navA li').hover(function(){
				$(this).css({'color':'#9b9f5e'});
			},function(){
				$('.nav .navA li').eq(1).css({'color':'#9b9f5e'});
				$('.nav .navA li').eq(1).siblings().css({'color':'#355934'});
			})
			$('.div1 ul').addClass('aboutCurrent');
			timer01 = setTimeout(function(){
				$('.div1 ul h5').css({'opacity':'1','transform':'rotateX(0)'});
				$('.div1 ul h6').css({'opacity':'1','transform':'scale(1)'});
			},800);
//关于
		}else if($(this).index() == 2){
//技能
			$('.bg').css('background-color','#1d1d11');
			$('.bg li').eq(2).siblings().fadeOut(100);
			$('.bg li').eq(2).fadeIn(400);
			$('.nav .navA li').css({'color':'#4c4c2c'});
			$('.nav .navA li').eq(2).css({'background':'url(images/skill_led.png) no-repeat 0 10px','color':'#b9943c'});
			$('.nav .navA li').eq(2).siblings().css('background','url()');
			$('.nav .navBg li').eq(2).siblings().hide();
			$('.nav .navBg li').eq(2).show();
			$('.nav .navA li').hover(function(){
				$(this).css({'color':'#b9943c'});
			},function(){
				$('.nav .navA li').eq(2).css({'color':'#b9943c'});
				$('.nav .navA li').eq(2).siblings().css({'color':'#4c4c2c'});
			})
			$('.div2 ul').addClass('skillCurrent');
			timer02 = setTimeout(function(){
				$('.div2 ul h3').css({'opacity':'1','transform':'rotateX(0)'});
				$('.div2 ul h4').css({'opacity':'1','transform':'scale(1)'});
			},400);
//技能
		}else if($(this).index() == 3){
//作品
			$('.bg').css('background-color','#241313');
			$('.bg li').eq(3).siblings().fadeOut(100);
			$('.bg li').eq(3).fadeIn(400);
			$('.nav .navA li').css({'color':'#713c3c'});
			$('.nav .navA li').eq(3).css({'background':'url(images/works_led.png) no-repeat 0 16px','color':'#b85780'});
			$('.nav .navA li').eq(3).siblings().css('background','url()');
			$('.nav .navBg li').eq(3).siblings().hide();
			$('.nav .navBg li').eq(3).show();
			$('.nav .navA li').hover(function(){
				$(this).css({'color':'#b85780'});
			},function(){
				$('.nav .navA li').eq(3).css({'color':'#b85780'});
				$('.nav .navA li').eq(3).siblings().css({'color':'#713c3c'});
			});
			$('.div3 ul').eq(0).show().siblings().hide();
			$('.div3 ol li').hover(function(){
				$(this).css('background-position-y','top').siblings().css('background-position-y','bottom');
				$('.div3 ul').eq($(this).index()).show().siblings().hide();
			});
			$('.div3 .workslist1').removeClass('workslist1Current');
	//德嘉
			$('.div3 .workslist1 li').eq(0).click(function(){
				$('.myWeb').show();
				$('.dejia').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=8;
						$('.dejia ul').css('left','-7650px');
					}
					m=u*(-850);
					$('.dejia ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>9){
						u=1;
						$('.dejia ul').css('left','0');
					}
					m=u*(-850);
					$('.dejia ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.dejia').hide();
					$('.dejia ul').css('left','0');
					
				});
			})
	//德嘉		
	//荻瑟猫
			$('.div3 .workslist1 li').eq(1).click(function(){
				$('.myWeb').show();
				$('.designM').show();
				function xiangzuo(){
					u--;
					if(u<0){
						u=4;
						$('.designM ul').css('left','-4250px');
					}
					m=u*(-850);
					$('.designM ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					u++;
					if(u>5){
						u=1;
						$('.designM ul').css('left','0');
					}
					m=u*(-850);
					$('.designM ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.designM').hide();
					$('.designM ul').css('left','0');
				});
			})
	//荻瑟猫
	//荻瑟猫2
			$('.div3 .workslist1 li').eq(2).click(function(){
				$('.myWeb').show();
				$('.designM_day').show();
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.designM_day').hide();
				});
			})
	//荻瑟猫2
	//盘子
			$('.div3 .workslist1 li').eq(3).click(function(){
				$('.myWeb').show();
				$('.panzi').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=6;
						$('.panzi ul').css('left','-5950px');
					}
					m=u*(-850);
					$('.panzi ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>7){
						u=1;
						$('.panzi ul').css('left','0');
					}
					m=u*(-850);
					$('.panzi ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.panzi').hide();
					$('.panzi ul').css('left','0');
				});
			})
	//盘子
	//愉悦
			$('.div3 .workslist2 li').eq(0).click(function(){
				$('.myWeb').show();
				$('.yuyue').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=8;
						$('.yuyue ul').css('left','-3240px');
					}
					m=u*(-360);
					$('.yuyue ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>9){
						u=1;
						$('.yuyue ul').css('left','0');
					}
					m=u*(-360);
					$('.yuyue ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.yuyue').hide();
					$('.yuyue ul').css('left','0');
				});
			})
	//愉悦
	//糖衣
			$('.div3 .workslist2 li').eq(1).click(function(){
				$('.myWeb').show();
				$('.tangyi').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=8;
						$('.tangyi ul').css('left','-3240px');
					}
					m=u*(-360);
					$('.tangyi ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>9){
						u=1;
						$('.tangyi ul').css('left','0');
					}
					m=u*(-360);
					$('.tangyi ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.tangyi').hide();
					$('.tangyi ul').css('left','0');
				});
			})
	//糖衣
	//简历
			$('.div3 .workslist3 li').eq(0).click(function(){
				$('.myWeb').show();
				$('.jl').show();
				$('.quit').click(function(){
					$('.jl').hide();
					$('.myWeb').hide();
				});
			})
	//简历
	//电商
	$('.div3 .workslist3 li').eq(1).click(function(){
				$('.myWeb').show();
				$('.zxm').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=1;
						$('.zxm ul').css('left','-850px');
					}
					m=u*(-850);
					$('.zxm ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>2){
						u=1;
						$('.zxm ul').css('left','0');
					}
					m=u*(-850);
					$('.zxm ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.zxm').hide();
					$('.zxm ul').css('left','0');
				});
			})
	//电商
	//banner01
	$('.div3 .workslist3 li').eq(2).click(function(){
				$('.myWeb').show();
				$('.banner01').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=5;
						$('.banner01 ul').css('left','-5100px');
					}
					m=u*(-850);
					$('.banner01 ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>6){
						u=1;
						$('.banner01 ul').css('left','0');
					}
					m=u*(-850);
					$('.banner01 ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.banner01').hide();
					$('.banner01 ul').css('left','0');
				});
			})
	//banner01
	//banner02
	$('.div3 .workslist3 li').eq(3).click(function(){
				$('.myWeb').show();
				$('.banner02').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=3;
						$('.banner02 ul').css('left','-3400px');
					}
					m=u*(-850);
					$('.banner02 ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>4){
						u=1;
						$('.banner02 ul').css('left','0');
					}
					m=u*(-850);
					$('.banner02 ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.banner02').hide();
					$('.banner02 ul').css('left','0');
				});
			})
	//banner02
	//手绘
	$('.div3 .workslist4 li').eq(0).click(function(){
				$('.myWeb').show();
				$('.shouhui').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=5;
						$('.shouhui ul').css('left','-4200px');
					}
					m=u*(-700);
					$('.shouhui ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>6){
						u=1;
						$('.shouhui ul').css('left','0');
					}
					m=u*(-700);
					$('.shouhui ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.shouhui').hide();
					$('.shouhui ul').css('left','0');
				});
			})
	//手绘
	//主题
	$('.div3 .workslist4 li').eq(1).click(function(){
				$('.myWeb').show();
				$('.zhuti').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=2;
						$('.zhuti ul').css('left','-1080px');
					}
					m=u*(-360);
					$('.zhuti ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>3){
						u=1;
						$('.zhuti ul').css('left','0');
					}
					m=u*(-360);
					$('.zhuti ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.zhuti').hide();
					$('.zhuti ul').css('left','0');
				});
			})
	//主题	
	//插画
	$('.div3 .workslist4 li').eq(2).click(function(){
				$('.myWeb').show();
				$('.chahua').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=3;
						$('.chahua ul').css('left','-3040px');
					}
					m=u*(-760);
					$('.chahua ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>4){
						u=1;
						$('.chahua ul').css('left','0');
					}
					m=u*(-760);
					$('.chahua ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.chahua').hide();
					$('.chahua ul').css('left','0');
				});
			})
	//插画
	//主题
	$('.div3 .workslist4 li').eq(3).click(function(){
				$('.myWeb').show();
				$('.xstb').show();
				function xiangzuo(){
					$('body,html').scrollTop(0);
					u--;
					if(u<0){
						u=4;
						$('.xstb ul').css('left','-2000px');
					}
					m=u*(-400);
					$('.xstb ul').stop().animate({'left':m},250);
					
				}
				var time01 = null;
				var i=0;
				var u=0;
				var m=0;
				function jiaodian(){
					$('body,html').scrollTop(0);
					u++;
					if(u>5){
						u=1;
						$('.xstb ul').css('left','0');
					}
					m=u*(-400);
					$('.xstb ul').stop().animate({'left':m},250);
					
				}
//				点击左右切换
				$('.right').click(jiaodian);
				$('.left').click(xiangzuo);
				$('.quit').click(function(){
					$('.myWeb').hide();
					$('.xstb').hide();
					$('.xstb ul').css('left','0');
				});
			})
	//主题
//作品
		}else{
//联系
			$('.bg').css('background-color','#1d111c');
			$('.bg li').eq(4).siblings().fadeOut(100);
			$('.bg li').eq(4).fadeIn(400);
			$('.nav .navA li').css({'color':'#583353'});
			$('.nav .navA li').eq(4).css({'background':'url(images/contact_led.png) no-repeat 0 26px','color':'#c93571'});
			$('.nav .navA li').eq(4).siblings().css('background','url()');
			$('.nav .navBg li').eq(4).siblings().hide();
			$('.nav .navBg li').eq(4).show();
			$('.nav .navA li').hover(function(){
				$(this).css({'color':'#c93571'});
			},function(){
				$('.nav .navA li').eq(4).css({'color':'#c93571'});
				$('.nav .navA li').eq(4).siblings().css({'color':'#583353'});
			})
//联系
		}
	});
//点击导航
	
});
