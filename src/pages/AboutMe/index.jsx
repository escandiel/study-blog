import ModelPost from "components/ModelPost";
import styles from "./AboutMe.module.css";
import bannerPhoto from "assets/sobre_mim_capa.png";
import aboutMePhoto from "assets/sobre_mim_foto.png";

export default function AboutMe() {
  return (
    <ModelPost fotoCapa={bannerPhoto} titulo="Sobre mim">
      <h3 className={styles.subtitulo}> oi eu sou o escandi</h3>
      <img src={aboutMePhoto} alt="" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam culpa
        nisi fugit veniam, accusamus, eum laudantium, alias porro veritatis
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime autem
        consequatur incidunt error neque deserunt voluptas obcaecati fuga
        sapiente, unde odio illum. Adipisci, nobis voluptatibus. Impedit
        similique dolorum accusantium ad.
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        laborum minus natus, iste magni velit blanditiis molestias quasi fugiat
        At ullam inventore fugit voluptates amet veritatis sed illo pariatur
        sapiente, voluptatum fuga omnis hic incidunt deleniti non, nulla quod,
        nesciunt nisi!
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est corrupti
        repellendus aliquid. Aliquid facere assumenda tempora dolores fugit ad
        vel iusto dolorum, corrupti impedit, ea fuga asperiores animi amet
        molestias?
      </p>
    </ModelPost>
  );
}
