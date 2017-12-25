/*window.onload = function() {
    var oDiv = document.getElementById("tab");
    var oLi = oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
    var aCon = oDiv.getElementsByTagName("div")[1].getElementsByTagName("div");
    var timer = null;
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function() {
            show(this.index);
        }
    }
    function show(a) {
        index = a;
		
		
		
        var alpha = 0;
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
            aCon[j].className = "";
            aCon[j].style.display = "none";
            //aCon[j].style.filter = "alpha(opacity=0)";	
        }
		
	
	oLi[index].className = "cur";
        clearInterval(timer);
        timer = setInterval(function() {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aCon[index].style.opacity = alpha / 100;
            aCon[index].style.filter = "alpha(opacity=" + alpha + ")";
            alpha == 100 && clearInterval(timer);
        },
        5)
       
    }
}*/
$(function(){
	$(".tabList2 ul li").click(function(){
	$(this).siblings().removeClass("cur");
	$(this).addClass("cur");
	var index = $(this).index();
	var child =  $(this).parents(".tabList2").next().children();
	child.siblings().removeClass("cur");
	child.eq(index).addClass("cur");
});
})