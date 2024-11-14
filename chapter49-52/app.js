
// <!-- 1. Create a signup form and display form data in your web 
// page on submission. -->


function data(event){
    event.preventDefault()
  var namee = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  


const resultDiv = document.getElementById('result');
resultDiv.innerHTML=`Name ${namee} Email: ${email} password: ${password}`

}



// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.

function show(event){
    event.preventDefault()
    var showw = document.getElementById('hide').style.display='block'
}
function hide(event){
    event.preventDefault()
    var hidee = document.getElementById('hide').style.display='none'
}








function stdDetail(event) {
    event.preventDefault();

    // Get input values from the form
    var stdName = document.getElementById('stdName').value;
    var age = document.getElementById('age').value;
    var stdClass = document.getElementById('class').value;

    // Get the table element
    var table = document.getElementById('detail');

    // Create a new row for the table
    var row = document.createElement('tr');

    // Create and append Name, Age, and Class columns
    var tdName = document.createElement('td');
    tdName.textContent = stdName;
    row.appendChild(tdName);

    var tdAge = document.createElement('td');
    tdAge.textContent = age;
    row.appendChild(tdAge);

    var tdClass = document.createElement('td');
    tdClass.textContent = stdClass;
    row.appendChild(tdClass);

    // Create and append Edit button
    var tdEdit = document.createElement('td');
    var editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    tdEdit.appendChild(editBtn);
    row.appendChild(tdEdit);

    // Create and append Delete button
    var tdDelete = document.createElement('td');
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    tdDelete.appendChild(deleteBtn);
    row.appendChild(tdDelete);

    // Append the row to the table
    table.appendChild(row);

    // Edit button functionality
    editBtn.onclick = function() {
        // Get the row data and set it to the form inputs
        document.getElementById('stdName').value = tdName.textContent;
        document.getElementById('age').value = tdAge.textContent;
        document.getElementById('class').value = tdClass.textContent;

        // Remove the row after editing to avoid duplication when submitting again
        table.deleteRow(row.rowIndex);
    };

    // Delete button functionality
    deleteBtn.onclick = function() {
        table.deleteRow(row.rowIndex);
    };
}
