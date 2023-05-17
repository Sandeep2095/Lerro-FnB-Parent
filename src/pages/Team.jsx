import React from "react";
import teambanner from "../assets/teambanner.jpg";
import founder from "../assets/director-img.jpg";
import Banner from "../components/shared/banner/Banner";
import teamMember1 from "../assets/team-member-1.jpg";
import teamMember2 from "../assets/team-member-2.jpg";
import teamMember3 from "../assets/team-member-3.jpg";
import teamMember4 from "../assets/team-member-1.jpg";
import teamMember5 from "../assets/team-member-2.jpg";

const Team = () => {
  const teamMembers = [
    { id: 1, src: teamMember1, name: "first name", rank: "Chairman" },
    { id: 2, src: teamMember2, name: "second name", rank: "Director " },
    { id: 3, src: teamMember3, name: "third name", rank: "Corporate Chef" },
    { id: 4, src: teamMember4, name: "fourth name", rank: "Franchise Lead" },
    { id: 5, src: teamMember5, name: "fifth name", rank: "unknown" },
  ];

  return (
    <div>
      <Banner title={"meet the Team"} bgImg={teambanner}></Banner>

      {/* founder introduction */}
      <div className="container-lg">
        <div className="row justify-content-center align-items-start my-4 mx-auto">
          <div className="col-md-4 p-2 border-2 shadow bg-body rounded">
            <img className="w-100 rounded" src={founder} alt="founder" />
          </div>
          <div className="col-md-7 p-4 border-2 p-2">
            <h2 className="text-uppercase">Mr. Ashutosh Vibhu</h2>
            <h5>C.E.O & M.D</h5>
            <p
              style={{
                letterSpacing: "1px",
                wordSpacing: "2px",
                paddingTop: "20px",
                fontWeight: "300",
                textAlign: "justify",
                lineHeight: "1.8",
              }}
              className="text-justify"
            >
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a business
              tycoon in the hospitality industry. Once he began, there was no
              stopping this entrepreneur from reaching the heights he has
              reached today. It is the passion and creative streak of Priyank
              Sukhija that has made him the most watched-out restaurateur of
              today’s time. Coming from a family of lawyers, he ventured into
              the business world on his own with Lazeez Affaire in 1999 and has
              never looked back since.
            </p>
            <div className="d-flex justify-content-center align-items-center my-4 social-icons">
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              &nbsp; &nbsp;{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
              &nbsp; &nbsp;{" "}
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              &nbsp; &nbsp;{" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* team members details */}
        <div className="row align-items-center my-4 mx-auto">
          {teamMembers.map((member) => (
            <div className="col-md-4 col-sm-6 shadow" key={member.id}>
              <div className="profile-container position-relative my-4 bg-body rounded">
                <img
                  className="w-100"
                  src={member.src}
                  alt={`team member ${member.id}`}
                />
                <div className="position-absolute w-100 profile-content-box">
                  {" "}
                  <h3 style={{fontSize:"22px",lineHeight:"1.6",color:"#fff",letterSpacing:"1px"}} className="text-uppercase text-center fw-bold">
                    {member.name}{" "}
                    <span style={{fontSize:"15px"}} className="d-block fw-normal"> {member.rank}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
