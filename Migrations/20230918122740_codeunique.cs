using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ef_ts_less.Migrations
{
    /// <inheritdoc />
    public partial class codeunique : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Codes_OwnerID",
                table: "Codes");

            migrationBuilder.CreateIndex(
                name: "IX_Codes_OwnerID",
                table: "Codes",
                column: "OwnerID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Codes_OwnerID",
                table: "Codes");

            migrationBuilder.CreateIndex(
                name: "IX_Codes_OwnerID",
                table: "Codes",
                column: "OwnerID",
                unique: true);
        }
    }
}
