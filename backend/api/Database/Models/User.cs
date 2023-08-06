using System.ComponentModel.DataAnnotations;

namespace api.Database.Models;

public class User
{
    [Key] public string Id { get; set; }

    [Required] public string FirstName { get; set; }

    public string LastName { get; set; }

    public byte[] ProfileImage { get; set; }

    public ICollection<Trophy> Throphies { get; set; }

    public ICollection<UserGroup> UserGroups { get; set; }
}