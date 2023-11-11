import ButtonMain from "components/ButtonMain";
import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

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
        </p>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          obcaecati laboriosam sequi ad explicabo consequatur rem facilis
        </p>
        <div className={styles.botaoContainer} onClick={() => navigate("/")}>
          <ButtonMain size="lg">Voltar</ButtonMain>
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
