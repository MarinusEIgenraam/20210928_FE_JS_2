// Input
let distanceInKm = 5;
let selectedService = "Uber Black"
const prijsKilometer = 2.5;

const uberBlack = 5;
const uberX = 3;
const uberPremium = 8;

// Output
let prijs;
distanceInKm = 10;
console.log("De prijs van de rit is: " + distanceInKm * prijsKilometer + " euro")
console.log("De prijs van de rit is: " + distanceInKm * prijsKilometer + " euro")

if (selectedService === "Uber Black") {
    prijs = distanceInKm * uberBlack
} else if (selectedService === "Uber X") {
    prijs = distanceInKm * uberX
} else {
    prijs = distanceInKm * uberPremium
}

console.log(prijs)
console.log(`De prijs can de Uber Black rit is ${prijs} euro`)

selectedService = "Uber X"
let switchPrijs;

switch (selectedService) {
    case "Uber Black":
        switchPrijs = distanceInKm * uberBlack;
        break;
    case "Uber X":
        switchPrijs = distanceInKm * uberX;
        break;
    case "Uber Premium":
        switchPrijs = distanceInKm * uberPremium;
        break;
    default:
        switchPrijs = 0;
}

console.log(`De prijs can de Uber X rit is ${switchPrijs} euro`)