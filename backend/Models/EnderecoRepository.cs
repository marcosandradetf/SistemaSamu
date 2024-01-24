using Microsoft.EntityFrameworkCore;

namespace backend.Models
{

    public interface IEnderecoRepository
    {
        Task<IEnumerable<Endereco>> GetEnderecosAsync();
        Task AddEnderecoAsync(Endereco endereco);
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
            _context.Enderecos.Add(endereco);
            await _context.SaveChangesAsync();
        }
    }
}
