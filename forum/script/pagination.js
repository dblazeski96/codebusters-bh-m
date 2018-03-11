(function($){
    
    $.fn.customPaginate = function(options) {

        let paginationContainer = this;
        let itemsToPaginate;
        

        let defaults = {
            itemsPerPage : 9
        };

        let settings = {};

        $.extend(settings, defaults, options);

        let itemsPerPage = settings.itemsPerPage;

        itemsToPaginate = $(settings.itemsToPaginate);
        let numberOfPaginationLinks = Math.ceil((itemsToPaginate.length / itemsPerPage));

        $("<ul></ul>").prependTo(paginationContainer);

        paginationContainer.prepend("<button id='previousButton'>Previous</button>");

        for (let index = 0; index < numberOfPaginationLinks; index++) {
            paginationContainer.find("ul").append("<li>" + (index + 1) + "</li>");
        }

        paginationContainer.append("<button id='nextButton'>Next</button>");

        itemsToPaginate.filter(":gt(" + (itemsPerPage - 1) + ")").hide();
        
        paginationContainer.find("ul li").first().addClass(settings.activeClass).end().on("click", function(){

            $(this).addClass(settings.activeClass);
            $(this).siblings().removeClass(settings.activeClass)

            let linkNumber = $(this).text();

            let itemsToHide = itemsToPaginate.filter(":lt(" + ((linkNumber - 1) * itemsPerPage) + ")");
            $.merge(itemsToHide, itemsToPaginate.filter(":gt(" + ((linkNumber * itemsPerPage) - 1) + ")"));
            itemsToHide.hide();

            let itemsToShow = itemsToPaginate.not(itemsToHide);
            itemsToShow.show();

        })
    };

}(jQuery));