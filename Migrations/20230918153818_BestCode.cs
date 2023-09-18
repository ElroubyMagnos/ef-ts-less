using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ef_ts_less.Migrations
{
    /// <inheritdoc />
    public partial class BestCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Public",
                table: "Codes",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Public",
                table: "Codes");
        }
    }
}
