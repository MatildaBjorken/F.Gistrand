import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "001",
    title: "A custom formula for your skin’s unique needs",
    img: "filippa"
  },
  {
    id: 2,
    subtitle: "002",
    title: "Open space floor plans for you next venture",
    img: "filippatwo"
  },
  {
    id: 3,
    subtitle: "003",
    title: "For your best look ever",
    img: "filippa"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
           
          </div>
          <div className='cases-arrow next'>
           
          </div>
        </div>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
              <img
                  src={require(`../assets/${caseItem.img}.jpg`).default}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
