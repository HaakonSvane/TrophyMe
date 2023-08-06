using System.ComponentModel.DataAnnotations;

namespace api.Database.Models;

public class Group
{
    [Key] public int Id { get; set; }

    public string Name { get; set; }

    public User Admin { get; set; }

    public DateTimeOffset CreatedDate { get; set; }
}