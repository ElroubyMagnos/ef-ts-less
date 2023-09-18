using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class GettopController : ControllerBase
{
    private readonly ILogger<GettopController> _logger;

    public GettopController(ILogger<GettopController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public List<Code> Get()
    {
        string Want = Request.Query["want"];
        string Username = Request.Query["un"];

        switch(Want)
        {
            default:
            case "1":
                return new ef().Codes.Where(x => x.Public).ToList();
            case "2":
                return new ef().Codes.Where(x => x.Public && x.OwnerName == Username).ToList();
            case "3":
                return new ef().Codes.Where(x => !x.Public && x.OwnerName == Username).ToList();
        }
        
    }
}
