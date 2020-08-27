var annualSelected = false;
var monthlySelected = false;
var dailySelected = false;
​
function selectAnnualMembership() {
    if (!dailySelected && !monthlySelected) {
        annualSelected = !annualSelected;    
    }
    
    if (annualSelected && !monthlySelected && !dailySelected) {
        document.getElementById('AnnualMembership').style.backgroundColor = '#B5D3E7';
    } else {
        document.getElementById('AnnualMembership').style.backgroundColor = 'white';
    }
}
​
function selectMonthlyMembership() {
    if (!annualSelected && !dailySelected) {
        monthlySelected = !monthlySelected;
    }
​
    if (monthlySelected && !annualSelected && !dailySelected) {
        document.getElementById('MonthlyMembership').style.backgroundColor = '#B5D3E7';
    } else {
        document.getElementById('MonthlyMembership').style.backgroundColor = 'white';
    }
    
}
​
function selectPayAsYouGoMembership() {
    if (!annualSelected && !monthlySelected) {
        dailySelected = !dailySelected;
    }
    
    if (dailySelected && !annualSelected && !monthlySelected) {
        document.getElementById('DailyMembership').style.backgroundColor = '#B5D3E7';
    } else {
        document.getElementById('DailyMembership').style.backgroundColor = 'white';
    }   
