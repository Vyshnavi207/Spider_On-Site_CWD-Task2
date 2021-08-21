var canvas = document.getElementById("draw");
var context =canvas.getContext("2d");
context.font= "50px Georgia";
var select="";
function view(){
    x = Math.random()*100;
    y = Math.random()*200;

    var words = "0123456789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    // var words = new array("0","1","2","3","4","5","6","7","8","9");
    
    for(i=0;i<6;i++){
        select = select +words[ Math.floor(Math.random()*words.length)];
    }
    context.strokeText(select,71,90);
    // console.log(select);
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+50,y+50); 
    context.stroke();
    
}
function check(){
    var enter=document.getElementById("enter");
    var confirm=enter.value;
    console.log(confirm);
    console.log(select);
    if(select==confirm){
        alert("Valid Captcha");
    }
    else {
        alert("Invalid Captcha");
    }
}
