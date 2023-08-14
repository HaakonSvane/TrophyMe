using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace api.Database.Models;

[Index(nameof(Id))]
public class User
{
    [Key] public required string Id { get; set; }

    public required string FirstName { get; set; }

    public string? LastName { get; set; }

    //public byte[] ProfileImage { get; set; }

    public ICollection<Trophy> Trophies { get; set; } = default!;

    [GraphQLIgnore] public ICollection<UserGroup> UserGroups { get; set; } = new List<UserGroup>();
}