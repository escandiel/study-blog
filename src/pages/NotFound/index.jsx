import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";

export default function NotFound() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        {" "}
        <span className={styles.texto404}></span>{" "}
        <h1 className={styles.titulo}> Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
          nulla! Corrupti iusto mollitia nisi sed dolore ab delectus numquam
          magni neque repellendus ratione voluptatibus expedita itaque velit,
          eaque reiciendis impedit.
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          obcaecati laboriosam sequi ad explicabo consequatur rem facilis
          aliquam molestias, placeat architecto ducimus repellendus atque
          nesciunt voluptates ipsum similique ut nostrum.
        </p>
        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido de humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
