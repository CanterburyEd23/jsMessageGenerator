//Random Message Generator
//A program by Ed Hampton, to generate an announcement notice about a randomly generated exciting new craft beer!

//Three arrays from which the randomness shall be realised.
const breweries = [];
const beerNames = [];
const hops = [];

//Functions to pull random information from the above arrays for the message generator
const brewery = breweries => {};
const newBeer = beerNames => {};
const hopVarieties = hops => {};

//The Random Message
const announcement = `We, the brewers at ${brewery} are excited to announce the launch of our newest beer, ${newBeer}.  Brewed with ${hopVarieties} hops, we think you're going to really enjoy it!`;
return announcement;