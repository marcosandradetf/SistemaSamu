using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace backend.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Endereco> Enderecos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseNpgsql("Host=localhost;Port=5432;Pooling=true;Database=SamuDB;User Id=postgres;Password=4dejulho;");

        public async Task<string> ObterUltimoNumeroGeradoAsync()
        {
            try
            {
                var ultimoEndereco = await Enderecos.OrderByDescending(e => e.Id).FirstOrDefaultAsync();
                System.Diagnostics.Debug.WriteLine(ultimoEndereco);
                return ultimoEndereco?.Protocolo?.ToString() ?? "";
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Erro em ObterUltimoNumeroGeradoAsync: {ex}");
                throw; // Re-throw para manter o rastreamento original da exceção.
            }
        }

    }

}
