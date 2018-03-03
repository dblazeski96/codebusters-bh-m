let newPrice = $('#newPrice').text();
let newResult = 0;
let totalNewPrice;
let newPlus = $('#newPlus');
let newMinus = $('#newMinus');
let newQuantity = $('#newQuantity');
let newCount = 0;
let ProductTitle = 0;

$(function () {
    localStorage.clear();

    $("nav, nav *").show("blind", { direction: "up" }, 800);

    $('#priceCard').css({
        'left': `${window.innerWidth - 384}px`
    })
    $(window).on('resize', function () {
        $('#priceCard').css({
            'left': `${window.innerWidth - 384}px`
        })
    })
    $('.a').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.a').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Jerusalem Tallit - Blue');
        $('.logoicon').attr('src', 'pictures/1.png');
        $('#newPrice').text('56.59');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This extraordinary tallit will bring dazzling color and heart-touching meaning to your prayers. In place of the traditional, staid stripes, this tallit boasts a vibrant rendition of Jerusalem's iconic buildings, complete with turreted walls, domed rooftops, and arched windows.`);
    })
    $('.b').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.b').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Woman of Valor: Yair Emanuel Raw Silk Embroidered Wall Hanging');
        $('.logoicon').attr('src', 'pictures/2.png');
        $('#newPrice').text('22.69');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This gorgeous silk tapestry features a colorful pomegranatel motif around its border, while the gold colored stitching in the center is the full text of King Solomon's poem, Eishet Chayil mi yimtza, verahok mipninim michra... ("Who can find a woman of valor? Her value is far beyond pearls.") (Proverbs 31:10)`);
    })
    $('.c').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.c').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Hand Painted Metal Star of David');
        $('.logoicon').attr('src', 'pictures/3.png');
        $('#newPrice').text('9.99');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This bright colorful decoration will be a welcome bit of joy and cheer in your home!  The radiant colors simply shine in any light!  The blue Star of David is filled with pomegranate branches.  Both are classic Jewish decorative motifs.`);
    })
    $('.d').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.d').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Golden Seven Branched Temple Menorah');
        $('.logoicon').attr('src', 'pictures/4.png');
        $('#newPrice').text('18.59');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`Featuring an ornate design on the top of each of the branches, this marvelous piece is reminicsent of the great gold menorah which stood in the Holy Temple, and is embellished with three decorative elements down its stem.`);
    })
    $('.e').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.e').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Silk Kippah');
        $('.logoicon').attr('src', 'pictures/5.jpg');
        $('#newPrice').text('9.99');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`Featuring an ornate design on the top of each of the branches, this marvelous piece is reminicsent of the great gold menorah which stood in the Holy Temple, and is embellished with three decorative elements down its stem.`);
    })
    $('.f').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.f').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Jewish Wedding Ring');
        $('.logoicon').attr('src', 'pictures/6.jpg');
        $('#newPrice').text('429.00');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This stunning piece of jewelry is a magnificent expression of ancient tradition, while still having a gorgeous contemporary look. The exquisite 14K yellow gold band is capped with a glossy blue enamel, which features 14K gold lettering of the traditional Hebrew Jewish wedding vow said under every chuppah, Harei At Mekudeshet Li - You are betrothed to me (with this ring).`);
    })
    $('.g').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.g').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Deluxe Torah Scroll Replica');
        $('.logoicon').attr('src', 'pictures/7.jpg');
        $('#newPrice').text('49.99');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This amazing Torah scroll replica has the look and feel of the real thing. It contains the entire Torah text in its original script printed on high quality paper. The scroll itself is held by wooden handles while adorned with metallic rimonim at the top, just like a real Torah scroll!  The beautiful outside cover is made from a traditional velvet fabric which is embroidered with a traditional design.`);
    })
    $('.h').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.h').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Ani Ledodi Bracelet');
        $('.logoicon').attr('src', 'pictures/8.jpg');
        $('#newPrice').text('114.00');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`A beautiful contemporary piece of jewelry with a kabbalistic flavor, this will be a treasured gift for a lifetime! The robust sterling silver centerpiece is overlaid by a golden plaque. It has been hand engraved with the Biblical Hebrew verse from King Solomon's wisdom, Ani Ledodi Vedodi Li ("I am my beloved's and my beloved is mine.") (Song of Songs 6:3). `);
    })
    $('.i').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.i').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Set of Four Shalom Coasters');
        $('.logoicon').attr('src', 'pictures/9.jpg');
        $('#newPrice').text('27.95');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This beautiful set of four matching coasters will add a beautiful touch to coffee time!  The ceramic plate is set in a wooden frame.  The design features a flying dove holding an olive branch above the words Shalom in English and Hebrew.`);
    })
    $('.j').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.j').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Shalom Bowl');
        $('.logoicon').attr('src', 'pictures/10.jpg');
        $('#newPrice').text('11.99');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`By displaying this bowl, you can show your longing for peace in the Holy land.  Surrounded by classic Armenian colorful floral patterns are the words Shalom (peace) in Hebrew and English.`);
    })

    $('.k').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.k').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Gold Lion of Judah and Western Wall Ring');
        $('.logoicon').attr('src', 'pictures/11.jpg');
        $('#newPrice').text('349.00');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();
        $('#productDescription').text(`This unique sterling silver ring is an exquisite work of art which features a beautiful 9K gold Lion of Judah symbol, while the band is adorned with an intricate Western Wall (Kotel) theme, the famous vestige of the Holy Temple of Jerusalem, and a primary symbol of Jewish dreams and aspirations.`);
    })
    $('.m').on('click', function () {
        $('.img-fluid').removeAttr('data-toggle', 'modal').removeAttr('data-target', '#exampleModalCenter');
        $('.m').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        $('#Product').text('Silk Tallit');
        $('.logoicon').attr('src', 'pictures/12.jpg');
        $('#newPrice').text('20.49');
        newPrice = $('#newPrice').text();
        totalNewPrice = $('#newPrice');
        ProductTitle = $('#Product').text();;
        $('#productDescription').text(`This fabulous raw silk tallit with an embroidered Etz Haim (Tree of Life) motif is destined to become a treasured heirloom in your home.The tallit is made from hand woven raw silk. The stripes, atarah (yoke) and corners are composed of sections of appliqued raw silk sewn onto the tallit, with embroidery forming the motif.`);
    })

    newPlus.on('click', function () {
        let tempnewPrice = parseFloat(newPrice);

        if (newQuantity.text() == "1") {
            tempnewPrice = tempnewPrice * 2;
            newCount = 1;
        }
        newQuantity.text(`${newCount += 1}`);
        totalNewPrice.text(`${(newResult += tempnewPrice).toFixed(2)}`);
        newMinus.removeAttr('disabled');
    })
    newMinus.on('click', function () {
        let tempnewPrice = parseFloat(newPrice);
        if (newCount != 0) {
            newQuantity.text(`${newCount--}`);;

            totalNewPrice.text(`${(newResult -= tempnewPrice).toFixed(2)}`);
        }
        if (newCount == 0) {
            totalNewPrice.text(`${tempnewPrice}`);
            newQuantity.text('1');
            newMinus.attr('disabled', 'true');
        }
    });


    let addToCard = $('#addToCart');


    addToCard.on('click', function () {



        $("#priceCard").show("slide", { direction: "right" }, 1000);

        $('#bringBackCart').css('display', 'none');


        let title = ProductTitle;
        let totalPrice = 0;
        let quantity;
        if (newCount == 0) {
            quantity = 1;
            tmpNewPrice = parseFloat(totalNewPrice.text());
        }
        else {
            quantity = newCount;
            tmpNewPrice = newResult;
        }
        let shopObj = {
            title: title,
            tmpNewPrice: tmpNewPrice,
            quantity: quantity
        }
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        itemsArray.push(shopObj);
        localStorage.setItem('items', JSON.stringify(itemsArray));

        let priceBox = $('.box2');
        priceBox.html("");
        let totalPriceForAll = 0;
        $.each(itemsArray, function (key, element) {

            // debugger;
            // let cardTytle=` <h6 class="card-subtitle mb-2 text-muted" ><span id="cardTytle">${element.title}</span></h6>`
            //     $('.box3').append(cardTytle);
            let priceItems = `
             <span class="price">${element.title} <br> Price: ${(element.tmpNewPrice).toFixed(2)}$  <br>Quantity:${(element.quantity).toFixed(0)}</span> <hr> `
            priceBox.append(priceItems);
            totalPriceForAll += parseFloat((element.tmpNewPrice).toFixed(2));
            //  $('.purchaseTitle').css("border-top", "1px solid white").css("border-bottom", "1px solid white");

        })
        $('.totalPrice').html(`${(totalPriceForAll.toFixed(2))}$`);

    })
    $("#addToCart").on("click", () => {

        newCount = 0;
        $('#newQuantity').text('1');

    });

    $('#proceedoCheckout').on('click', function () {
        localStorage.clear();
        $("#priceCard").hide("slide", { direction: "right" }, 1000);



    })

    $('.close').on('click', function () {
        newCount = 0;
        $('#newQuantity').text('1');
    })

    $("#closeButtonCart").on("click", () => {
        $("#priceCard").hide("slide", { direction: "right" }, 1000, () => {
            $('#bringBackCart').show("slide", { direction: "right" }, 1000);
        });
    });
    $('#bringBackCart').on('click', () => {
        $("#priceCard").show("slide", { direction: "right" }, 1000);

        $('#bringBackCart').hide("slide", { direction: "right" }, 1000);

    })
})



