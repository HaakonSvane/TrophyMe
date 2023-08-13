using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Challenge
{
    public enum AcceptanceStatus
    {
        Accepted,
        Pending,
        Rejected
    }

    [Key] public string Id { get; set; }

    public int GameId { get; set; }

    [ForeignKey("GameId")] public Game Game { get; set; }

    public string CreatorId { get; set; }

    [ForeignKey("CreatorId")] public User Creator { get; set; } = default!;

    public required DateTimeOffset CreatedDate { get; set; }

    public required AcceptanceStatus Status { get; set; } = AcceptanceStatus.Pending;
}