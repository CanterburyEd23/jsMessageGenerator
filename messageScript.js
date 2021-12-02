//Random Message Generator
//A program by Ed Hampton, to generate an announcement notice about a randomly generated exciting new craft beer!

//Object containing libraries for random phrase generation, and methods to generate a random results from them.
const randomMessage = {
    libraries: {  //Libraries of random brewery names, beer names, and types of hops.
        breweries: ["Golden Dragon Brewery", "Organum", "Rushmouth Craft Beer Co.", "Hengist & Horsa Brewery", "Hackington Ales"],
        beerNames: ["The Monster never breathes!", "New World IPA", "King Ethelbert", "Mr Puffer", "Bepis Juice", "Project Mooze", "No. 18", "Batch 04:17", "Old Ale, revamp", "Lamplight Porter", "White Lion Pale", "Hop-Pile", "Brown Owl"],
        hops: ["Archer", "Amarillo", "Bramling Cross", "Cascade", "Citra", "Columbus", "Chinook", "Centennial", "Calypso", "Fuggles", "Goldings", "Moutueka", "Simcoe", "Sterling"],
    },
    getRandomBrewery() { //Generates a random brewery name from the available list
        const brewery = this.libraries.breweries;
        const randomIndex = Math.floor(Math.random() * brewery.length);
        return(brewery[randomIndex]);
    },
    getRandomBeerName() {  //Generates a random beer name from the available list
        const name = this.libraries.beerNames;
        const randomIndex = Math.floor(Math.random() * name.length);
        return(name[randomIndex]);
    },
    getRandomHop() {  //Generates a random Hop choice from the available list
        const hop = this.libraries.hops;
        const randomIndex = Math.floor(Math.random() * hop.length)
        return (hop[randomIndex]);
    },
    generateMessage() {  //Compiles the random message
        const message = `We, the staff of ${this.getRandomBrewery()} are pleased to announce the launch of our latest beer, ${this.getRandomBeerName()}.  Brewed with only the finest ${this.getRandomHop()} hops, we think we've made something really special. We hope you enjoy it!`;
        return message;
    },
};

//The instruction to generate a random message. 
console.log(randomMessage.generateMessage());

//Ed Hampton, 2/12/2021
