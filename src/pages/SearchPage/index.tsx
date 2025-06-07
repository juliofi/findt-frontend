import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ importa o hook de navegação
import styles from "./styles.module.css";

const isCPF = (input: string): boolean => {
  const cleaned = input.replace(/\D/g, "");
  return cleaned.length === 11;
};

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate(); // ✅ cria o hook de navegação

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const query = inputValue.trim();
      console.log("Valor da busca:", query);
      console.log("É CPF?", isCPF(query));

      try {
        let response;

        if (isCPF(query)) {
          console.log("Buscando por CPF...");
          response = await fetch(`http://localhost:8080/pessoas/cpf/${query}`);
          if (!response.ok) throw new Error("Erro ao buscar pessoa por CPF");
          const pessoa = await response.json();
          console.log("Resultado da busca por CPF:", pessoa);
          navigate("/resultados", { state: { resultados: [pessoa] } }); // ✅ redireciona passando 1 resultado
        } else {
          console.log("Buscando por nome...");
          console.log("URL da requisição:", "http://localhost:8080/pessoas/buscar/nome");
          console.log("Corpo da requisição:", JSON.stringify({ nomeCompleto: query }));
          
          response = await fetch(`http://localhost:8080/pessoas/buscar/nome`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nomeCompleto: query }),
          });
          
          console.log("Status da resposta:", response.status);
          if (!response.ok) throw new Error("Erro ao buscar pessoa por nome");
          
          const pessoas = await response.json();
          console.log("Resultados da busca por nome:", pessoas);
          navigate("/resultados", { state: { resultados: pessoas } }); // ✅ redireciona passando vários
        }
      } catch (error) {
        console.error("Erro detalhado na busca:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Findt</h1>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Digite o nome ou CPF"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchPage;
