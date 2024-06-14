import { GameService } from "../services/game";

export class HubView
{
    constructor()
    {

    }

    display()
    {
        const ready = document.querySelector(".startGame");
        ready.addEventListener("click", () =>
        {
            const joinCode = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

            const pseudo = document.querySelector(".pseudo");
            const select = document.querySelector(".role-select");

            try
            {
                GameService.addPlayer(joinCode, select.value, pseudo.value);
            }
            catch(e)
            {
                
            }
        });
    }
}   