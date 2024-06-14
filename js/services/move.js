export class MoveService
{
    static toHub(joinCode)
    {
        try
        {
            replace("http://localhost:8080/hub/" + joinCode);
            return true;
        }
        catch(e)
        {
            console.log(e);
            return false;
        }
    }
}