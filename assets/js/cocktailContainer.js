// var middle = $('#middle')

function renderCocktails(obj){
    console.log(obj);
    let boxEl = $('<div>').addClass(" column is-half   ");
    let containerEl = $('<div>').addClass('middle-box box ');
    //for (var i=0; i<obj.length; i++)
    //containerEl.append("<p>" + obj[i] + "<p>")
    //return containerEl;
    var  pEl = $('<img>').attr("src", obj.drinks[0].strDrinkThumb).addClass("drink-image ");
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`${obj.drinks[0].strDrink}`).addClass("has-text-weight-bold");
    containerEl.append(pEl)

    for( var i=1; i<=15; i++){
        if (obj.drinks[0]["strIngredient" + i] === null)
        break;
        pEl = $('<p>').text(`${obj.drinks[0]["strIngredient" + i]} ${obj.drinks[0]["strMeasure" +i]}`);
        containerEl.append(pEl)
    }

    pEl = $('<p>').text(`Instructions: ${obj.drinks[0].strInstructions}`);
    containerEl.append(pEl)

    // middle.append(containerEl)
    boxEl.append(containerEl)
    return boxEl;
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