//Task 1: Business Dashboard - DOM Element Selection and Creation
 
const dashboardById = document.getElementById('dashboard');  //pull the document by its ID
const dashboardByQuery = document.querySelector('#dashboard');  //pull the document by the query's first instance

const revMetricCard = document.createElement('div'); //create a new element to represent the metric card that would be stored in the div container

revMetricCard.setAttribute('class', 'metric-card'); //set the class of the new element as metric card
revMetricCard.setAttribute('id', 'revenueCard'); //set the id of the new element as revenue card

revMetricCard.innerHTML = '<h2>Revenue</h2> <p>$0</p>' //populate the element metrica card with a title revenue and a paragraph of $0

dashboardById.appendChild(revMetricCard); //add element metric card to the dashboard 


//Task 2: Dynamic Inventory Management - Adding and Removing Items

        //Profit Metric Card
const proMetricCard = document.createElement('div'); //create a new element to represent the metric card that would be stored in the div container

proMetricCard.setAttribute('class', 'metric-card'); //set the class of the new element as metric card
proMetricCard.setAttribute('id', 'profitCard'); //set the id of the new element as profit card

proMetricCard.innerHTML = '<h2>Profit</h2> <p>$0</p>' //populate the element metric card with a title profit and a paragraph of $0

dashboardById.appendChild(proMetricCard); //add element metric card to the dashboard

        //Expenses Metric Card
const expMetricCard = document.createElement('div'); //create a new element to represent the metric card that would be stored in the div container

expMetricCard.setAttribute('class', 'metric-card'); //set the class of the new element as metric card
expMetricCard.setAttribute('id', 'expensesCard'); //set the id of the new element as expenses card

expMetricCard.innerHTML = '<h2>Expenses</h2> <p>$0</p>' //populate the element metrica card with a title expenses and a paragraph of $0

dashboardById.appendChild(expMetricCard); //add element metric card to the dashboard

const nodeList = document.querySelectorAll('.metric-card'); //create an element that stores all queries associated with metric-card
const arrayOfNodes = Array.from(nodeList); //for the items in the nodelist element, convert to an array
arrayOfNodes.forEach( item => {  //for every item in the array of nodes, do the following
    item.textContent += " Updated"; //add the text "updated" to the printed html file
    item.style.color = "#062e03";}); //chance the text color to dark green in the printed html file










