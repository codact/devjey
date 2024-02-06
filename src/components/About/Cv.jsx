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
              fontSize: "13.5px",
              backgroundColor: "#e1e6ff85",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <span style={{ fontSize: "16px" }}>
              <b>James Savali,</b>
            </span>
            <br></br>
            <strong className="text-muted">Senior Software Engineer</strong>
            <br></br>
            <br></br>
            Email: <label className="text-mutd">savalijey@gmail.com</label>
            <br></br>
            Languages: English
            <br></br>
            Portfolio:{" "}
            <a target="_blank" rel="noreferrer" href="https://devjey.com">
              devjey.com
            </a>
            <div
              className="text-left text-sm pt-3"
              style={{ fontSize: "13.5px" }}
            >
              <h6>
                <b>Skills</b>
              </h6>
            </div>
            <div className="container-fluid row" style={{ fontSize: "13.5px" }}>
              <div className="p-1">
                Languages & Frameworks
                <ul className="pl-3">
                  <li>Python</li>
                  <li>Flask, Flask Restful</li>
                  <li>Django, DRF, Graphene</li>
                  <li>Patterns: (MVC), Rest APIs and GraphQL</li>
                  <li>Bs4, Selenium, Scrapy, Numpy, Pandas</li>
                  <li>PostgreSQL, MySQL, MongoDB</li>
                  <li>Javascript</li>
                  <li>React, react-redux, react hooks</li>
                  <li>HTML/SCSS/Bootstrap/Tailwind</li>
                </ul>
              </div>
              <div className="p-1">
                Other Tech Skills & Tools
                <ul className="pl-3">
                  <li>Integration of payment solutions</li>
                  <li>
                    CI/CD: Github Actions, AWS, <br /> Digital Ocean
                  </li>
                  <li>Unit, end-to-end & integration testing</li>
                  <li>Docker and container Orchestration</li>
                  <li>Logging & Metrics tools: cloudwatch, Datadog</li>
                  <li>Testing & linting: TravisCI, CircleCI</li>
                  <li>Data scraping, analysis and visualization</li>
                </ul>
              </div>
              <div className="text-left text-sm" style={{ fontSize: "13.5px" }}>
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
            style={{ fontSize: "13.5px" }}
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

            <div className="text-left text-sm" style={{ fontSize: "13.5px" }}>
              <div className="text-left text-sm">
                <h6>
                  <b>Work Experience</b>
                </h6>
                <div
                  className="text-left text-sm"
                  style={{ fontSize: "13.5px" }}
                >
                  <b>Senior Backend Engineer at Teya</b>
                  <br></br>
                  <label className="text-muted">March 2022 - Current</label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Integrating and maintaining 2 rewards & payment solutions
                      using Python and Django.
                    </li>
                    <li>
                      Through active collaboration with the QA team, realized a
                      20% reduction in reported production bugs, improving
                      application availability.
                    </li>
                  </ul>
                </div>
                <div
                  className="text-left text-sm"
                  style={{ fontSize: "13.5px" }}
                >
                  <b>Lead Full stack Engineer at Playfooz</b>
                  <br></br>
                  <label className="text-muted">
                    November 2021 - March 2022
                  </label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Led a team of 5 in the development of ArabMillionaire, a
                      React.js and Django-based online gaming web app.
                    </li>
                    <li>
                      Achieved a web app with an intuitive user interface and
                      20k+ active users.
                    </li>
                  </ul>
                </div>
                <div
                  className="text-left text-sm"
                  style={{ fontSize: "13.5px" }}
                >
                  <b>Senior Backend Engineer at UNXD</b>
                  <br></br>
                  <label className="text-muted">June 2021 - Oct 2021</label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Orchestrated a django-based NFT auction platform,
                      successfully hosting the Dolce & Gabbana 'Collezione
                      Genesi 1' auction.
                    </li>
                    <li>
                      The cloth-piece based auction closed after generating $5.7
                      million in sales.
                    </li>
                  </ul>
                </div>
                {/* <div className="text-left text-sm" style={{ fontSize: "13.5px" }}>
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
                </div> */}
                <div
                  className="text-left text-sm"
                  style={{ fontSize: "13.5px" }}
                >
                  <b>Software Engineer at Medbook Africa, Nairobi</b>
                  <br></br>
                  <label className="text-muted">
                    October 2019 - December 2020
                  </label>
                  <br></br>
                  <ul className="pl-3 text-mute">
                    <li>
                      Played a pivotal role in delivery of 2 projects optimizing
                      the process of medical insurance claims.
                    </li>
                    <li>
                      Currently, each project handles over 2000 patient claims
                      daily.
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
                    Contributed significantly to the creation of 4 in-house web
                    applications, leveraging Python, Django, and React.
                  </li>
                  <li>
                    Accomplished a 50% reduction in wait time by implementing
                    Slack-application based algorithm to optimize internal
                    office booking for staff members.
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
