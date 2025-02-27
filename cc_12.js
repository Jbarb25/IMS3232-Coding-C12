//Task 1: Business Dashboard - DOM Element Selection and Creation
 
const dashboardById = document.getElementById('dashboard');  //pull the document by its ID
const dashboardByQuery = document.querySelector('#dashboard');  //pull the document by the query's first instance

const revMetricCard = document.createElement('div'); //create a new element to represent the metric card that would be stored in the div container

revMetricCard.setAttribute('class', 'metric-card'); //set the class of the new element as metric card
revMetricCard.setAttribute('id', 'revenueCard'); //set the id of the new element as revenue card

revMetricCard.innerHTML = '<h2>Revenue</h2><p>$0</p>' //populate the element metrica card with a title revenue and a paragraph of $0

dashboardById.appendChild(revMetricCard) //add element metric card to the dashboard 











