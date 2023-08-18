using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class _5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserProfile_UserProfileId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserProfileId",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserProfile",
                table: "UserProfile");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "UserProfile");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserProfile",
                table: "UserProfile",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserProfile_Users_UserId",
                table: "UserProfile",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProfile_Users_UserId",
                table: "UserProfile");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserProfile",
                table: "UserProfile");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "UserProfile",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserProfile",
                table: "UserProfile",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserProfileId",
                table: "Users",
                column: "UserProfileId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserProfile_UserProfileId",
                table: "Users",
                column: "UserProfileId",
                principalTable: "UserProfile",
                principalColumn: "Id");
        }
    }
}
