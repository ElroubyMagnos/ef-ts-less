using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class SignUpController : ControllerBase
{
    private readonly ILogger<SignUpController> _logger;

    public SignUpController(ILogger<SignUpController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public void Get()
    {
        string Firstname = Request.Query["Firstname"];
        string Lastname = Request.Query["Lastname"];
        string Username = Request.Query["Username"];
        string Email = Request.Query["Email"];
        string Password = Request.Query["Password"];

        signupdata s = new signupdata();
        s.Firstname = Firstname;
        s.Lastname = Lastname;
        s.Username = Username;
        s.Email = Email;
        s.Password = Password;

        ef EntityF = new ef();
        EntityF.signupdata.Add(s);
        EntityF.SaveChanges();
    }
}
