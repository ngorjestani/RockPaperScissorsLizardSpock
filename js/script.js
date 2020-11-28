$(document).ready(function () {
    var playerSelection;
    var computerSelection;
    var round = 1;
    var playerScore = 0;
    var computerScore = 0;

    $("#new-game").on("click", function () {
        console.log("Starting new game");

        playerScore = 0;
        computerScore = 0;
        round = 1;

        $(".player-win").removeClass("player-win");
        $(".computer-win").removeClass("computer-win");
        $("#message-area").hide();
        $("#draw-message").hide();
        $("#player-score").empty();
        $("#computer-score").empty();
        $("#winner-message").empty();

        console.log("New game ready");
    });

    $(".game-img").on("click", function () {
        //If the game is over, this part will not run until a new game is started
        if (playerScore < 2 && computerScore < 2) {
            console.log("Clearing previous round");

            $(".player-win").removeClass("player-win");
            $(".computer-win").removeClass("computer-win");

            console.log("Starting round " + round);

            playerSelection = $(this).data("selection");
            console.log("Player selection is " + playerSelection);

            computerSelection = generateComputerTurn();
            console.log("Computer selection is " + computerSelection);

            $("#computer-selection").text(computerSelection);
            $("#message-area").show();

            if (playerSelection === computerSelection) {
                $("draw-message").show();
            } else {
                compareSelections(playerSelection, computerSelection);
                $("#player-score").text(playerScore);
                $("#computer-score").text(computerScore);

                if (playerScore === 2) {
                    console.log("Player wins");
                    $("#winner-message").text("Congratulations! You won!");
                }
                if (computerScore === 2) {
                    console.log("Computer wins")
                    $("#winner-message").text("You lost. Try again.")
                }
                console.log("End of round " + round);
                round++;
            }
        }
    });


    function generateComputerTurn() {
        var randomNumber = Math.floor((Math.random() * 5));
        var computerTurn;

        switch (randomNumber) {
            case 0:
                computerTurn = "Rock";
                break;
            case 1:
                computerTurn = "Paper";
                break;
            case 2:
                computerTurn = "Scissors";
                break;
            case 3:
                computerTurn = "Lizard";
                break;
            case 4:
                computerTurn = "Spock";
                break;
        }

        return computerTurn;
    }

    function compareSelections(player, computer) {
        switch (player + "|" + computer) {
            //PLayer wins outcomes
            case "Paper|Scissors":
                $("#sc-pa").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Paper|Rock":
                $("#pa-ro").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Rock|Lizard":
                $("#ro-li").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Lizard|Spock":
                $("#li-sp").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Spock|Scissors":
                $("#sp-sc").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Scissors|Lizard":
                $("#sc-li").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Lizard|Paper":
                $("#li-pa").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Paper|Spock":
                $("#pa-sp").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Spock|Rock":
                $("#sp-ro").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Rock|Scissors":
                $("#ro-sc").addClass("player-win");
                playerScore++;
                console.log("Player wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            //Computer wins outcomes
            case "Scissors|Paper":
                $("#sc-pa").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Rock|Paper":
                $("#pa-ro").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Lizard|Rock":
                $("#ro-li").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Spock|Lizard":
                $("#li-sp").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Scissors|Spock":
                $("#sp-sc").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Lizard|Scissors":
                $("#sc-li").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Paper|Lizard":
                $("#li-pa").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Spock|Paper":
                $("#pa-sp").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Rock|Spock":
                $("#sp-ro").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
            case "Scissors|Rock":
                $("#ro-sc").addClass("computer-win");
                computerScore++;
                console.log("Computer wins. Player: " + playerScore + " Computer: " + computerScore);
                break;
        }
    }
});