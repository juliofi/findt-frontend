// pages/Resultados/index.tsx
import { useLocation } from "react-router-dom";
import PessoaCard from "../../components/PessoaCard";
import styles from "./styles.module.css";

const Resultados = () => {
    console.log("🔍 Página de resultados carregada");
    const location = useLocation();
    const pessoas = location.state?.pessoas || [];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Resultados</h1>
            <div className={styles.cardGrid}>
                {pessoas.length > 0 ? (
                    pessoas.map((pessoa: any, index: number) => (
                        <PessoaCard
                            key={index}
                            nomeCompleto={pessoa.nomeCompleto}
                            cpf={pessoa.cpf}
                            dataNascimento={pessoa.dataNascimento}
                        />
                    ))
                ) : (
                    <p className={styles.notFound}>Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default Resultados;
