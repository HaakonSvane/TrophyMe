using System.ComponentModel.DataAnnotations.Schema;

namespace api.Database.Models;

public class UserGroup
{
    public string UserId { get; set; }

    [ForeignKey("UserId")] public User User { get; set; }

    public int GroupId { get; set; }

    [ForeignKey("GroupId")] public Group Group { get; set; }

    public DateTimeOffset JoinedAt { get; set; }
}