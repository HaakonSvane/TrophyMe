using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class trophies : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "AwardedDate",
                table: "Trophies",
                type: "timestamp with time zone",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "timestamp with time zone");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Trophies",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AdditionalInfo",
                table: "Games",
                type: "text",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TrophyRequest",
                columns: table => new
                {
                    TrophyId = table.Column<int>(type: "integer", nullable: false),
                    Id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrophyRequest", x => x.TrophyId);
                    table.ForeignKey(
                        name: "FK_TrophyRequest_Trophies_TrophyId",
                        column: x => x.TrophyId,
                        principalTable: "Trophies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TrophyRequestApproval",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "text", nullable: false),
                    RequestId = table.Column<int>(type: "integer", nullable: false),
                    IsApproved = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrophyRequestApproval", x => new { x.UserId, x.RequestId });
                    table.ForeignKey(
                        name: "FK_TrophyRequestApproval_TrophyRequest_RequestId",
                        column: x => x.RequestId,
                        principalTable: "TrophyRequest",
                        principalColumn: "TrophyId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TrophyRequestApproval_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TrophyRequestApproval_RequestId",
                table: "TrophyRequestApproval",
                column: "RequestId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrophyRequestApproval");

            migrationBuilder.DropTable(
                name: "TrophyRequest");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Trophies");

            migrationBuilder.DropColumn(
                name: "AdditionalInfo",
                table: "Games");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "AwardedDate",
                table: "Trophies",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)),
                oldClrType: typeof(DateTimeOffset),
                oldType: "timestamp with time zone",
                oldNullable: true);
        }
    }
}
