import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5+ projects</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Ongoing </h3>
        <span className="about__subtitle">3+ projects</span>
      </div>
      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">DSA</h3>
        <span className="about__subtitle">Learning DSA 50%</span>
      </div>
    </div>
  );
}

export default Info;