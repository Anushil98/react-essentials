function CoreConcept({ title, description, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image}></img>
      <p>{description}</p>
    </div>
  );
}

export default CoreConcept;
