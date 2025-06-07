import styles from "./styles.module.css"
import { FaUser } from "react-icons/fa";

type PessoaProps = {
  nomeCompleto: string;
  cpf: string;
  dataNascimento: string;
};

const PessoaCard = ({ nomeCompleto, cpf, dataNascimento }: PessoaProps) => {
  // Função para formatar a data para o padrão brasileiro
  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.avatarContainer}>
          <FaUser size={120} color="black" />
        </div>
        <div className={styles.info}>
          <p className={styles.infoText}><strong>nome:</strong> {nomeCompleto}</p>
          <p className={styles.infoText}><strong>cpf:</strong> {cpf}</p>
          <p className={styles.infoText}><strong>nascimento:</strong> {formatarData(dataNascimento)}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.viewButton}>ver mais</button>
      </div>

    </div>
  );
};

export default PessoaCard;