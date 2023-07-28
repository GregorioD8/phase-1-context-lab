/* Your Code Here */
function createEmployeeRecord(employeeArray){

    let employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
    return employee
}


function createEmployeeRecords(employeeData){

    let employeeRecord = employeeData.map(employee => createEmployeeRecord(employee))

    return employeeRecord
}

//dont need employeeObj passed as an argument becuase the 'context' of 'this' is the object 
function createTimeInEvent(dateStamp){

    let [date , hour] = dateStamp.split(' ')
    let timeInRecord = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date, 
    }

    this.timeInEvents.push(timeInRecord)

    return this
}


function createTimeOutEvent(dateStamp){

    let [date, hour] = dateStamp.split(' ')
    let timeOutRecord = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    }
    
    this. timeOutEvents.push(timeOutRecord)
    
    return this
}


function hoursWorkedOnDate(dateWorked){

    let timeIn = this.timeInEvents.find(event => event.date === dateWorked)
    let timeOut = this.timeOutEvents.find(event => event.date === dateWorked)
    let hoursWorked = (timeOut.hour - timeIn.hour) / 100
    
    return hoursWorked
}

//calling another function with a given thisArg and arg1
//js syntax
////////////////////////////////////
//call(thisArg)
//call(thisArg, arg1)
//call(thisArg, arg1, /* …, */ argN)
/////////////////////////////////////
function wagesEarnedOnDate(dateWorked){

    let payOwed = (this.payPerHour) * (hoursWorkedOnDate.call(this, dateWorked))
 
    return payOwed
}


function findEmployeeByFirstName(srcArray, firstName){
    
    let employeeName = srcArray.find(rec => rec.firstName === firstName)

    return employeeName
}

function calculatePayroll(employeeRecordsArray){

    let payroll = employeeRecordsArray.reduce((accumulator, currentValue) => accumulator + allWagesFor.call(currentValue), 0)

    return payroll
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

