import "./index.css";

const Hero = ({ heroTitle }) => {
  return (
    <div className="heroSection">
      <img
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="hero"
      />
      <h2>{heroTitle}</h2>
    </div>
  );
};

export default Hero;
