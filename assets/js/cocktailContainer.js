// var middle = $('#middle')

function renderCocktails(obj){
    console.log(obj);
    let containerEl = $('<div>');
    //for (var i=0; i<obj.length; i++)
    //containerEl.append("<p>" + obj[i] + "<p>")
    //return containerEl;
    var  pEl = $('<img>').attr("src", obj.drinks[0].strDrinkThumb);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Drink Name: ${obj.drinks[0].strDrink}`);
    containerEl.append(pEl)

    for( var i=1; i<=15; i++){
        if (obj.drinks[0]["strIngredient" + i] === null)
        break;
        pEl = $('<p>').text(`Drink Ingredient: ${obj.drinks[0]["strIngredient" + i]} ${obj.drinks[0]["strMeasure" +i]}`);
        containerEl.append(pEl)
    }

    pEl = $('<p>').text(`Drink Instructions: ${obj.drinks[0].strInstructions}`);
    containerEl.append(pEl)

    // middle.append(containerEl)
    return containerEl;
}

// var cocktailNameEl = document.createElement("div");
// var cocktailImgEl = document.createElement("img");
// var cocktailIngredientsEl = document.createElement("div");
// var cocktailProportionsEl = document.createElement("div");

// h1El.textContent = "Your Daily Cocktail";
// cocktailNameEl.textContent = "";
// cocktailImgEl.
// cocktailIngredientsEl.textContent = "";
// cocktailProportionsEl.textContent = "";

// // Add text for list items
// li1.textContent = "";
// li2.textContent = "";
// li3.textContent = "";
// li4.textContent = "";

// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);



// fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
// .then(response => response.json())
// .then(data => {
//     // console.log(data)
//     // console.log(data.drinks[0].strDrink)
//     renderCocktails(data);

// } )
// .catch(err => {console.error(err); return err});
// console.log(resp);
// obj.cocktail = resp.recipes;  // array

// save to local storage
// localStorage.setItem('userObj', JSON.stringify(obj));