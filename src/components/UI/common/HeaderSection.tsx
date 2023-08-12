type props = {
  t: any;
}

function HeaderSection({t}: props) {
  return (
    <div className="header-sections-box">
      <h2 className="header-sections-text">{t.header}</h2>
      <hr />
    </div>
  );
}

export default HeaderSection;
// skills-top
// skillsHeader