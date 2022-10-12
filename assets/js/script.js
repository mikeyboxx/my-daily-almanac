var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");


navBtn.addEventListener("click",function(){
     var menu = document.getElementById("menu");
    // (menu.children[1]).display=true;
    //alert("testing");
    //navBtn.classList.add("navbar-item","is-hoverable","navbar-dropdown","navbar-item");
    //navBtn.classList.add("navbar-item","is-hoverable");
    //console.log(menu.children[1].children[2]);
    if(menu.classList.contains("showMenu"))
    {
     menu.classList.remove("showMenu");
    }
    else {
      menu.classList.add("showMenu");
    }

    
});