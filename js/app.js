"use strict";

let form = document.getElementById('donationForm');
let donorName = document.getElementById('DonorName');
let amount = document.getElementById('amount');
let submitBtn = document.getElementById('submitBtn');

let table = document.getElementById('dataTable');
let headerRow = document.getElementById('headerRow');

let elementIndex =0;


function Donor(dName,damount){
    this.theName= dName;
    this.theAmount= damount;
    
    // dName: donorName.value,
    // damount: amount.value,

}


addEventListener('submit', handleSubmit);

let newDonor;
function handleSubmit(event){
    event.preventDefault();
    // save the values in variables 
    newDonor = new Donor(donorName.value, amount.value);
    // save to local storage
    localStorage.setItem(elementIndex,JSON.stringify(newDonor));
    elementIndex = elementIndex+1;
    recreate();
    
}

let dataRow;
let nameCell;
let AgeCell;
let amountCell;
let dName;
let dAmount;

Donor.prototype.tableDisplay= function(){
    
        dataRow=document.createElement('tr');
        table.appendChild(dataRow);
        nameCell = document.createElement('td');
        nameCell.textContent= this.theName;
        dataRow.appendChild(nameCell);
        AgeCell = document.createElement('td');
        AgeCell.textContent= randomAge();
        dataRow.appendChild(AgeCell);
        amountCell = document.createElement('td');
        amountCell.textContent= this.theAmount;
        dataRow.appendChild(amountCell);
   


}

function recreate(){    
    for(let i=0; i<elementIndex;i++){
    dName = JSON.parse(localStorage.getItem(i)).theName;
    dAmount = JSON.parse(localStorage.getItem(i)).theAmount;
    newDonor = new Donor(dName,dAmount);
    newDonor.tableDisplay(); 
    }   
}

// seperate function (prototype)
// display in the table

// function: Random
function randomAge(){
    return (Math.random().(30-18)+18);
}



