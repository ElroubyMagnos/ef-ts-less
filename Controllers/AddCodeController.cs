using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using newef;

namespace ef_ts_less.Controllers;

[ApiController]
[Route("[controller]")]
public class AddCodeController : ControllerBase
{
    private readonly ILogger<AddCodeController> _logger;

    public AddCodeController(ILogger<AddCodeController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public bool Get()
    {
        ef EntityF = new ef();

        string title = Request.Query["title"];
        string code = Request.Query["code"];
        string Username = Request.Query["Username"];
        bool publiccode = Request.Query["public"].ToString() == "1";

        signupdata sud = EntityF.signupdata.Where(x => x.Username == Username).FirstOrDefault();

        if (sud == null)
            return false;

        int OwnerID = sud.ID;

        if (OwnerID == null || OwnerID == 0)
            return false;

        Code Code = new Code();
        Code.OwnerName = Username;
        Code.OwnerID = OwnerID;
        Code.Title = title;
        Code.CodeContent = code;   
        Code.Public = publiccode;

        ef.context.Codes.Add(Code);
        ef.context.SaveChanges();

        return publiccode;
    }
}
