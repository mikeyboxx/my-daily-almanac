// varaibles
var zodiac=[
     {
          "name":"Aries (Ram)",
          "date":"March 21–April 19"
     },
     {
          "name":"Taurus (Bull)",
          "date":"April 20–May 20"
     },
     {
          "name":"Gemini (Twins)",
          "date":"May 21–June 21"
     },
     {
          "name":"Cancer (Crab)",
          "date":"June 22–July 22"
     },
     {
          "name":"Leo (Lion)",
          "date":"July 23–August 22"
     },
     {
          "name":"Virgo (Virgin)",
          "date":"August 23–September 22"
     },
     {
          "name":"Libra (Balance)",
          "date":"September 23–October 23"
     },
     {
          "name":"Scorpius (Scorpion)",
          "date":"October 24–November 21"
     },
     {
          "name":"Sagittarius (Archer)",
          "date":"November 22–December 21"
     },
     {
          "name":"Capricornus (Goat)",
          "date":"December 22–January 19"
     },
     {
          "name":"Aquarius (Water Bearer)",
          "date":"January 20–February 18"
     },
     {
          "name":"Pisces (Fish)",
          "date":"February 19–March 20"
     }
]
//document.getElementById('zodiac').value = "10";
//$("#zodiac").val("14");
var zodiacEl = document.getElementById("zodiac");
for(var i=0;i<12;i++){
     var option = document.createElement("option");
     option.text = zodiac[i].name+zodiac[i].date;
     zodiacEl.add(option);
}

//alert(zodiac[0].name+zodiac[0].date);
//document.getElementById("zodiac").o=zodiac[0].name+zodiac[0].date;
// :pisces: : 
var userObj={};
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");
var preferencesForm = document.getElementById("preferences");
var editpreferencesForm = document.getElementById("edit-preferences");
var newUserForm = document.getElementById("new-user");
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
  
     // $( "#new-user" ).on( "click", function() {
     //      preferencesForm.style.display="block";
     //      menu.classList.remove("showMenu");
     // });
     editpreferencesForm.addEventListener( "click", function() {
          preferencesForm.style.display="block";
          document.getElementById("name").disabled=true;
          document.getElementById("Zodiac").disabled=true;
          menu.classList.remove("showMenu");
     });
     newUserForm.addEventListener( "click", function() {
          preferencesForm.style.display="block";
          menu.classList.remove("showMenu");
     });
     saveBtn.addEventListener( "click", function() {
          // var userObj:{

          // }
          var userName=document.getElementById("name").value;
          var pet=document.getElementById("pets").value;
          var cuisine=document.getElementById("cuisine").value;
          var Zodiac=document.getElementById("Zodiac").value;
          var preferenceArray=[];
          if ($('#horoscope').is(":checked")) {
               preferenceArray.push("horoscope");
           }
          if ($('#cocktail').is(":checked")) {
               preferenceArray.push("cocktail");
           }
          if ($('#weather').is(":checked")) {
               preferenceArray.push("weather");
           }
          if ($('#recipes').is(":checked")) {
               preferenceArray.push("recipes");
           }
          if ($('#pet').is(":checked")) {
               preferenceArray.push("pet");
           }
           alert(preferenceArray);
           userObj=[{
               "username":userName,
               "pet":pet,
               "cuisine":cuisine,
               "Zodiac":Zodiac,
               "preferences":preferenceArray
          }
          ]
          localStorage.setItem('userObj',JSON.stringify(userObj));
          //alert(cuisine);
          // var Horoscope=document.getElementById("Horoscope");
          // alert(Horoscope);

     });
     // preferencesForm.style.display="block";
     // menu.classList.remove("showMenu");