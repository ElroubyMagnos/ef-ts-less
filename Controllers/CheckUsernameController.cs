using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class CheckUsernameController : ControllerBase
{
    private readonly ILogger<CheckUsernameController> _logger;

    public CheckUsernameController(ILogger<CheckUsernameController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public bool Get()
    {
        ef EntityF = new ef();

        string InputUsername = Request.Query["un"];
        DbSet<signupdata> Users = EntityF.signupdata;

        bool Exist = Users.Where(x => x.Username == InputUsername).FirstOrDefault() != null;


        return Exist;
    }
}
