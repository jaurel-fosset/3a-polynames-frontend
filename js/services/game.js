export class GameService
{
    static async newGame()
    {
        const response = await fetch("http://localhost:8080/api/newGame", { method: "POST" });

        if (response.status === 200)
        {
            return await response.json();
        }
        else
        {
            return null;
        }
    }

    static async addPlayer(joinCode, role, pseudo)
    {
        
    }
}