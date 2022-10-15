function renderCocktails(obj){
    let boxEl = $('<div>').addClass(" column is-half   ");
    let containerEl = $('<div>').addClass('middle-box box api-card');
    var  pEl = $('<img>').attr("src", obj.drinks[0].strDrinkThumb).addClass("drink-image ");
    containerEl.append(pEl);
    
    pEl = $('<p>').text(`${obj.drinks[0].strDrink}`).addClass("has-text-weight-bold is-size-4");
    containerEl.append(pEl);

    for( var i=1; i<=15; i++){
        if (obj.drinks[0]["strIngredient" + i] === null)
            break;
        pEl = $('<p>').text(`${obj.drinks[0]["strIngredient" + i]} ${obj.drinks[0]["strMeasure" +i]}`);
        containerEl.append(pEl)
    }

    pEl = $('<p>').text(`${obj.drinks[0].strInstructions}`).addClass("has-text-weight-medium pt-1");
    containerEl.append(pEl)

    boxEl.append(containerEl);

    return boxEl;
}