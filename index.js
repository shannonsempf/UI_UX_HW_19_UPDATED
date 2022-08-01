//JQUERY #1 - Toggle burger menu on and off



$('.Burger').on(click, function(){
    $('#modal-menu').toggleClass('active')
})









//JQUERY #2 - Looping Case Study Images 

// make each background image a variable

var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'URL(./images/Loop_Image_0.PNG)';
backgrounds[1] = 'URL(./images/Loop_Image_1.PNG)';
backgrounds[2] = 'URL(./images/Loop_Image_3.PNG)';

//make the images loop when it gets to the end of teh sequence 

function changeBackground() {
    currentBackground++;
    if(currentBackground > 2) currentBackground = 0;

    $('.Case_Study_Image_1').fadeOut(100,function() {
        $('.Case_Study_Image_1').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('Case_Study_Image_1').fadeIn(100);
    });

//make each image change after 5 seconds

    setTimeout(changeBackground, 5000);
}

//make the sequence begin when the page is loaded

$(document).ready(function() {
    setTimeout(changeBackground, 5000);        
});

