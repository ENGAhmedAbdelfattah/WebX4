function ContactLanding({ t }) {
  return (
    <section className="contactsLanding">
      <div className="container">
        <h2 className="landing-header">{ t.header}</h2>
        <p className="landing-paragraph">{ t.paragraph}</p>
      </div>
    </section>
  );
}

export default ContactLanding;
