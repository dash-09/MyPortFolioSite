import React from 'react';
import "./qualification.css";
import { useState } from 'react';

const Qualification = () => {


  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Profiles
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High-School</h3>
                <span className="qualification__subtitle">
                  New St. Angels, PratapGarh
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2014-2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  New St. Angels, PratapGarh
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2016-2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B-Tech(IT)</h3>
                <span className="qualification__subtitle">
                  Ambalika Institue, Lucknow
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ux design </h3>
                <span className="qualification__subtitle">
                  Ambalika Institue Lucknow,
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <i class="uil uil-arrow"></i> Leetcode
                </h3>
                <span className="qualification__subtitle">
                  <a href="https://leetcode.com/add_shy" target="_blank">
                    add_shy
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  <i class="uil uil-github-alt"></i> GitHub
                </h3>
                <span className="qualification__subtitle">
                  <a href="https://github.com/dash-09" target="_blank">
                    dash-09
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  <i class="uil uil-linkedin-alt"></i> LinkedIn
                </h3>
                <span className="qualification__subtitle">
                  <a
                    href="https://linkedin.com/in/adarsh-shuklaa"
                    target="_blank"
                  >
                    Adarsh Shukla
                  </a>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2022 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Ux trainer </h3>
                <span className="qualification__subtitle">
                  Ambalika Institue Lucknow,
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2020 - 2021
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;