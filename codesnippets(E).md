   ``` 
Code for Cocktail Container 
    // var middle = $('#middle')


    function renderCocktails(obj){
      console.log(obj);
      let boxEl = $('<div>').addClass(" column is-half   ");
     let containerEl = $('<div>').addClass('middle-box box ');
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
    boxEl.append(containerEl)
    return boxEl;
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



fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
.then(response => response.json())
.then(data => {
    // console.log(data)
    // console.log(data.drinks[0].strDrink)
    renderCocktails(data);

} )
.catch(err => {console.error(err); return err});
console.log(resp);
obj.cocktail = resp.recipes;  // array

save to local storage
localStorage.setItem('userObj', JSON.stringify(obj));

Code for Crypt Container 

    Object 0 - Coin 1 of 10
    
    var pEl = $('<img>').attr("src", obj[0].image);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Crypto Coin 1: ${obj[0].name}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Market Cap Rank: ${obj[0].market_cap_rank}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Current Market Price: ${obj[0].current_price}`);
    containerEl.append(pEl)

    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[0].price_change_24h}`);
    containerEl.append(pEl)
    
    //Object 1 - Coin 2 of 10
    
    pEl = $('<img>').attr("src", obj[1].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 2: ${obj[1].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[1].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[1].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[1].price_change_24h}`);
    containerEl.append(pEl)

    //Object 2 - Coin 3 of 15
    
    pEl = $('<img>').attr("src", obj[2].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 3: ${obj[2].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[2].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[2].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[2].price_change_24h}`);
    containerEl.append(pEl)    

    //Object 3 - Coin 4 of 15
    
    pEl = $('<img>').attr("src", obj[3].image);
    containerEl.append(pEl)
        
    pEl = $('<p>').text(`Crypto Coin 4: ${obj[3].name}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Market Cap Rank: ${obj[3].market_cap_rank}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Current Market Price: ${obj[3].current_price}`);
    containerEl.append(pEl)
    
    pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[3].price_change_24h}`);
    containerEl.append(pEl)    

//Object 4 - Coin 5 of 15
    
pEl = $('<img>').attr("src", obj[4].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 5: ${obj[4].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[4].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[4].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[4].price_change_24h}`);
containerEl.append(pEl) 

//Object 5 - Coin 6 of 15
    
pEl = $('<img>').attr("src", obj[5].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 6: ${obj[5].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[5].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[5].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[5].price_change_24h}`);
containerEl.append(pEl)   

//Object 6 - Coin 7 of 15
    
pEl = $('<img>').attr("src", obj[6].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 7: ${obj[6].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[6].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[6].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[6].price_change_24h}`);
containerEl.append(pEl)  

//Object 7 - Coin 8 of 15
    
pEl = $('<img>').attr("src", obj[7].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 8: ${obj[7].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[7].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[7].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[7].price_change_24h}`);
containerEl.append(pEl)  

//Object 8 - Coin 9 of 15
    
pEl = $('<img>').attr("src", obj[8].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 9: ${obj[8].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[8].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[8].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[8].price_change_24h}`);
containerEl.append(pEl)  

//Object 9 - Coin 10 of 15
    
pEl = $('<img>').attr("src", obj[9].image);
containerEl.append(pEl)
    
pEl = $('<p>').text(`Crypto Coin 10: ${obj[9].name}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Market Cap Rank: ${obj[9].market_cap_rank}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Current Market Price: ${obj[9].current_price}`);
containerEl.append(pEl)

pEl = $('<p>').text(`Price Change in Last 24 hours: ${obj[9].price_change_24h}`);
containerEl.append(pEl)  

    return containerEl;
    // middle.append(containerEl)

fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderCrypto(data); 
        } )
        .catch(err => {console.error(err); return err});   
        ```

