namespace api.Database.Models;

public class UserGroup
{
    public User User { get; set; }
    public Group Group { get; set; }

    public DateTimeOffset JoinedAt { get; set; }
}