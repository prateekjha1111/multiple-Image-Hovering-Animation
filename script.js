var row = document.querySelectorAll(".row");

row.forEach(function(val){
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x+"px";
    });

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = "1";
    });

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = "0";
    });

});