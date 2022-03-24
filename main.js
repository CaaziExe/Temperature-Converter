const tempInput1 = document.querySelector("#temp-input-1");
const tempInput2 = document.querySelector("#temp-input-2");

const selectOption1 = document.querySelector("#temp-option-1");
const selectOption2 = document.querySelector("#temp-option-2");

function inputWhenClick(theInput){
    theInput.onclick = function(){
        theInput.select();
    }
}

inputWhenClick(tempInput1);
inputWhenClick(tempInput2);

function convertValue(temp1, temp2, value){
    switch(temp1){
        case "f":
            value = (value-32) * 5 / 9;
            break;
        case "k":
            value = value - 273.15;
            break;
        case "ra":
            value = (value-491.67) * 5 / 9;
            break;
        case "re":
            value = value * 5 / 4;
            break;
    }

    //change to specific temp unit
    switch(temp2){
        case "f":
            value = value * 9 / 5 + 32;
            break;
        case "k":
            value = value + 273.15;
            break;
        case "ra":
            value = value * 9 / 5 + 491.67;
            break;
        case "re":
            value = value * 4 / 5;
            break;
    }

    return value;
}


function inputWhenChange(input1, input2, tempOption1, tempOption2){
    input1.oninput = function(){
        let temp1 = tempOption1.options[tempOption1.selectedIndex].value;
        let temp2 = tempOption2.options[tempOption2.selectedIndex].value;

        let value = input1.value;

        value = convertValue(temp1, temp2, value);

        input2.value = value;
    }

}

inputWhenChange(tempInput1, tempInput2, selectOption1, selectOption2);
inputWhenChange(tempInput2, tempInput1, selectOption2, selectOption1);

function selectOptionWhenChange(tempOption1, tempOption2, input1, input2){
    tempOption1.onchange = function(){
        let temp1 = tempOption1.options[tempOption1.selectedIndex].value;
        let temp2 = tempOption2.options[tempOption2.selectedIndex].value;

        let value = input1.value;

        value = convertValue(temp1, temp2, value);

        input2.value = value;
    }
}

selectOptionWhenChange(selectOption1, selectOption2, tempInput1, tempInput2);
selectOptionWhenChange(selectOption2, selectOption1, tempInput2, tempInput1);