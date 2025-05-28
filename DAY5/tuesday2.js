                       //DAY 5 JAVASCRIPT

//Q.1 Print all the day of week.
let day=parseInt(prompt("Enter your number"));//get input by the user
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

//Q.2 Ask user to enter marks out of 50 and print the grades using switch statement
let marks=parseInt(prompt("Enter your number"));
let n;
let grade;
switch(true){
    case marks >=41 && marks <=50:
    grade ='A';
    break;
    case marks >=41 && marks <=50:
    grade ='A';
    break;
    case marks >=41 && marks <=50:
    grade ='A';
    break;
    case marks >=41 && marks <=50:
    grade ='A';
    break;
    default:
        grade="invalid number";
}
console.log(grade);

//Q.3 Print the month..
let Month=parseInt(prompt("Enter your number"));
switch(Month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;
    case 7:
        console.log("july");
        break;
        case 8:
        console.log("August");
        break;
        case 9:
        console.log("September");
        break;
        case 10:
        console.log("October");
        break;
        case 11:
        console.log("November");
        break;
        case 12:
        console.log("December");
        break;
    default:
        console.log("The month is Over");
}