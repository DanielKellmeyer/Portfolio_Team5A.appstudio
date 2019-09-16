let bedRooms= 1;
let x = 1;
let y = 1;
var roomArray= ['Living Room'];

let direction = prompt("You are starting in the Living Room! Which direction do you want to move (north, east, south, or west)");
let units = Number(prompt("How far do you want to move (int)?"));

if (direction == 'north') {
   y = (y + units)
} else if (direction == 'east') {
   x = (x + units)
} else if (direction == 'south') {
  y = (y - units)
} else if (direction == 'west'){
  x = (x - units)
}
//this makes sure that the user does not leave the house and remains within its walls
  if (x < 0 || x > 15) {
alert("You have hit a wall, try again!")
x = (x - units)
}
if (y < 0 || y > 15) {
alert("You have hit a wall, try again!")
y = (y - units)
}

switch (bedRooms) {
  case 5: alert('Yay! You have won the game!') 
  break;
  default:
  console.log("Try again!")
  break;
  }
  // the following are coordinates for all 6 rooms
if (x > 10 && x < 15 && y > 10 && y < 20) {
  alert('Welcome to the Bedroom.')
  roomArray.includes('Bedroom')
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Master Bedroom')}
  
}else if (x > 5 && x < 10 && y > 10 && y < 20) {
  alert('Welcome to the Bathroom.')
  roomArray.includes('Bathroom')
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Bathroom')} 
}else if (x > 0 && x < 5 && y > 10 && y < 20) {
  alert('Welcome to the Closet.')
roomArray.includes('Closet') 
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Closet')} 
  
}else if (x > 0 && x < 5 && y > 0 && y < 10) {
  alert('Now entering the Living Room!');
  roomArray.includes('Living Room')
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Living Room')} 

else if (x > 5 && x < 10 && y > 0 && y < 10) {
  alert('Now entering the Kitchen!');
roomArray.includes('Kitchen')
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Kitchen')} 

else if (x > 10 && x < 15 && y > 0 && y < 10) {
  alert('Welcome to the Laundry Room!');
 roomArray.includes('Laundry Room')
  if ('true') {alert('You have already visited this room.')}
  else if ('false') {
  bedRooms = bedRooms + 1
  roomArray.push('Laundry Room')} 

}
