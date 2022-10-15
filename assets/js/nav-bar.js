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
          name:"Scorpio ",
          date:"October 24–November 21"
     },
     {
          name:"Sagitarius ",
          date:"November 22–December 21"
     },
     {
          name:"Capricorn ",
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
     option.text = zodiac[i].name;
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
var preferenceArray;


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
    //  editPreferencesForm.addEventListener( "click", function() {
    //       preferencesForm.style.display="block";
    //       cancelBtn.style.visibility = 'visible';
          
    //       document.getElementById("name").disabled=true;
    //       document.getElementById("zodiac").disabled=true;
    //       // document.getElementById("name").visibility=hidden;
    //       // document.getElementById("Zodiac").disabled=true;
    //       menu.classList.remove("showMenu");
    //  });
     // firstTime = false
     function renderWelcomeDialog(obj, firstTime = false){
        //obj.preferences = [];
        //console.log(obj, firstTime);
        var editPreferencesCancelHandler = function(event) {
            //console.log('cancel');
            event.preventDefault();
            preferencesForm.style.display="none";
        };

        var editPreferencesFormHandler = function(obj, event) {
            event.preventDefault();
            preferencesForm.style.display="block";
            cancelBtn.style.visibility = 'visible';
          //   var userObj = JSON.parse(localStorage.getItem('userObj'));
          //   console.log("from local storage"+userObj);
            //console.log(obj.preferences);
            // read obj.preferences and restore checkbox values


            document.getElementById("name").disabled=true;
            document.getElementById("zodiac").disabled=true;
            // document.getElementById("name").visibility=hidden;
            // document.getElementById("Zodiac").disabled=true;
            menu.classList.remove("showMenu");
        };
        
       var saveBtnHandler = function (obj, event ){
            event.preventDefault();
            var userName=document.getElementById("name").value;
            var cuisine=document.getElementById("cuisine").value;
            var zodiac=document.getElementById("zodiac").value;
            preferenceArray=[];
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
            //console.log(preferenceArray);
            let icon = '';
            //console.log(zodiac);
            zodiac = zodiac.toLowerCase();
            switch (zodiac) {
                case 'aries' :  icon = '♈️';
                        break;
                case 'taurus' : icon = '♉️';
                        break;
                case 'aquarius' :  icon = '♒️';
                        break;
                case 'capricorn' :  icon = '♑️';
                        break;
                case 'cancer' :  icon = '♋️';
                        break;
                case 'leo' :  icon = '♌️';
                        break;
                case 'virgo' :  icon = '♍️';
                        break;
                case 'libra' :  icon = '♎️';
                        break;
                case 'scorpio' :  icon = '♏️';
                        break;
                case 'sagitarius' :  icon = '♐️';
                        break;
                case 'pisces' :  icon = '♓️';
                        break;
                case 'gemini' :  icon = '♊️';
                        break;
            }

            obj.userName =  userName;
            obj.cuisine = cuisine;
            obj.zodiacSign =  zodiac;
            obj.zodiacIcon = icon;
            obj.preferences = preferenceArray;

            preferencesForm.style.display="none";
            // preferencesForm.style.display="block";
            // cancelBtn.style.visibility = 'hidden';
            getApiDataAndRender(obj);
        } 

        $(cancelBtn).on('click', editPreferencesCancelHandler);
        $(saveBtn).on('click', saveBtnHandler.bind(this, obj));
        $(editPreferencesForm).on('click', editPreferencesFormHandler.bind(this, obj));
          
        if (firstTime) {
                preferencesForm.style.display="block";
                cancelBtn.style.visibility = 'hidden';
                
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