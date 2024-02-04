using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Game
{
    [Key] public int Id { get; set; }

    public required string Name { get; set; }

    public string? Description { get; set; }
    
    [GraphQLName("symbol")]
    [MaxLength(4)]
    public required string Emoji { get; set; }
    
    public DateTimeOffset CreatedDate { get; set; }
    
    public ICollection<Trophy> Trophies { get; set; } = new List<Trophy>();
    
    public int ParentGroupId { get; set; }
    
    [GraphQLIgnore]
    [ForeignKey("ParentGroupId")] public Group ParentGroup { get; set; }
}