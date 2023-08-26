using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class TrophyRequest
{
    
    public int Id { get; set; }
    
    [ID(nameof(Trophy))]
    [Key]
    [ForeignKey("Trophy")]
    public int TrophyId { get; set; }
    
    public Trophy Trophy { get; set; }

    public ICollection<TrophyRequestApproval> Approvals { get; set; } = new List<TrophyRequestApproval>();

}