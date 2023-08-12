using api.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Database;

public class TrophyDbContext : DbContext
{
    
    
    public TrophyDbContext(DbContextOptions<TrophyDbContext> options) : base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserGroup>().HasKey(userGroup => new { userGroup.UserId, userGroup.GroupId });
    }

    public DbSet<Group> Groups { get; set; } = default!;
    public DbSet<Trophy> Trophies { get; set; } = default!;
    public DbSet<User> Users { get; set; } = default!;
    public DbSet<UserGroup> UserGroups { get; set; } = default!;
    public DbSet<Game> Games { get; set; } = default!;
    public DbSet<Challenge> Challenges { get; set; } = default!;
}