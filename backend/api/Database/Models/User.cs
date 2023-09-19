using System.ComponentModel.DataAnnotations;
using HotChocolate.Authorization;
using Microsoft.EntityFrameworkCore;

namespace api.Database.Models;

[Index(nameof(Id))]
public class User
{
    [Key] public required string Id { get; set; }
    
    public required string Username { get; set; }

    public ICollection<Trophy> Trophies { get; set; } = new List<Trophy>();
    
    public UserProfile? UserProfile { get; set; }

    [GraphQLIgnore] public ICollection<UserGroup> UserGroups { get; set; } = new List<UserGroup>();
}