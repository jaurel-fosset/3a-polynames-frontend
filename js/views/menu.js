import { GameService } from "../services/game";
import { MoveService } from "../services/move";

export class MenuView
{
    constructor()
    {

    }

    display()
    {
        newGame = document.querySelector(".new-game");
        newGame.addEventListener('click', () => 
        {
            const joinCode = GameService.newGame();
            if (joinCode === null)
            {
                this.errorMessage("Could not create a new game, api call failed !");
            }
            else
            {
                MoveService.toHub(joinCode);
            }
        });
    
        newGame = document.querySelector(".join-game");
        newGame.addEventListener('click', () => 
        {
            const joinCode = document.querySelector(".join-code").value;
            if (joinCode === "")
            {
                this.errorMessage("Vous devez entrez un code");
            }
            else
            {
                if (MoveService.toHub(joinCode) === false)
                {
                    this.errorMessage("Vous devez entrez un code valide");
                }
            }
        });
    }

    errorMessage(message)
    {
        const message = document.querySelector(".error-message");
        if (message === null)
        {
            message = document.createElement("p");
            message.id = ".error-message"
            message.classList.add("error");

            body = document.querySelector("body");
            body.append(message);
        }

        message.innerHTML = message;
    }
}



