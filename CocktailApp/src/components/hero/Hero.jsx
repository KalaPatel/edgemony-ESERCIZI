import style from "./index.module.scss";

const Hero = ({ text, img }) => {
  return (
    <div className={style.Hero}>
      <h1 className={style.text}> {text}</h1>
      <div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Hero;
