$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        // console.log(top);
        var floor = $("#floor");
        var items = $("#content").find(".item");
        var currentId = "";
        items.each(function () {
            //jq中的offset方法：返回或设置元素相对于文档的位置

            var itemTop = $(this).offset().top;
            // console.log(itemTop);
            if (top > itemTop-220) {
                currentId = "#" + $(this).attr("id");
            } else {
                alert("error!!!");
            }
        });
        var classCurrent = floor.find(".current");
        if (currentId && classCurrent.attr("href") != currentId) {
            classCurrent.removeClass("current");
            floor.find("[href="+ currentId + "]").addClass("current");
        }
    });
});
