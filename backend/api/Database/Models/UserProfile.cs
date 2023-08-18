using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;
public class UserProfile
{
    [Key]
    [ForeignKey("User")]
    public string UserId { get; set; }
    
    [GraphQLIgnore]
    public User User { get; set; }
    
    public required string FirstName { get; set; }
    
    public string? MiddleName { get; set; }
    
    public required string LastName { get; set; }
    
    public string? ImageId { get; set; }
}