let wantToPlay = prompt("Would you like to play? Enter Yes");

if (wantToPlay == 'Yes' || wantToPlay == 'yes') {

  alert("There are six rooms you need to visit: Living Room, Closet, Bathroom, Kitchen, Bedroom One, and Bedroom Two.")

} else {

  alert("Have a good day!")

};

alert("A prompt will ask you for your next move. If you wish to move forward enter m and if you wish to check the room to your left enter c ");

let var1 = prompt("Please enter your first command (m or c).")
if (var1 === 'm') {
alert("You have moved forward")
} else {
  alert ("The room to your left is the Living Room")
  }
  
let var2 = prompt("Please enter your next command (m or c).")
if (var2 === 'm') {
alert("You have moved forward")
} else {
  alert ("The room to your left is the Living Room")
  }  
  