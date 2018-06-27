"use strict";

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];



coffees.reverse();


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<p>' + coffee.id + '</p>';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
// ^^^ tr changed to div and td changed to p tags


function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var matchFound = match.value;
    // get the value of the look4match
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        // if (coffee.roast === selectedRoast) { // add filtering for the value of the text input
        //     filteredCoffees.push(coffee);
        if (coffee.roast === selectedRoast && coffee.name === matchFound) { // add filtering for the value of the text input
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// ^^ here are the id numbers that we have to hide

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var match = document.querySelector('#look4match');
// add look4match id in the dom and store in a variable

tbody.innerHTML = renderCoffees(coffees);
// ^^^I've tried to change tbody to div or to the class coffees but it just breaks the table.'

// document.getElementById('look4match').addEventListener('input', updateCoffees());


submitButton.addEventListener('click', updateCoffees);








