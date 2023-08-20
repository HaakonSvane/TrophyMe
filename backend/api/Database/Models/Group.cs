using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Group
{
    [Key] public int Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }

    public string AdminId { get; set; }

    [ForeignKey("AdminId")] public User Admin { get; set; }
    
    [GraphQLIgnore]
    public ICollection<UserGroup> UserGroups { get; set; } = new List<UserGroup>();

    public required DateTimeOffset CreatedDate { get; set; }
}