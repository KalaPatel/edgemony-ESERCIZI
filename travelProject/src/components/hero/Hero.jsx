import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cr"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
