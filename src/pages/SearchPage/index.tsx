import styles from "./styles.module.css"

const SearchPage = () => {
    return (
      <div className={styles.container} >
        <h1 className={styles.title} >Findt</h1>
        <input className={styles.searchBar} type="text" placeholder="Digite o nome ou CPF" />
      </div>
    );
  };
  
  export default SearchPage;