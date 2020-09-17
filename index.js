function getvalue(){
  // document.getElementByClass(".btn");

  // without shortcut method
  var randomnumber1 = Math.floor(Math.random()*6) + 1;
  var randomDiceImage = "dice" + randomnumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  // with shortcut method
  var randomnumber2 = Math.floor(Math.random()*6) + 1;
  var randomImageSource2 = "images/dice" + randomnumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  // if player 1 wins
  if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🏳️‍🌈";
  }
  else {
    document.querySelector("h1").innerHTML = "🙅‍♀️Draw!🙅‍♀️";
  }
}
getvalue();
