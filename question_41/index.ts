/*
Magicians: Make a array of magician’s 
names. Pass the array to a function called 
show_magicians(), which prints the 
name of each magician in the array.
*/

// Make an array of Magicians
const magician_names = [
    "Mag",
    "John",
    "Jackson",
    "David"
];

// Make a function to print the name of each magacian
function show_magicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(`The great ${magician}`);
    }
};
show_magicians(magician_names);