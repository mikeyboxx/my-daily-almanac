// varaibles
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");

// eventlistner for hamburgur menu
navBtn.addEventListener("click",function(){
    if(menu.classList.contains("showMenu")){
          menu.classList.remove("showMenu");//remove the class showmenu from menu element
    }
    else {
          menu.classList.add("showMenu");//add the class showmenu to menu element
    }
});