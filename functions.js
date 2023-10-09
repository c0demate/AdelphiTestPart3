
// Adelphi API URL.
const api_url = 
      "https://corsproxy.io/?https%3A%2F%2Fapi.adelphi.edu%2Fv1%2Fdepartments%2F";
 
// Defining async function.
async function getapi(url) {
   
// Storing response.
const response = await fetch(url);
   
// Storing data in form of JSON.
var data = await response.json();
show(data);
}
// Calling that async function.
getapi(api_url);
 
// Function to define innerHTML for HTML table.
function show(data) {
    let tab = 
        `<tr>
          <th>Id</th>
          <th>Code</th>
          <th>Title</th>
          <th>Parent</th>
          <th>Phone</th>
          <th>Fax</th>
          <th>Email</th>
          <th>URL</th>
          <th>Place</th>
          <th>Room</th>
          <th>Suite</th>
          <th>Schedule</th>
          <th>Active</th>
         </tr>`;

   
    // For loop to access all rows.
    
    for (let d of data.results) {
    
    
    // Filtering results to modify displayed data in table (i.e. changing null values to '-' for user readability)
        
        if (d.id == null) {
        d.id = "-";
        }

        if (d.code == null) {
            d.code = "-";
        }

        if (d.title == null) {
            d.title = "-";
        }
    

        if (d.phone == null) {
            d.phone = "-";
        }

        if (d.fax == null) {
            d.fax = "-";
        }

        if (d.email == null) {
            d.email = "-";
            } 

        if (d.url == null) {
            d.url = "-";
        }

        if (d.place == null) {
            d.place = "-";
        }

        if (d.room == null) {
            d.room = "-";
            } 

        if (d.suite == null) {
            d.suite = "-";
        }

        if (d.schedule == null) {
            d.schedule = "-";
        }

        if (d.active == null) {
            d.active = "-";
            } 


    // Modified For Loop to only populate table with data if the data contains a "Parent" value of null.        
    if (d.parent == null) {
    tab += `<tr> 
    <td>${d.id} </td>
    <td>${d.code}</td>
    <td>${d.title}</td> 
    <td>${d.parent}</td>
    <td>${d.phone}</td>
    <td>${d.fax}</td>
    <td>${d.email}</td>
    <td>${d.url}</td>
    <td>${d.place}</td> 
    <td>${d.room} </td>
    <td>${d.suite}</td>
    <td>${d.schedule}</td>
    <td>${d.active}</td>
</tr>`;
}

    // Setting innerHTML as tab variable.
    document.getElementById("departmentList").innerHTML = tab;
}
}

// allows user to toggle mobile nav menu on and off in mobile view.
function myFunction() {
  var mobileNavItems = document.getElementById("mobileGroup1");
  var mobileNavMenuLogo = document.getElementById("barsCustom");
    if (mobileNavItems.style.display === "block") {
    mobileNavItems.style.display = "none";
    } else {
    mobileNavItems.style.display = "block";
    }

    if (mobileNavItems.style.display === "block") {
    mobileNavMenuLogo.style.color = "black";
    mobileNavMenuLogo.className = "fa fa-times";
    } else {
    mobileNavMenuLogo.style.color = "white";
    mobileNavMenuLogo.className = "fa fa-bars";
    }
}
