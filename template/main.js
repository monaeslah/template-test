
    let items = 1;
    let iScrollPos = 0;
    let itemId = 0;
    /////////////////////////////// slide showe 2 /////////////////////////////////
    function slidShow() {
        let item = "#item-" + itemId;
        // $(item).find(".text").find("h3").removeClass("fadeInUp");
        // $(item).find(".text").find("p").removeClass("fadeInUp");
        // $(item).find(".text").find("button").removeClass("fadeInUp");
        // $(item).find(".images").find("div").find("img").removeClass("fadeInLeft");
        $(item).animate({
            left: '-100vw'
        }, function () {
            $(item).css({
                "display": "none",
                "left": "0px"
            });
            $("#item-contorol-" + itemId).css("border-top", "none");
            itemId = ((itemId + 1) % 4);
            $("#item-" + itemId).css("display", "flex");
            $("#item-contorol-" + itemId).css("border-top", "#ffffff solid 3px")
    
        });
    }
    let slidShowTimer = setInterval(slidShow, 3000);
    $(".item-count").click(function () {
        let clicId = Number($(this).attr("id").split("-")[2]);
        clearInterval(slidShowTimer);
        $("#item-" + itemId).stop(true, true);
        let item = "#item-" + itemId;
        $(item).animate({
            left: '-100vw'
        }, function () {
            $(item).css({
                "display": "none",
                "left": "0px"
            });
            $("#item-contorol-" + itemId).css("border-top", "none");
            itemId = clicId;
            console.log(itemId);
            $("#item-" + itemId).css("display", "flex");
            $("#item-contorol-" + itemId).css("border-top", "#ffffff solid 3px");
            slidShowTimer = setInterval(slidShow, 3000);

        });
    })
    ////////////////////////////////////////////////////////////////