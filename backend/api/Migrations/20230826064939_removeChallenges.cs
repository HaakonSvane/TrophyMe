using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class removeChallenges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequest_Trophies_TrophyId",
                table: "TrophyRequest");

            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequest_RequestId",
                table: "TrophyRequestApproval");

            migrationBuilder.DropTable(
                name: "Challenges");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrophyRequest",
                table: "TrophyRequest");

            migrationBuilder.RenameTable(
                name: "TrophyRequest",
                newName: "TrophyRequests");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrophyRequests",
                table: "TrophyRequests",
                column: "TrophyId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequests_RequestId",
                table: "TrophyRequestApproval",
                column: "RequestId",
                principalTable: "TrophyRequests",
                principalColumn: "TrophyId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequests_Trophies_TrophyId",
                table: "TrophyRequests",
                column: "TrophyId",
                principalTable: "Trophies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequests_RequestId",
                table: "TrophyRequestApproval");

            migrationBuilder.DropForeignKey(
                name: "FK_TrophyRequests_Trophies_TrophyId",
                table: "TrophyRequests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TrophyRequests",
                table: "TrophyRequests");

            migrationBuilder.RenameTable(
                name: "TrophyRequests",
                newName: "TrophyRequest");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TrophyRequest",
                table: "TrophyRequest",
                column: "TrophyId");

            migrationBuilder.CreateTable(
                name: "Challenges",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    CreatorId = table.Column<string>(type: "text", nullable: false),
                    GameId = table.Column<int>(type: "integer", nullable: false),
                    CreatedDate = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Challenges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Challenges_Games_GameId",
                        column: x => x.GameId,
                        principalTable: "Games",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Challenges_Users_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Challenges_CreatorId",
                table: "Challenges",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Challenges_GameId",
                table: "Challenges",
                column: "GameId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequest_Trophies_TrophyId",
                table: "TrophyRequest",
                column: "TrophyId",
                principalTable: "Trophies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TrophyRequestApproval_TrophyRequest_RequestId",
                table: "TrophyRequestApproval",
                column: "RequestId",
                principalTable: "TrophyRequest",
                principalColumn: "TrophyId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
