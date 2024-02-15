// Load registered children from local storage on page load

document.addEventListener('DOMContentLoaded', function() {

    var savedChildren = JSON.parse(localStorage.getItem('registeredChildren')) || [];

    savedChildren.forEach(function(child) {

        addChildToTable(child.name, child.dob, child.contact, child.status);

    });

});

// Function to add a new child to the list and save to local storage

function addChild(name, dob, contact, status) {

    var child = { name: name, dob: dob, contact: contact, status: status };

    addChildToTable(name, dob, contact, status);

    

    // Save child to local storage

    var savedChildren = JSON.parse(localStorage.getItem('registeredChildren')) || [];

    savedChildren.push(child);

    localStorage.setItem('registeredChildren', JSON.stringify(savedChildren));

}

// Function to add a new child to the table

function addChildToTable(name, dob, contact, status) {

    var childrenList = document.getElementById('childrenList');

    var newRow = childrenList.insertRow();

    newRow.innerHTML = '<td>' + name + '</td>' +

                       '<td>' + dob + '</td>' +

                       '<td>' + contact