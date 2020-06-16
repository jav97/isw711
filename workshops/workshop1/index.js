$(function () {
    let table = document.getElementById("myTable");
    generateTable(table, loadData());
});

function loadData() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.openbrewerydb.org/breweries?per_page=10', false);
    req.send();
    if (req.status == 200)
    return JSON.parse(req.responseText);
}
function generateTable(drawtable, data) {
    let arrtemp = [];
    for (let i = 0; i < data.length; i++) {
        arrtemp.push({ 'id': data[i].id, 'name': data[i].name, 'brewery_type': data[i].brewery_type, 'street': data[i].street, 'city': data[i].city, 'state': data[i].state});
    }
    arrtemp.forEach(element => {
        var buttonView = '<button id="btnEdit" class="btn btn-info"onclick="uploadInputs(' + element.id + ');" data-toggle="modal" data-target="#modalWorkshop">View</button>';
        var table = drawtable
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = element.id;
        cell2.innerHTML = element.name;
        cell3.innerHTML = element.brewery_type;
        cell4.innerHTML = element.street;
        cell5.innerHTML = element.city;
        cell6.innerHTML = element.state;
        cell7.innerHTML = buttonView;
    });
}

function uploadInputs(id){
    var req = new XMLHttpRequest();
    req.open('GET',`https://api.openbrewerydb.org/breweries/${id}`, false);
    req.send();
    if (req.status == 200)
     var breweries=JSON.parse(req.responseText);
     document.getElementById('name').value= breweries.name;
     document.getElementById('brewery_type').value= breweries.brewery_type;
     document.getElementById('street').value= breweries.street;
     document.getElementById('city').value= breweries.city;
     document.getElementById('state').value= breweries.state;
     document.getElementById('postal_code').value= breweries.postal_code;
     document.getElementById('country').value= breweries.country;
     document.getElementById('longitude').value= breweries.longitude;
     document.getElementById('latitude').value= breweries.latitude;
     document.getElementById('phone').value= breweries.phone;
     document.getElementById('website_url').value= breweries.website_url;
     var a = document.getElementById('website');
     a.setAttribute("href", breweries.website_url);
     document.getElementById('updated_at').value= breweries.updated_at;
}