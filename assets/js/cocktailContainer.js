var middle = $('middle')

function renderCocktails(obj){
    console.log(obj);
    let containerEl = $('<div>');
    //for (var i=0; i<obj.length; i++)
    containerEl.append("<p>" + obj[i] + "<p>")
    return containerEl;
    
}

var cocktailNameEl = document.createElement("div");
var cocktailImgEl = document.createElement("img");
var cocktailIngredientsEl = document.createElement("div");
var cocktailProportionsEl = document.createElement("div");

h1El.textContent = "Your Daily Cocktail";
cocktailNameEl.textContent = "";
cocktailImgEl.
cocktailIngredientsEl.textContent = "";
cocktailProportionsEl.textContent = "";

// Add text for list items
li1.textContent = "";
li2.textContent = "";
li3.textContent = "";
li4.textContent = "";

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);



await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(response => response.json())
.then(response => resp = response)
.catch(err => {console.error(err); return err});
console.log(resp);
// obj.cocktail = resp.recipes;  // array

renderCocktails(resp);
// save to local storage
// localStorage.setItem('userObj', JSON.stringify(obj));