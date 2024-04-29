document.getElementById("root").addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let address = formData.get("address");
    let pincode = formData.get("pincode");
    let gender = formData.get("gender");
    let selectfoods = formData.getAll("food");
    let state = formData.get("state");
    let country = formData.get("country");



    
    if (isNaN(pincode)) {
        alert("Pincode must be a number.");
        return;
    }

    if (!gender){
        alert("please enter your gender")
        return;
    }

    if(selectfoods.length < 2){
        alert("atlest select two foods")
        return;

    }


    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${selectfoods}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    let tableBody = document.getElementById("form-data-body");
    tableBody.appendChild(newRow);

    this.reset();
});

document.getElementById("clearButton").addEventListener('click',function(event){
    let tableBody = document.getElementById("form-data-body");
    tableBody.innerHTML = "";
})
