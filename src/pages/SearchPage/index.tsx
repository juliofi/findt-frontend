import styles from "./styles.module.css"

const SearchPage = () => {
    return (
      <div>
        <h1 className={styles.title} >Findt</h1>
        <input type="text" placeholder="Digite o nome ou CPF" />
      </div>
    );
  };
  
  export default SearchPage;