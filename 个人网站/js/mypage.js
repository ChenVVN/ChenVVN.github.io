$(document).ready(function() {
	$('#fullpage').fullpage({
		// 显示导航圆点
		navigation: true,
		// 给每一屏设置对应的锚点
		anchors:['page1', 'page2','page3','page4'],
		//绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
		menu:'#menu', 
		continuousVertical: true,
		afterLoad : function ( origin ,  destination ,  direction ) { 
			var  loadedSection  =  this ;

			//使用索引
			if ( origin . index  ==  0 ) { 
				$('.section2 .pho').addClass('animated bounceInLeft yanshi1');
				$('.section2 .data1').addClass('animated rotateInDownLeft yanshi2');
				$('.section2 .data2').addClass('animated rotateInDownRight yanshi2');
				$('.section2 .data3').addClass('animated rotateInUpLeft yanshi3');
				$('.section2 .data4').addClass('animated rotateInUpRight yanshi3');
			}
			if ( origin . index  ==  1 ) { 
				$('.section3 .skill1').addClass('animated bounceInDown yanshi1');
				$('.section3 .skill2').addClass('animated bounceInUp yanshi2');
				$('.section3 .skill3').addClass('animated bounceInDown yanshi3');
			}
		} 
	});
})