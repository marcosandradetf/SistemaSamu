import React, { FC, useState } from 'react';
import { ModalGerarChamadoWrapper } from './ModalGerarChamado.styled';

interface FormData {
   solicitante: string;
   telefone: string;
   cidade: string;
   logradouro: string;
   numeral: string;
   bairro: string;
   pontoRef: string;
   [key: string]: string; // Index signature
 }

interface ModalGerarChamadoProps {
   isOpen: boolean;
   onClose: () => void;
   //children: React.ReactNode;
}

const ModalGerarChamado: FC<ModalGerarChamadoProps> = ({ isOpen, onClose }) => {
   const initialFormData: FormData = {
      solicitante: "",
      telefone: "",
      cidade: "",
      logradouro: "",
      numeral: "",
      bairro: "",
      pontoRef: "",
    };
  
    const [formData, setFormData] = useState<FormData>(initialFormData);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Obter os nomes dos campos, excluindo o último
      const fieldNames = Object.keys(formData).slice(0, -1);

      // Verificar se todos os campos, exceto o último, estão preenchidos
      const allFieldsFilled = fieldNames.every((fieldName) => formData[fieldName].trim() !== "");

      if (!allFieldsFilled) {
         console.log("Preencha todos os campos, exceto o último, antes de enviar o formulário.");
         return;
      }

      // Lógica para enviar o formulário
      try {
         const response = await fetch("https://localhost:7085/api/enderecos", {
            method: "post",
            headers:{
               "Content-Type": "application/json",
            },
            body:JSON.stringify(formData),
         });
         if (response.ok) {
            console.log("Formulário enviado:", formData);
            setFormData(initialFormData);
         } else {
            console.error("Erro ao enviar o formulario");
         }
      } catch(error) {
         console.error("Erro:", error);
      }


   };

   return (
      <ModalGerarChamadoWrapper data-testid="ModalGerarChamado">
         {isOpen && (
            <div className='border p-4 rounded-3 modalGerar boxShadow'>
               <div className='d-flex justify-content-end'>
                  <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
               </div>
               <div className='d-flex justify-content-center'>
                  <h2 className='h4'>Endereço do Solicitante</h2>
               </div>

               <div className='d-flex'>
                  <label className='form-label'>
                     Solicitante:
                     <input type="text" name='solicitante'
                        value={formData.solicitante}
                        onChange={handleInputChange} className='form-control modalGerarSol' />
                  </label>
                  <label className='form-label'>
                     Telefone:
                     <input type="number" name='telefone'
                        value={formData.telefone}
                        onChange={handleInputChange} className='form-control modalGerarFone' />
                  </label>
               </div>

               <form onSubmit={handleSubmit}>
                  <label className='form-label'>
                     Cidade:
                     <input type="text" name='cidade'
                        value={formData.cidade}
                        onChange={handleInputChange} className='form-control modalGerarInputs' />
                  </label>
                  <br />
                  <div className='d-flex'>
                     <label className='form-label'>
                        Logradouro:
                        <input type="text" name='logradouro'
                           value={formData.logradouro}
                           onChange={handleInputChange} className='form-control modalGerarLog' />
                     </label>
                     <label className='form-label'>
                        Numeral:
                        <input type="number" name='numeral'
                           value={formData.numeral}
                           onChange={handleInputChange} className='form-control modalGerarNum' />
                     </label>
                  </div>
                  <label className='form-label'>
                     Bairro:
                     <input type="text" name='bairro'
                        value={formData.bairro}
                        onChange={handleInputChange} className='form-control modalGerarInputs' />
                  </label>
                  <br />
                  <label className='form-label'>
                     Ponto de Referência:
                     <textarea name="pontoRef"
                        value={formData.pontoRef}
                        onChange={handleInputChange} className='form-control modalGerarInputs' cols={20}></textarea>
                  </label>
                  <br />
                  <button type="submit" className='btn btn-danger btn-gerar'>Gerar Chamado</button>
               </form>
            </div>
         )}
      </ModalGerarChamadoWrapper>
   );
};

export default ModalGerarChamado;