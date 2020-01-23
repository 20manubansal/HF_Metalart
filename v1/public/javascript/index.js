var hist = document.querySelector("#hist");
var missions = document.querySelector("#mission");
var partners = document.querySelector("#partners");
var content = document.querySelector("#info");
var infoHeading = document.querySelector("#info-heading");
var info = document.querySelector("#info");
var infoPartner = document.querySelector("#info-partner");
var aboutText = document.querySelector("#about-text");
var aboutComponent = document.querySelector("#about-component");

hist.addEventListener("click", function () {
    aboutText.classList.remove("pl-2");
    aboutComponent.classList.remove("px-0");
    aboutComponent.innerHTML = "<div class=\"w-100\">"
        + "<div class=\"w-50 my-5\">"
        + "<span class=\"display-1\" id=\"info-heading\">History</span>"
        + "</div>"
        + "<span id=\"info-partner\">"
        + "</span>"
        + "<div id=\"info\">"
        + "</div>"
        + "</div>"
        + "</div>";
    var infoHeading = document.querySelector("#info-heading");
    var info = document.querySelector("#info");
    var infoPartner = document.querySelector("#info-partner");
    infoHeading.innerHTML = "History";
    info.innerHTML = "<p>"
        + "1868 the young engraver Fritz Huguenin and his brother Guillocheur Albert set up a small"
        + "watch-case"
        + "design workshop. It wasn’t long before they realised the value that embossing could add to"
        + "their"
        + "work. They therefore bought a spindle press, which they used to emboss their first medal in"
        + "1888."
        + "</p>"

        + "<p>"
        + "time, the Huguenin brothers specialised in the Niel method, which is used to give silver"
        + "watches"
        + "a"
        + "black finish. This method made them famous worldwide and as a result of their new-found"
        + "success,"
        + "they switched from manual production to industrial production in 1899, building the factory"
        + "in"
        + "Le"
        + "Locle that is still used today."
        + "</p>"

        + "<p>"
        + "At the same time, their three sons took over the company, expanding the range with new"
        + "products,"
        + "such"
        + "as marksmen decorations. The company was hit hard by the First World War and by the"
        + "financial"
        + "crisis"
        + "of the 1930s, which saw silver pocket watches replaced by stainless steel wristwatches. As a"
        + "result,"
        + "it became a limited company in 1934 and in the years that followed, Huguenin Frères et Cie"
        + "SA"
        + "enjoyed considerable growth in the fields of watch cases and medals."
        + "</p>"

        + "<p>"
        + "To mark its centenary year in 1968, the company was given a new name. Led by a member of the"
        + "third"
        + "generation of the Huguenin family, the revived Huguenin Médailleurs SA entered its second"
        + "century"
        + "with renewed confidence and verve."
        + "</p>"

        + "<p>"
    "In 1992, Huguenin began minting and selling the first coloured coins. After the merger with"
    "the"
    "Neuchâtel firm Kramer in 1999, Huguenin + Kramer joined forces with Faude in 2002, giving"
    "birth"
    "to"
    "the company Faude & Huguenin SA."
        + "</p>"
});
missions.addEventListener("click", function () {
    aboutText.classList.remove("pl-2");
    aboutComponent.classList.add("px-0");
    aboutComponent.innerHTML="<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide h-100 px-0\" data-ride=\"carousel\" interval=\"1000\">"
    +"<div class=\"carousel-inner h-100\">"
        +"<div class=\"carousel-item active h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">Faude & Huguenin SA is passionately devoted to the"
                +"expressive"
                +"interpretation of individual messages on metal. We offer our customers tailored solutions"
                +"with a wide range of products for various industries."
                +"To achieve our common vision and goals for the future, we all work towards the same goals,"
                +"guided by shared values and beliefs. These principles form the basis of Faude & Huguenin "
                +"SA’s mission statement."
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"We maintain open, active and honest dialogue with one another. We say what we do, and we do"
                +"what we say. Our actions are characterised by integrity, responsibility, trust, tolerance"
                +"and respect."
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"We want our customers and partners to benefit from working with us. We therefore offer high"
                +"quality, innovative products and solutions. We serve the requirements of our customers with"
                +"passion and enthusiasm."
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"We want to remain profitable in the long term and thereby ensure our freedom and"
                +"competitiveness. We strive constantly to improve."
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"We employ qualified, motivated and performance-oriented people with excellent social and"
                +"technical skills. We offer an attractive environment for outstanding achievements. We expect"
                +"our management staff to lead by example."
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"Responsibility and self-awareness shape our behaviour towards people and the environment"
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
        +"<div class=\"carousel-item h-100\">"
            +"<div class=\"display-5 top-text-mission w-75\">"
                +"We identify and take advantage of new opportunities at an early stage"
            +"</div>"
            +"<img src=\"https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg\" class=\"d-block w-100 h-100\">"
        +"</div>"
    +"</div>"
+"</div>"
$(".carousel").carousel();
console.log(aboutComponent);
});
partners.addEventListener("click", function () {
    aboutText.classList.add("pl-2");
    aboutComponent.classList.remove("px-0");
    aboutComponent.innerHTML = "<div class=\"w-100\">"
        + "<div class=\"w-50 my-5\">"
        + "<span class=\"display-1\" id=\"info-heading\">History</span>"
        + "</div>"
        + "<span id=\"info-partner\">"
        + "</span>"
        + "<div id=\"info\">"
        + "</div>"
        + "</div>"
        + "</div>";
    var infoHeading = document.querySelector("#info-heading");
    var info = document.querySelector("#info");
    var infoPartner = document.querySelector("#info-partner");
    infoHeading.innerHTML = "Our Partners";
    infoPartner.innerHTML = "We consider ourselves lucky to enjoy the support of partners who share our uncompromising approach to quality.";
    info.innerHTML = "<div class=\"row ml-0 mt-5\">"
        + "<div class=\"col-md-6 w-25 h-50 mb-3\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "<div class=\"col-md-6 w-25 h-50 mb-3\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "<div class=\"col-md-6 w-25 h-50 mb-3\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "<div class=\"col-md-6 w-25 h-50\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "<div class=\"col-md-6 w-25 h-50\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "<div class=\"col-md-6 w-25 h-50\"><img src=\"http://www.huguenin.ch/images/partner/goldhans.jpg\" class=\"partner-img\"></div>"
        + "</div>";
    console.log(info.innerHTML);
});
console.log(info);