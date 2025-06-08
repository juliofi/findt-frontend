import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import api from "../../services/api";              // ✅ caminho corrigido para a api
import styles from "./styles.module.css";

const isCPF = (input: string): boolean => {
  const cleaned = input.replace(/\D/g, "");
  return cleaned.length === 11;
};

const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const query = inputValue.trim();
    if (!query) return;

    setIsLoading(true);
    try {
      if (isCPF(query)) {
        // Busca por CPF (GET)
        const { data: pessoa } = await api.get(`/pessoas/cpf/${query}`);
        navigate("/resultados", { state: { resultados: [pessoa] } });
      } else {
        // Busca por nome (POST)
        const { data: pessoas } = await api.post("/pessoas/buscar/nome", {
          nomeCompleto: query,
        });
        navigate("/resultados", { state: { resultados: pessoas } });
      }
    } catch (err: any) {
      console.error("Erro na busca:", err.response?.data || err.message);
      // aqui você pode mostrar um toast ou mensagem de erro
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Findt</h1>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Digite o nome ou CPF"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        {isLoading && (
          <div className={styles.loadingContainer}>
            <FaSpinner className={styles.loadingSpinner} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
