// made a for loop to populate data dynamically on top 10 crypto coins in a hardcoded table using bulma 
function renderCrypto(obj){
    var cryptoBodyElement = $('<tbody>').attr('id', 'crypto-body');
    let boxEl = $('<div>').addClass('column  is-half');
    let containerEl = $('<div>').addClass('middle-box box ');
    let tableEl = $('<table>').addClass('table');
    tableEl.attr('id', 'crypto-table');

    let trEl = $('<tr>');
    let thEl = $('<th>').text('Crypto Image');
    trEl.append(thEl);

    thEl = $('<th>').text('Crypto Coin');
    trEl.append(thEl);
    
    thEl = $('<th>').text('Current Market Price');
    trEl.append(thEl);

    thEl = $('<th>').text('Price Change in Last 24hrs');
    trEl.append(thEl);

    let theadEl = $('<thead>').append(trEl);
    tableEl.append(theadEl);

    for ( var i=0; i<10; i++){
        var tableRowElement = $("<tr>");
        
        var tableDataElement = $("<td>").append($('<img>').attr("src", obj[i].image));
        tableRowElement.append(tableDataElement);
       
        tableDataElement = $("<td>").text(obj[i].name);
        tableRowElement.append(tableDataElement);

        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].current_price));
        tableDataElement = $("<td>").text(n);
        tableRowElement.append(tableDataElement);
        
        var n = (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(obj[i].price_change_24h));
        tableDataElement = $("<td>").text(n);
       
        tableRowElement.append(tableDataElement);
        cryptoBodyElement.append(tableRowElement);
    }

    tableEl.append(cryptoBodyElement);
    containerEl.append(tableEl);  
    boxEl.append(containerEl);  

    return boxEl;
 }
    
    