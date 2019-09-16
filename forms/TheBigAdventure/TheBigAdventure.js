let wantToPlay = prompt("Would you like to play? Enter Yes or No");
if (wantToPlay == 'Yes' || wantToPlay == 'yes') {
  alert("There are six rooms you need to visit: Living Room, Closet, Bathroom, Kitchen, Bedroom One, and Bedroom Two. If you enter all 6, you win the game. Try not to hit any walls!")
} else {
  alert("Have a good day!")
};

startGame = prompt('Type start to learn how to play!')
if (startGame == 'Yes' || startGame == 'yes') {
  alert("Enter 1 to move forward, 2 to move to the left, 3 to move to the right, and 4 to move backwards")
}
//Creating array for movement variables
let movement = []
movement['Forward'] = 1
movement['Left'] = 2
movement['Right'] = 3
movement['Backward'] = 4

livingRoom = prompt('You have started at the entrance. Type 1,2,3, or 4 to enter your first move')
if (livingRoom == movement['Left'] || livingRoom == movement['Right'] || livingRoom == movement['Backward']) {
  alert('You have ran into a wall.')
} else if(livingRoom == movement['Forward']){
  alert('You have found the Living Room!')
  }
closet = prompt('Congratulations! Type 1,2,3, or 4 to enter your next move.')
if (closet == movement['Left'] || closet == movement['Forward'] || closet == movement['Backward']) {
  alert('You have ran into a wall.')
} else if(closet == movement['Right']){
  alert('You have found the Closet!')
  }
bathroom = prompt('Congratulations! Type 1,2,3, or 4 to enter your next move.')
if (bathroom == movement['Right'] || bathroom == movement['Forward'] || bathroom == movement['Backward']) {
  alert('You have ran into a wall.')
} else if(bathroom == movement['Left']){
  alert('You have found the Bathroom!')
  }
kitchen = prompt('Congratulations! Type 1,2,3, or 4 to enter your next move.')
if (kitchen == movement['Right'] || kitchen == movement['Forward'] || kitchen == movement['Left']) {
  alert('You have ran into a wall.')
} else if(kitchen == movement['Backward']){
  alert('You have found the Kitchen!')
  }
  //This is the last room so I used a switch in this case
var lastRoom = prompt("This is your final move to win the game! Choose carefully :)!")
switch(lastRoom){
case '4':
  alert('Congratulations! You have won the Big Adventure!')
case '3':
  alert('You have ran into a wall.')
case '2':
  alert('You have ran into a wall.')
case '1':
  alert('You have ran into a wall.')
  break;
}