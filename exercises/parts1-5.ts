// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName:	string; 
spacecraftName = "Determination";
const speedMph:	number = 17500;
const kilometersToMars:	number = 225000000;
const kilometersToTheMoon:	number	= 384400;
const milesPerKilometer:	number	 = 0.621;



// Part 2: Print Days to Mars
const milesToMars: number = kilometersToMars * milesPerKilometer;
const hoursToMars: number = milesToMars / speedMph;
const daysToMars: number = hoursToMars / 24.
// Code an output statement here (use a template literal):
console.log(`${spacecraftName} has ${daysToMars} days to mars`);


// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
}
console.log(getDaysToLocation(12));

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class




// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
