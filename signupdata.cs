using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace newef;

public class signupdata
{
    public int ID { get; set; }
    [MaxLength(50)]
    public string Firstname { get; set; }
    [MaxLength(50)]
    public string Lastname { get; set; }
    [MaxLength(100)]
    public string Fullname { get; set; }
    [MaxLength(100)]
    public string Username { get; set; }
    [MaxLength(100)]
    public string Email { get; set; }
    [MaxLength(100)]
    public string Password { get; set; }
    public Code Code { get; set; }
}