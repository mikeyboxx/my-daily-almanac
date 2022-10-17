// varaibles
// zodiac details
var zodiacGroup=[
     {
          name:"Aries ",
          date:"March 21-April 19",
          index:0
     },
     {
          name:"Taurus ",
          date:"April 20-May 20",
          index:1
     },
     {
          name:"Gemini ",
          date:"May 21-June 21",
          index:2
     },
     {
          name:"Cancer ",
          date:"June 22-July 22",
          index:3
     },
     {
          name:"Leo ",
          date:"July 23-August 22",
          index:4
     },
     {
          name:"Virgo ",
          date:"August 23-September 22",
          index:5
     },
     {
          name:"Libra ",
          date:"September 23-October 23",
          index:6
     },
     {
          name:"Scorpio ",
          date:"October 24-November 21",
          index:7
     },
     {
          name:"Sagitarius ",
          date:"November 22-December 21",
          index:8
     },
     {
          name:"Capricorn ",
          date:"December 22-January 19",
          index:9
     },
     {
          name:"Aquarius ",
          date:"January 20-February 18",
          index:10
     },
     {
          name:"Pisces ",
          date:"February 19-March 20",
          index:11
     }
]


// to create zodiac dropdwn menu
var zodiacEl = document.getElementById("zodiac");
for(var i=0;i<12;i++){
     var option = document.createElement("option");
     option.text = zodiacGroup[i].name;
     //option.text = zodiac[i].name+zodiac[i].date;
     zodiacEl.add(option);
}

// getting elements from DOM

var preferencesForm = document.getElementById("preferences");
var editPreferencesForm = document.getElementById("edit-preferences");
var user=document.getElementById("name");
var cuisine=document.getElementById("cuisine");
var zodiacDropdown=document.getElementById("zodiac");
var horoscope=document.getElementById("horoscope");
var cocktail=document.getElementById("cocktail");
var weather=document.getElementById("weather");
var crypto=document.getElementById("crypto");
var saveBtn = document.getElementById("save");
var cancelBtn = document.getElementById("cancel");
var preferenceArray;

// function to handle welcome dialog and Edit Prefernces dialog box
function renderWelcomeDialog(obj, firstTime = false){
        var editPreferencesCancelHandler = function(event) {
        event.stopPropagation();
        preferencesForm.style.display="none";
};

        // function to handle edit preference form if the user already exists
        var editPreferencesFormHandler = function(obj, event) {
                event.stopPropagation();
                preferencesForm.style.display="block";
                cancelBtn.style.visibility = 'visible';
                let userName=obj.userName;
                user.value=userName;
                user.disabled=true;
                zodiacDropdown.disabled=true;
                let cuisineSel=obj.cuisine;

                if(cuisineSel==="italian"){
                        cuisine.selectedIndex = 0;
                }

                if(cuisineSel==="french"){
                        cuisine.selectedIndex = 1;
                }

                if(cuisineSel==="mediteranean"){
                        cuisine.selectedIndex = 2;
                }
                if(cuisineSel==="russian"){
                        cuisine.selectedIndex = 3;
                }
                if(cuisineSel==="spanish"){
                        cuisine.selectedIndex = 4;
                }
                if(cuisineSel==="lebanese"){
                        cuisine.selectedIndex = 5;
                }
                if(cuisineSel==="indian"){
                        cuisine.selectedIndex = 6;
                }
                if(cuisineSel==="japanese"){
                        cuisine.selectedIndex = 7;
                }
                if(cuisineSel==="chinese"){
                        cuisine.selectedIndex = 8;
                }
                if(cuisineSel==="peruvian"){
                        cuisine.selectedIndex = 9;
                }

                // adding contents to zodiac drop down menu
                let zodiacSel=obj.zodiacSign;
                for(var j=0;j<zodiacGroup.length;j++){
                        if(((zodiacGroup[j].name).toLowerCase()).trim()===zodiacSel){
                                let zodiacIndex=zodiacGroup[j].index;
                                zodiacDropdown.selectedIndex = zodiacIndex;
                        }
                }
                horoscope.checked=false;
                cocktail.checked=false;
                weather.checked=false;
                crypto.checked=false;

                // to check or uncheck checkboxes based on user's saved preferences
                for(var i=0;i<(obj.preferences.length);i++){
                        if(obj.preferences[i]==="crypto"){
                                crypto.checked=true;
                        }
                        if(obj.preferences[i]==="horoscope"){
                                horoscope.checked=true;
                        }
                        if(obj.preferences[i]==="cocktail"){
                                cocktail.checked=true;
                        }
                        if(obj.preferences[i]==="weather"){
                                weather.checked=true;
                        }
                }

        };

        // function to handle save button
        var saveBtnHandler = function (obj, event ){
                event.preventDefault();
                var req=document.getElementById("required");
                req.textContent="";
                var userName=document.getElementById("name").value;
                if(userName===""){
                        req.textContent="Name is required.";
                }
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
                if(preferenceArray.length===0){
                        let name=document.getElementById("required").textContent;
                        req.textContent=name+"Select at least one preferences";
                }
                let icon = '';
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
                if(userName!=="" && preferenceArray.length!==0){
                        preferencesForm.style.display="none";
                        getApiDataAndRender(obj);
                }
                else{
                        preferencesForm.style.display="block";
                }
        }


        $(saveBtn).on('click', saveBtnHandler.bind(this, obj));
        $(cancelBtn).on('click', editPreferencesCancelHandler);
        $(editPreferencesForm).on('click', editPreferencesFormHandler.bind(this, obj));
                
        // for the first time user
        if (firstTime){
                preferencesForm.style.display="block";
                cancelBtn.style.visibility = 'hidden';
        }
}
     