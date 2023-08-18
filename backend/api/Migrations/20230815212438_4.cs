using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class _4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserProfile_Users_UserId",
                table: "UserProfile");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserProfileId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_UserProfile_UserId",
                table: "UserProfile");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserProfileId",
                table: "Users",
                column: "UserProfileId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Users_UserProfileId",
                table: "Users");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserProfileId",
                table: "Users",
                column: "UserProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfile_UserId",
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
    }
}
