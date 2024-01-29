using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{

    public interface IEnderecoRepository
    {
        Task<IEnumerable<Endereco>> GetEnderecosAsync();
        Task AddEnderecoAsync(Endereco endereco);
        Task<string> GerarProximoProtocoloAsync();
    }

    public class EnderecoRepository : IEnderecoRepository
    {
        private readonly Contexto _context;
        public EnderecoRepository(Contexto context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Endereco>> GetEnderecosAsync()
        {
            return await _context.Enderecos.ToListAsync();
        }
        public async Task AddEnderecoAsync(Endereco endereco)
        {
            endereco.Protocolo = await GerarProximoProtocoloAsync();

            _context.Enderecos.Add(endereco);
            await _context.SaveChangesAsync();
        }

        public async Task<string> GerarProximoProtocoloAsync()
        {
            try
            {
                System.Diagnostics.Debug.WriteLine("Chegou no metodo GerarProximoProtocoloAsync");
                string ultimoNumeroGerado = await _context.ObterUltimoNumeroGeradoAsync();
                string novoProtocolo = Endereco.GerarProtocolo(ultimoNumeroGerado);
                return novoProtocolo;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Erro em GerarProximoProtocoloAsync: {ex}");
                throw;
            }
        }




    }
}
