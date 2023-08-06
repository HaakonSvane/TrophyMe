using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Database;

public class TrophyDbContext : DbContext
{
    public TrophyDbContext(DbContextOptions<TrophyDbContext> options) : base(options)
    {
    }

    public DbSet<Group> Groups { get; set; }
    public DbSet<Trophy> Trophies { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<UserGroup> UserGroups { get; set; }
}