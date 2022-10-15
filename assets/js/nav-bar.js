// varaibles
var zodiac=[
     {
          name:"Aries ",
          date:"March 21–April 19"
     },
     {
          name:"Taurus ",
          date:"April 20–May 20"
     },
     {
          name:"Gemini ",
          date:"May 21–June 21"
     },
     {
          name:"Cancer ",
          date:"June 22–July 22"
     },
     {
          name:"Leo ",
          date:"July 23–August 22"
     },
     {
          name:"Virgo ",
          date:"August 23–September 22"
     },
     {
          name:"Libra ",
          date:"September 23–October 23"
     },
     {
          name:"Scorpius ",
          date:"October 24–November 21"
     },
     {
          name:"Sagittarius ",
          date:"November 22–December 21"
     },
     {
          name:"Capricornus ",
          date:"December 22–January 19"
     },
     {
          name:"Aquarius ",
          date:"January 20–February 18"
     },
     {
          name:"Pisces ",
          date:"February 19–March 20"
     }
]

var zodiacEl = document.getElementById("zodiac");
for(var i=0;i<12;i++){
     var option = document.createElement("option");
     option.text = zodiac[i].name+zodiac[i].date;
     zodiacEl.add(option);
}

// var userObj={};
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");
var preferencesForm = document.getElementById("preferences");
var editPreferencesForm = document.getElementById("edit-preferences");
//var newUserForm = document.getElementById("new-user");
var saveBtn = document.getElementById("save");
var cancelBtn = document.getElementById("cancel");



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
     editPreferencesForm.addEventListener( "click", function() {
          preferencesForm.style.display="block";
          cancelBtn.style.visibility = 'visible';
          document.getElementById("name").disabled=true;
          document.getElementById("zodiac").disabled=true;
          // document.getElementById("name").visibility=hidden;
          // document.getElementById("Zodiac").disabled=true;
          menu.classList.remove("showMenu");
     });
     // firstTime = false
     function renderWelcomeDialog(obj, firstTime){
         alert(firstTime);
          if (firstTime) {
              // preferencesForm.style.display="block";
               cancelBtn.style.visibility = 'hidden';
               var saveBtnHandler = function (obj, event ){
               var userName=document.getElementById("name").value;
               var pet=document.getElementById("pets").value;
               var cuisine=document.getElementById("cuisine").value;
               var zodiac=document.getElementById("zodiac").value;
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
               if ($('#crypto').is(":checked")) {
                    preferenceArray.push("crypto");
               }
           //alert(preferenceArray);
               userObj=[
                         {
                         username: userName,
                         pet: pet,
                         cuisine: cuisine,
                         zodiac: zodiac,
                         preferences: preferenceArray
                         }
               ]
                    
                   // console.log(obj);
                    
                    }
                    $(saveBtn).on('click', saveBtnHandler.bind(this, userObj));
                    firstTimeRender(userObj);
               }
               else{
                    alert("welcome");
               }
              
     }
     //firstTimeRender(userObj);
     // saveBtn.addEventListener( "click", function() {
     //      var userName=document.getElementById("name").value;
     //      var pet=document.getElementById("pets").value;
     //      var cuisine=document.getElementById("cuisine").value;
     //      var Zodiac=document.getElementById("zodiac").value;
     //      var preferenceArray=[];
     //      if ($('#horoscope').is(":checked")) {
     //           preferenceArray.push("horoscope");
     //       }
     //      if ($('#cocktail').is(":checked")) {
     //           preferenceArray.push("cocktail");
     //       }
     //      if ($('#weather').is(":checked")) {
     //           preferenceArray.push("weather");
     //       }
     //      if ($('#recipes').is(":checked")) {
     //           preferenceArray.push("recipes");
     //       }
     //      if ($('#pet').is(":checked")) {
     //           preferenceArray.push("pet");
     //       }
     //       //alert(preferenceArray);
     //       userObj=[
     //                {
     //                "username":userName,
     //                "pet":pet,
     //                "cuisine":cuisine,
     //                "Zodiac":Zodiac,
     //                "preferences":preferenceArray
     //                }
     //      ]
     //      localStorage.setItem('userObj',JSON.stringify(userObj));
     //      firstTimeRender(userObj);
     //      //alert(cuisine);
     //      // var Horoscope=document.getElementById("Horoscope");
     //      // alert(Horoscope);

     // });
     // preferencesForm.style.display="block";
     // menu.classList.remove("showMenu");
// var userObj = JSON.parse(localStorage.getItem('userObj'));
// if(userObj===null){
//      preferencesForm.style.display="block";
// }
     // newUserForm.addEventListener( "click", function() {
     //      preferencesForm.style.display="block";
     //      menu.classList.remove("showMenu");
     // });