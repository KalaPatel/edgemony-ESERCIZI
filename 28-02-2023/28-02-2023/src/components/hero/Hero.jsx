import "./index.css";

const Hero = ({ heroTitle }) => {
  return (
    <div className="heroSection">
      <img
        src="https://images.unsplash.com/photo-1647175529944-02270c78d6e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        alt="hero"
      />
      <h2>{heroTitle}</h2>
    </div>
  );
};

export default Hero;
