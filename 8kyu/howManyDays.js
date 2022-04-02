/* 
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
*/

function daysInMonth (month) {
    let days
    switch (month) {
        case 2:
            days = 28
            break;
        case 4:
            days = 30
            break;
        case 6:
            days = 30
            break;
        case 9:
            days = 30
            break;
        case 11:
            days = 30
            break;
        default:
            days = 31
    }
    return days
}

/* 
We can be more concise and efficient, combining certain months and ignoring reassigning a value to days
*/

function howManyDays(month){
    switch (month){
       case 2: return 28
       case 4:
       case 6:
       case 9:
       case 11: return 30
    }
    return 31
  }