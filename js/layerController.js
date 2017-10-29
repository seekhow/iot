$('#ZNjiaotong').click(function(){
	layer.open({
	    type: 2,
	    title: '智能交通演示(点击小车开始轨迹回放)',
	    shadeClose: true,
	    shade: false,
	    maxmin: true, //开启最大化最小化按钮
	    area: ['900px', '600px'],
	    content: 'content/map.html'
	});
});

$('#ZNjiaju').click(function(){
	layer.open({
	  type: 2,
	  title: false,
	  area: ['630px', '360px'],
	  shade: 0.8,
	  closeBtn: 0,
	  shadeClose: true,
	  content: 'movie/ZNjiaju.mp4'
	});
});

$('#ZNcanting').click(function(){
	layer.open({
	  type: 2,
	  title: false,
	  area: ['630px', '360px'],
	  shade: 0.8,
	  closeBtn: 0,
	  shadeClose: true,
	  content: 'movie/ZNcanting.mp4'
	});
});

$('#ZNshangye').click(function(){
	layer.open({
	  type: 2,
	  title: false,
	  area: ['630px', '360px'],
	  shade: 0.8,
	  closeBtn: 0,
	  shadeClose: true,
	  content: 'movie/ZNshangye.mp4'
	});
});

$('#ZNnongye').click(function(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  area: ['460px','410px'],
	  skin: 'layui-layer-nobg', //没有背景色
	  shadeClose: true,
	  content: $('#ZNnongye')
	});
});
$('#ZNketang').click(function(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  area: ['460px','410px'],
	  skin: 'layui-layer-nobg', //没有背景色
	  shadeClose: true,
	  content: $('#ZNketang')
	});
});

$('#OpenUp').click(function(){
	var index = layer.open({
	  type: 2,
	  content: 'content/OpenUp.html',
	  area: ['320px', '195px'],
	  maxmin: true
	});
	layer.full(index);
});