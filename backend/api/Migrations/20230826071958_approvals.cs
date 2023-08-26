using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class approvals : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequests_RequestId",
                table: "TrophyRequestApproval");

            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApproval_Users_UserId",
                table: "TrophyRequestApproval");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrophyRequestApproval",
                table: "TrophyRequestApproval");

            migrationBuilder.RenameTable(
                name: "TrophyRequestApproval",
                newName: "TrophyRequestApprovals");

            migrationBuilder.RenameIndex(
                name: "IX_TrophyRequestApproval_RequestId",
                table: "TrophyRequestApprovals",
                newName: "IX_TrophyRequestApprovals_RequestId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrophyRequestApprovals",
                table: "TrophyRequestApprovals",
                columns: new[] { "UserId", "RequestId" });

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApprovals_TrophyRequests_RequestId",
                table: "TrophyRequestApprovals",
                column: "RequestId",
                principalTable: "TrophyRequests",
                principalColumn: "TrophyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApprovals_Users_UserId",
                table: "TrophyRequestApprovals",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApprovals_TrophyRequests_RequestId",
                table: "TrophyRequestApprovals");

            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApprovals_Users_UserId",
                table: "TrophyRequestApprovals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrophyRequestApprovals",
                table: "TrophyRequestApprovals");

            migrationBuilder.RenameTable(
                name: "TrophyRequestApprovals",
                newName: "TrophyRequestApproval");

            migrationBuilder.RenameIndex(
                name: "IX_TrophyRequestApprovals_RequestId",
                table: "TrophyRequestApproval",
                newName: "IX_TrophyRequestApproval_RequestId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrophyRequestApproval",
                table: "TrophyRequestApproval",
                columns: new[] { "UserId", "RequestId" });

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequests_RequestId",
                table: "TrophyRequestApproval",
                column: "RequestId",
                principalTable: "TrophyRequests",
                principalColumn: "TrophyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApproval_Users_UserId",
                table: "TrophyRequestApproval",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
