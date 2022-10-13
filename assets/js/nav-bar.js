// varaibles
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");
var preferencesForm = document.getElementById("preferences");
preferencesForm.style.display="none";

// eventlistner for hamburgur menu
navBtn.addEventListener("click",function(){
    if(menu.classList.contains("showMenu")){
          menu.classList.remove("showMenu");//remove the class showmenu from menu element
    }
    else {
          menu.classList.add("showMenu");//add the class showmenu to menu element
    }
});


$( function() {
     $( "#dialog" ).dialog({
       autoOpen: false,
       show: {
         effect: "blind",
         duration: 1000
       },
       hide: {
         effect: "explode",
         duration: 1000
       }
     });
  
     $( ".navbar-item" ).on( "click", function() {
       $( "#dialog" ).dialog( "open" );
          //preferencesForm.style.display="block";
          menu.classList.remove("showMenu");
     });
   } );

