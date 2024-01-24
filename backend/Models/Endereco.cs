using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;

namespace backend.Models
{
    public class Endereco
    {
        public int Id { get; set; }
        public string Solicitante { get; set; }
        public long Telefone { get; set; }
        public string Cidade { get; set; }
        public string Logradouro { get; set; }
        public int Numeral { get; set; }
        public string Bairro { get; set; }
        public string PontoRef { get; set; }
    }
}
