using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/enderecos")]
    public class EnderecosController : ControllerBase
    {
        private readonly IEnderecoRepository _enderecoRepository;
        public EnderecosController(IEnderecoRepository enderecoRepository)
        {
            _enderecoRepository = enderecoRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetEnderecos()
        {
            var enderecos = await _enderecoRepository.GetEnderecosAsync();
            return Ok(enderecos);
        }

        [HttpPost]
        public async Task<IActionResult> AddEndereco([FromBody] Endereco endereco)
        {
            try
            {
                await _enderecoRepository.AddEnderecoAsync(endereco);
                return Ok(endereco);
            }
            catch (Exception ex)
            {
                // Registre ou manipule a exceção conforme necessário
                System.Diagnostics.Debug.WriteLine($"Erro ao adicionar Endereco: {ex}");
                return StatusCode(500, "Erro interno do servidor");
            }
        }





    }
}
