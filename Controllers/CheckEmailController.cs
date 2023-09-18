using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class CheckEmailController : ControllerBase
{
    private readonly ILogger<CheckEmailController> _logger;

    public CheckEmailController(ILogger<CheckEmailController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public bool Get()
    {
        ef EntityF = new ef();

        string InputEmail = Request.Query["Email"];
        DbSet<signupdata> Users = EntityF.signupdata;

        bool Exist = Users.Where(x => x.Email == InputEmail).FirstOrDefault() != null;


        return Exist;
    }
}
