import ModelPost from "components/ModelPost";
import styles from "./AboutMe.module.css";
import bannerPhoto from "assets/sobre_mim_capa.png";
import aboutMePhoto from "assets/sobre_mim_foto.png";

export default function AboutMe() {
  return (
    <ModelPost fotoCapa={bannerPhoto} titulo="Sobre mim">
      <h3 className={styles.subtitulo}> oi eu sou o escandi</h3>
      <img src={aboutMePhoto} alt="" className={styles.fotoSobreMim} />
    </ModelPost>
  );
}
