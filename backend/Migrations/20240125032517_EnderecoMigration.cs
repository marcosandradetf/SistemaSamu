using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class EnderecoMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Enderecos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Protocolo = table.Column<string>(type: "text", nullable: false),
                    Data = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Solicitante = table.Column<string>(type: "text", nullable: false),
                    Telefone = table.Column<long>(type: "bigint", nullable: false),
                    Cidade = table.Column<string>(type: "text", nullable: false),
                    Logradouro = table.Column<string>(type: "text", nullable: false),
                    Numeral = table.Column<int>(type: "integer", nullable: false),
                    Bairro = table.Column<string>(type: "text", nullable: false),
                    PontoRef = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enderecos", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Enderecos");
        }
    }
}
