type HeroProps = {
  title: string;
  description: string;
};

function Hero({ title, description }: HeroProps) {
  return (
    <div className="hero">
      <h1>{title}</h1>

      <p>{description}</p>

      <button>Upload Resume</button>
    </div>
  );
}

export default Hero;