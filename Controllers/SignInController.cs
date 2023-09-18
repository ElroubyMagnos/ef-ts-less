using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class SignInController : ControllerBase
{
    private readonly ILogger<SignInController> _logger;

    public SignInController(ILogger<SignInController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public bool Get()
    {
        ef EntityF = new ef();
        bool Exist = false;

        string Username = Request.Query["un"];
        string Password = Request.Query["ps"];

        DbSet<signupdata> Users = EntityF.signupdata;

        signupdata Target = Users.Where((x) => x.Username == Username && x.Password == Password).FirstOrDefault();

        return Target != null;
    }
}
