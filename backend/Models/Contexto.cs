using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Endereco> Enderecos { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseNpgsql("Host=localhost;Port=5432;Pooling=true;Database=SamuDB;User Id=postgres;Password=4dejulho;");
    }
}
