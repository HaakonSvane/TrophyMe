using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class Trophy
{
    [Key] public int Id { get; set; }

    public int GameId { get; set; }

    [ForeignKey("GameId")] public Game Game { get; set; }

    public string ReceiverId { get; set; }

    [ForeignKey("ReceiverId")] public User Receiver { get; set; }

    public required DateTimeOffset AwardedDate { get; set; }
}