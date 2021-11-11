function styleChanges()
{
  document.getElementById("paragraph").style.color = "red";
  document.getElementById("paragraph2").style.color = "blue";
  document.getElementById("Title").style.color = "lightgreen";
}

function darkMode() 
{
  var dark = document.body;
  dark.classList.toggle("dark-mode");
}

var playerOne = "Player One";
var playerTwo = "Player Two";

function diceRoll()
{
  setTimeout(function ()
  {
    var randomNumberOne = Math.floor(Math.random() * 6) + 1;
    var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    if (randomNumberOne == 1)
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Terning1.svg/120px-Terning1.svg.png");

    }

    else if (randomNumberOne == 2)
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Terning2.svg/120px-Terning2.svg.png");

    }

    else if (randomNumberOne == 3)
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Terning3.svg/120px-Terning3.svg.png");

    }

    else if (randomNumberOne == 4)
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Terning4.svg/120px-Terning4.svg.png");

    }

    else if (randomNumberOne == 5)
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Terning5.svg/120px-Terning5.svg.png");

    }

    else
    {
      document.querySelector(".playerOneDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Terning6.svg/120px-Terning6.svg.png");

    }

    if (randomNumberTwo == 1)
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Terning1.svg/120px-Terning1.svg.png");

    }

    else if (randomNumberTwo == 2)
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Terning2.svg/120px-Terning2.svg.png");

    }

    else if (randomNumberTwo == 3)
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Terning3.svg/120px-Terning3.svg.png");

    }

    else if (randomNumberTwo == 4)
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Terning4.svg/120px-Terning4.svg.png");

    }

    else if (randomNumberTwo == 5)
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Terning5.svg/120px-Terning5.svg.png");

    }

    else
    {
      document.querySelector(".playerTwoDiceImage").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Terning6.svg/120px-Terning6.svg.png");

    }

    if (randomNumberOne === randomNumberTwo)
    {
      document.querySelector("h1").innerHTML = "Tie Game!";

    }

    else if (randomNumberOne < randomNumberTwo)
    {
      document.querySelector("h1").innerHTML = (playerTwo + " Wins!");
    }

    else
    {
      document.querySelector("h1").innerHTML = (playerOne + " Wins!");
    }

  }, 1000)
}

function changeName()
{
  playerOne = prompt("Change Player One's Name")
  playerTwo = prompt("Change Player Two's Name")

  document.querySelector("p.playerOneDice").innerHTML = playerOne;
  document.querySelector("p.playerTwoDice").innerHTML = playerTwo;
}


