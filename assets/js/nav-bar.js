// varaibles
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");
var preferencesForm = document.getElementById("preferences");
var EditpreferencesForm = document.getElementById("edit-preferences");
var NewUserForm = document.getElementById("new-user");
var saveBtn = document.getElementById("save");
//var userName=document.getElementById("name").value;
//var userDob=document.getElementById("dob").value;
// preferencesForm.style.display="none";

// eventlistner for hamburgur menu
navBtn.addEventListener("click",function(){
     
    if(menu.classList.contains("showMenu")){
          menu.classList.remove("showMenu");//remove the class showmenu from menu element
    }
    else {
          menu.classList.add("showMenu");//add the class showmenu to menu element
    }
});
  
     $( "#new-user" ).on( "click", function() {
          preferencesForm.style.display="block";
          menu.classList.remove("showMenu");
     });
     EditpreferencesForm.addEventListener( "click", function() {
          preferencesForm.style.display="block";
          document.getElementById("name").disabled=true;
          document.getElementById("Zodiac").disabled=true;
          menu.classList.remove("showMenu");
     });
     NewUserForm.addEventListener( "click", function() {
          preferencesForm.style.display="block";
          menu.classList.remove("showMenu");
     });
     saveBtn.addEventListener( "click", function() {
          var userName=document.getElementById("name").value;
          var userDob=document.getElementById("dob").value;
          //alert(userDob);
          // var Horoscope=document.getElementById("Horoscope");
          // alert(Horoscope);
          // var userName=document.getElementById("name").value;
          // var userName=document.getElementById("name").value;
          // var userName=document.getElementById("name").value;
     });