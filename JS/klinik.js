var str;

$(document).ready(function() {
    

   $('.pointer').click(function(){
       // alert (str);
    
       // changeStyle(str);
        
    $('#menu ul ul').slideToggle();    
 })     
   
    
  
    
});


function changeStyle(id){   

str=id;
$('#menu a').removeClass('extra');
$('.arrow-down').removeClass('border');
$('#'+id).addClass('extra'); 

if (id=="tjeneste")
$('.arrow-down').addClass('border');

$('#menu ul li ul li a').removeClass('background');  

}


function changeBackground(id){   

$('#menu ul li ul li a').removeClass('background');
$('#'+id).addClass('background'); 

  
}





function changeColor(){    
document.getElementById("wrap").style.background = "#feedff";
document.getElementById("wrap").style.paddingBottom = "150px";
    
}





