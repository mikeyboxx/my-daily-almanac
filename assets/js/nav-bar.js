// varaibles
var zodiacGroup=[
     {
          name:"Aries ",
          date:"March 21–April 19",
          index:0
     },
     {
          name:"Taurus ",
          date:"April 20–May 20",
          index:1
     },
     {
          name:"Gemini ",
          date:"May 21–June 21",
          index:2
     },
     {
          name:"Cancer ",
          date:"June 22–July 22",
          index:3
     },
     {
          name:"Leo ",
          date:"July 23–August 22",
          index:4
     },
     {
          name:"Virgo ",
          date:"August 23–September 22",
          index:5
     },
     {
          name:"Libra ",
          date:"September 23–October 23",
          index:6
     },
     {
          name:"Scorpio ",
          date:"October 24–November 21",
          index:7
     },
     {
          name:"Sagitarius ",
          date:"November 22–December 21",
          index:8
     },
     {
          name:"Capricorn ",
          date:"December 22–January 19",
          index:9
     },
     {
          name:"Aquarius ",
          date:"January 20–February 18",
          index:10
     },
     {
          name:"Pisces ",
          date:"February 19–March 20",
          index:11
     }
]

var zodiacEl = document.getElementById("zodiac");
for(var i=0;i<12;i++){
     var option = document.createElement("option");
     option.text = zodiacGroup[i].name;
     //option.text = zodiac[i].name+zodiac[i].date;
     zodiacEl.add(option);
}

// var userObj={};
var navBtn=document.getElementById("btn");
var menu = document.getElementById("menu");
var preferencesForm = document.getElementById("preferences");
var editPreferencesForm = document.getElementById("edit-preferences");
//var newUserForm = document.getElementById("new-user");
var user=document.getElementById("name");
var cuisine=document.getElementById("cuisine");
var zodiacDropdown=document.getElementById("zodiac");
var horoscope=document.getElementById("horoscope");
var cocktail=document.getElementById("cocktail");
var weather=document.getElementById("weather");
var crypto=document.getElementById("crypto");
// var date=document.getElementById("date");
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
        //alert(firstTime);
        var editPreferencesCancelHandler = function(event) {
            event.preventDefault();
            preferencesForm.style.display="none";
        };

        var editPreferencesFormHandler = function(obj, event) {
                //console.dir(obj);
                event.preventDefault();
                menu.classList.remove("showMenu");

            preferencesForm.style.display="block";
            cancelBtn.style.visibility = 'visible';

            //var userObj = JSON.parse(localStorage.getItem('userObj'));
            let userName=obj.userName;
            user.value=userName;
            user.disabled=true;
            zodiacDropdown.disabled=true;
            let cuisineSel=obj.cuisine;
            //alert(cuisineSel);
            if(cuisineSel==="italian"){
                cuisine.selectedIndex = 0;
            }
            if(cuisineSel==="french"){
                cuisine.selectedIndex = 1;
            }
            if(cuisineSel==="mediteranean"){
                cuisine.selectedIndex = 2;
            }
            let zodiacSel=obj.zodiacSign;
            //alert(((zodiacGroup[0].name).toLowerCase()));
            for(var j=0;j<zodiacGroup.length;j++){
                //alert(((zodiacGroup[j].name).toLowerCase()).trim());
                if(((zodiacGroup[j].name).toLowerCase()).trim()===zodiacSel){
                        let zodiacIndex=zodiacGroup[j].index;
                        zodiacDropdown.selectedIndex = zodiacIndex;
                }
            }
            //zodiac.value=zodiac;
            console.dir(zodiacSel);
            //console.dir(userObj.preferences);
            for(var i=0;i<obj.preferences.length;i++){
                if(obj.preferences[i]==="horoscope"){
                        horoscope.checked=true;
                }
                if(obj.preferences[i]==="cocktail"){
                        cocktail.checked=true;
                }
                if(obj.preferences[i]==="weather"){
                        weather.checked=true;
                }
                if(obj.preferences[i]==="crypto"){
                        crypto.checked=true;
                }
            }

        //     let userName=userObj.userName;
        //     user.val(userName);
        //     let userName=userObj.userName;
        //     user.val(userName);
        //     let userName=userObj.userName;
        //     user.val(userName);

        //console.dir(userObj);
            //console.log(obj.preferences);
            // read obj.preferences and restore checkbox values



            // document.getElementById("name").visibility=hidden;
            // document.getElementById("Zodiac").disabled=true;

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

            getApiDataAndRender(obj);
            preferencesForm.style.display="none";
        }
        
        
        $(saveBtn).on('click', saveBtnHandler.bind(this, obj));
        $(cancelBtn).on('click', editPreferencesCancelHandler);
        $(editPreferencesForm).on('click', editPreferencesFormHandler.bind(this, obj));
        
        if (firstTime){
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