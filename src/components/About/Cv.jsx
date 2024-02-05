import React from "react";

class Cv extends React.Component {
  render() {
    return (
      <div className="p-1">
        <hr></hr>
        <div className="row col-md-12">
          <div
            className="text-left col-md-5"
            style={{
              fontSize: "13px",
              backgroundColor: "#0000ff05",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <span style={{fontSize:'16px'}}>James Savali,</span><br></br>
            <strong className="text-bold">
              Senior Software Engineer
            </strong>
            <br></br>
            <br></br>
            Email: <label className="text-muted">savalijey@gmail.com</label>
            <br></br>
            Languages: English
            <br></br>
            Portfolio:{" "}
            <a target="_blank" rel="noreferrer" href="https://devjey.com">
              devjey.com
            </a>
            <div
              className="text-left text-sm pt-3"
              style={{ fontSize: "13px" }}
            >
              <h6>
                <b>Skills</b>
              </h6>
            </div>
            <div className="container-fluid row" style={{ fontSize: "13px" }}>
              <div className="p-1">
                Languages & Frameworks
                <ul className="pl-3">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>Django</li>
                  <li>Django Rest Framework (DRF)</li>
                  <li>Patterns: (MVC), Rest APIs and GraphQL.</li>
                  <li>Bs4, Selenium, Scrapy, Numpy, Pandas</li>
                  <li>PostgreSQL, MySQL, MongoDB</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>HTML/SCSS/Bootstrap/Tailwind</li>
                </ul>
              </div>
              <div className="p-1">
                Other Tech Skills & Tools
                <ul className="pl-3">
                  <li>Web development and integration of payment solutions</li>
                  <li>
                    CI/CD: Github Actions, AWS, <br /> Digital Ocean
                  </li>
                  <li>Docker and container Orchestration.</li>
                  <li>Logging & Metrics tools - Cloudwatch, Datadog.</li>
                  <li>Testing & linting: TravisCI, CircleCI</li>
                  <li>Data scraping, analysis and visualization</li>
                </ul>
              </div>
              <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                <h6>
                  <b>Education</b>
                </h6>
                Bachelor of Science in Computer Science, Multimedia University
                of Kenya, Nairobi
                <br></br>
                <label className="text-muted">
                  September 2015 - April 2020
                </label>
                <p className=" text-mute">
                  Hands on development of applications in school enhanced my
                  problem-solving skills and deepened my commitment to
                  continuous learning in computer science.
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-left text-sm col-md-7"
            style={{ fontSize: "13px" }}
          >
            <p className=" text-mute">
              With 5 years of hands-on experience, I am a proficient backend
              software engineer specializing in scalable application development
              with expertise in Python and Javascript. My strong problem-solving
              skills, collaborative approach, and commitment to ongoing
              professional development ensure the timely delivery of
              high-quality software solutions, grounded in software engineering
              principles.
            </p>

            <div className="text-left text-sm" style={{ fontSize: "13px" }}>
              <div className="text-left text-sm">
                <h6>
                  <b>Work Experience</b>
                </h6>
                <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                  <b>Senior Backend Engineer at Teya</b>
                  <br></br>
                  <label className="text-muted">March 2022 - Current</label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Developing, integrating and maintaining 2 payment
                      solutions using Python, Django and actively collaborating
                      with the QA team, to achieve a high level of application
                      quality.
                    </li>
                  </ul>
                </div>
                <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                  <b>Lead Full stack Engineer at Playfooz</b>
                  <br></br>
                  <label className="text-muted">
                    November 2021 - March 2022
                  </label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Led the development of the ArabMillionaire sports betting
                      and online gaming web application with more than 20k
                      active users, utilizing React.js & Django, resulting in a
                      responsive, intuitive and robust user interface.
                    </li>
                  </ul>
                </div>
                <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                  <b>Senior Backend Engineer at UNXD</b>
                  <br></br>
                  <label className="text-muted">June 2021 - Oct 2021</label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Orchestrated an nft auctionaing platform which
                      successfully ran the Dolce & Gabana 'Collezione Genesi'
                      auction, and the company was able to generate $5.7 Million
                      worth of sales.
                    </li>
                  </ul>
                </div>
                <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                  <b>Freelance Software Engineer at Upwork</b>
                  <br></br>
                  <label className="text-muted">January 2021 - Current</label>
                  <br></br>
                  <ul className="pl-3 pb-2 text-mute">
                    <li>
                      Successfully delivered 8 projects as a freelancer,
                      ensuring high client satisfaction.
                    </li>
                  </ul>
                </div>
                <div className="text-left text-sm" style={{ fontSize: "13px" }}>
                  <b>Software Engineer at Medbook Africa, Nairobi</b>
                  <br></br>
                  <label className="text-muted">
                    October 2019 - December 2020
                  </label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Contributed to the successful completion of 2
                      projects aimed at facilitating medical insurance claims,
                      meeting project timelines, and exceeding client
                      satisfaction.
                    </li>
                    <li>
                      Once deployed, each of the projects handled more than 2000
                      patient claims on a daily basis, thus streamlining the
                      process for patients.
                    </li>
                  </ul>
                </div>
                <b>Software Engineer at Andela, Nairobi</b>
                <br></br>
                <label className="text-muted">
                  September 2018 - September 2019
                </label>
                <br></br>
                <ul className="pl-3 text-mute">
                  <li>
                    Contributed to the development of 4 in-house Slack web
                    applications with Python, Django, and React, optimizing
                    internal staff management.
                  </li>
                  {/* <li>
                    Conducted code reviews and implemented automated testing to
                    minimize post-deployment issues, ensuring a 20% reduction in
                    production sentry issues.
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Cv;
