
  var winnerButton = Math.floor(Math.random() * 3);
  function addButtons() {
    var buttonsNumber = document.getElementById("numberOfButtons").value;
      for (let i = 0; i < buttonsNumber; ++i) {
        document.getElementById("Buttons").innerHTML += '<button type = "button" id = "`+ i +`" class="btn btn-primary" onclick="return checkWinnerButton(` + i + `);">choose a button</button>';
      }
     return false;
  }

  function checkWinnerButton(id) {   
    if (id == winnerButton) {
      alert("You won!");
    } else {
      alert("Try again!");
    }
  } 
   
  function newGame() {
    location.reload();
  }

