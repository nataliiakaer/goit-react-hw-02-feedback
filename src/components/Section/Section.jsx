const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className="sectionTitle">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
