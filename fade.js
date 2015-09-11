/*$(document).ready(function(){
    $('#blue').fadeOut(3000, function(){
        $('#green').fadeOut(3000, function(){
            $('#red').fadeOut(3000);
        });
    });
});*/

var myArray=["#red", "#green", "#blue"];
/*var arrayLooper = function(){
    for(var i=0; i<=myArray.length; i++){
        var arrayIndex = myArray[i];
        var previousIndex= arrayIndex-1;
        if(i>myArray.length-1){
            i=-1;
        }
        else{

            $(arrayIndex).fadeIn(3000);

        }
    }
}
arrayLooper();*/

var fadeInOut = function() {
    $('#red').delay(3000).fadeIn(3000, function(){
        $('#red').delay(3000).fadeOut(3000);
        $('#green').delay(3000).fadeIn(3000, function(){
            $('#green').delay(3000).fadeOut(3000);
            $('#blue').delay(3000).fadeIn(3000, function(){
                $('#blue').delay(3000).fadeOut(3000);
                fadeInOut();
            });
        });
    });

}

$(function(){
    setInterval(fadeInOut(), 3000);
});

