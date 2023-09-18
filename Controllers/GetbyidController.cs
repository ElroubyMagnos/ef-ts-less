using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class GetbyidController : ControllerBase
{
    private readonly ILogger<GetbyidController> _logger;

    public GetbyidController(ILogger<GetbyidController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public string Get()
    {
        int ID = int.Parse(Request.Query["id"]);

        return new ef().signupdata.Where(x => x.ID == ID).FirstOrDefault().Username;
    }
}
