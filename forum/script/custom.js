(function ($) {

    $(document).ready(() => {

        $(".pagination").customPaginate({

            itemsToPaginate: ".threds",
            activeClass: "active-class"

        });

    });

}(jQuery));