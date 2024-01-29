import React, { FC, useState, useEffect } from 'react';
import { RegulacaoPrimariaWrapper } from './RegulacaoPrimaria.styled';

interface FormData {
   protocolo: string;
   solicitante: string;
   telefone: string;
   cidade: string;
   logradouro: string;
   numeral: string;
   bairro: string;
   pontoRef: string;
   [key: string]: string; // Index signature
}

interface RegulacaoPrimariaProps {
   isOpen: boolean;
   onClose: () => void;
   //children: React.ReactNode;
}

const RegulacaoPrimaria: FC<RegulacaoPrimariaProps> = ({ isOpen, onClose }) => {

   const [dados, setDados] = useState<FormData[]>([]);

   const fetchData = async () => {
      try {
         // Requisição GET
         const response = await fetch('https://localhost:7085/api/enderecos');
         const data = await response.json();
         setDados(data);
      } catch (error) {
         console.error("Erro ao buscar dados", error);
      }
   };


   useEffect(() => {
      // FetchData
      fetchData();

      // Intervalo de atualizacao
      const intervalo = setInterval( () => {
         fetchData();
      }, 5000);

      // Limpar intervalo quando o componete é desmontado
      return () => clearInterval(intervalo);
   }, [] /* garante que useEffect seja executado apenas uma vez*/ ); 


   return (
      <RegulacaoPrimariaWrapper data-testid="RegulacaoPrimaria">
         {isOpen && (
            <div className='border p-4 rounded-3 modalGerar boxShadow'>
               <div className='d-flex justify-content-end'>
                  <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
               </div>
               <div className='d-flex justify-content-center'>
                  <h2 className='h4'>Regulação Primária</h2>
               </div>
               <br />

               <div>
                  <ul className="list-group">
                     {dados.map(endereco => (
                        <li key={endereco.id} className="list-group-item bg-danger text-white" role="button" onClick={onClose}>
                           Solicitante: {endereco.solicitante} - Cidade: {endereco.cidade}
                        </li>
                     ))}
                  </ul>
                  <br />
               </div>
            </div>
         )}
      </RegulacaoPrimariaWrapper>
   );
};

export default RegulacaoPrimaria;