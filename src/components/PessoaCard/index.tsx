import styles from "./styles.module.css"

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
            <div className={styles.avatarContainer}>
                <div className={styles.avatarCircle} />
                <div className={styles.avatarBody} />
            </div>
            <div className={styles.info}>
                <p><strong>nome:</strong> {nomeCompleto}</p>
                <p><strong>cpf:</strong> {cpf}</p>
                <p><strong>nascimento:</strong> {formatarData(dataNascimento)}</p>
            </div>
            <button className={styles.viewButton}>view</button>
        </div>
    );
};

export default PessoaCard;