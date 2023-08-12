using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Game
{
    [Key] public int Id { get; set; }

    public required string Name { get; set; }
    
    public string? Description { get; set; }
    
    public required string Emoji { get; set; }
    
    public int ParentGroupId { get; set; }
    
    [ForeignKey("ParentGroupId")]
    public Group ParentGroup { get; set; }
}