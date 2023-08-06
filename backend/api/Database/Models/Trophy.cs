using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Trophy
{
    [Key] public int Id { get; set; }

    public string Emoji { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public bool isAccepted { get; set; }

    public Group Group { get; set; }

    [InverseProperty("Trophies")] public User User { get; set; }

    public DateTimeOffset CreatedDate { get; set; }
}