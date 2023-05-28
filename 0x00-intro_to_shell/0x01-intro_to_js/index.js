//let myName = "Nathan";


//console.log(typeof myName);


//myName = "Eduah-Lexis";

 //let car = {
   // make: "Toyota",
    //model: "Camry",
    //year: 2023,
    //color: "Black",
    //engine: "3.5L",
    //transmission: "Automatic",
    //seats: 5,
    //fuelType: "Gasoline",
    //milage: 16000,
    //isElectric: false,
//};

//const favoriteNumber = 77;

//const halfofFavNum = favoriteNumber / 2;

//let isaacsFavorite = 13;

//let difference = isaacsFavorite - favoriteNumber;

//isaacsFavorite = isaacsFavorite * 26;

//isaacsFavorite = isaacsFavorite % 3;


// declare our function
function convertKgToLb() {
    let weightInKg = parseFloat(prompt("Enter the weight in kilograms:"));


    if (isNaN(weightInKg)) {
        alert("Invalid input. Please enter a number");
        return;
    }
    let weightInLb = weightInKg *2.2;
    alert(weightInKg + "kg =" + weightInLb + "lb");

    return weightInLb;
}
convertKgToLb();