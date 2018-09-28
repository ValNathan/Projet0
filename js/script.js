function display() {
    var x = document.getElementById("elt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(function(){
    $('nav a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");
        if(the_id === '#'){
            return;
        }
        var posCible = $(the_id).offset().top - 65;
        $('html, body').animate({
            scrollTop: posCible
        }, 'slow');
        return false;
    });
})