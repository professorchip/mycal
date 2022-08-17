console.log('linked dates.js to html!');
const button = document.querySelector('.submitButton');
const datePicker = document.getElementById('dateset');
const moneyInput = document.getElementById('moneybox');
const eventInput = document.getElementById('eventnamebox');
const freqInput = document.getElementById('freqpicker');
const budgetCal = new Map();
const userArray = [];
const userData = {
    // userEvents: {
    //     '2022E': {
    //         amount: "1",
    //         date: "2022-08-05",
    //         eventname: "E",
    //     }
    // },
    userEvents: [],
}; 

function setObj(props){ //obj, level, val, date
        //const eventID = getEventID(props.date, props.eventname);
        //userData.userEvents[`[${eventID}]`] = props;
        //console.log(eventID+'event added to user obj with id');
}

function pushEventDataToArray(array, props){
    array.push(`date: ${props.date}, amount: ${props.amount}, eventname: ${props.eventname}, frequency: ${props.freq}`);
}

function formSubmit() {
    const date = datePicker.value;
    const money = moneyInput.value;
    const event = eventInput.value;
    const frequency = freqInput.value;
    //const eventID = getEventID(date, event);
    //console.log(eventID + "found ID");
    if (!userArray) { //userData.userEvents.hasOwnProperty(eventID)
        alert('An event by this name already exists on this date');
    } else {
        // Add data to userEvents object
        //setObj({date: date, amount: money, eventname: event});
        pushEventDataToArray(userData.userEvents, {date: date, amount: money, eventname: event, freq: frequency});
    }
}

function sortEntries() {
    const sortedMap = new Map([...budgetCal].sort());
    return sortedMap;
}

button.addEventListener('click', formSubmit);

// datePicker.addEventListener('change', submitClicked)



