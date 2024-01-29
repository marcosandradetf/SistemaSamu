using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Endereco
    {
        [Key]
        public int Id { get; set; }
        public string Protocolo { get; set; }
        // Utilize a atribuição de valor diretamente na propriedade
        public DateTime Data { get; set; } = DateTime.UtcNow;

        // Utilize a atribuição de valor diretamente na propriedade
        //public DateTime Hora { get; set; } = DateTime.UtcNow.TimeOfDay;
        public string Solicitante { get; set; }
        public long Telefone { get; set; }
        public string Cidade { get; set; }
        public string Logradouro { get; set; }
        public int Numeral { get; set; }
        public string Bairro { get; set; }
        public string PontoRef { get; set; }


        public static string ObterUltimos4Digitos(int numero)
        {
            // Usando a operação de módulo para obter os últimos 4 dígitos
            int ultimos4Digitos = numero % 10000;

            // Formatando para garantir que tenha sempre 4 dígitos
            return ultimos4Digitos.ToString("D4");
        }
        public static string GerarProtocolo(string ultimoNumeroGerado)
        {
            try
            {
                if (int.TryParse(ultimoNumeroGerado, out int ultimoNumeroGeradoInt))
                {
                    string ultimos4Digitos = ObterUltimos4Digitos(ultimoNumeroGeradoInt);
                    int chamado = int.Parse(ultimos4Digitos);
                    chamado++;
                    return $"{DateTime.Now:yyyy}{chamado:D4}";
                }
                else
                {
                    return "20240001";
                }
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine($"Erro em GerarProtocolo: {ex}");
                throw;
            }
        }



    }
}
