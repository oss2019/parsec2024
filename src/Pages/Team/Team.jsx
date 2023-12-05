import React from "react";
import "./Team.css";
import teamsData from "./data";

const prefix = "";
export default function Team() {
  return (
    <div className="teamBody">
      <div className="teamWrapper">
        <div className="teamsContentWrapper">
          <div className="teamHeaderWrapper">
            <div className="teamHeader">
              <h1>Meet the Team</h1>
            </div>
          </div>
          {teamsData.map((team) => (
            <div key={team.name} className="teamContainer">
              <h2>{team.name}</h2>
              <div className="teamCardWrapper">
                {team.members.map((member) => (
                  <div key={member.name} className="teamCardContainer">
                    <div key={member.name} className="teamCard">
                      <div>
                        <img
                          src={prefix + member.image}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="memberImage"
                          priority
                        />
                      </div>
                      <div className="memberInfo">
                        <h3>{member.name}</h3>
                        <div className="memberLinks">
                          <a
                            href={`mailto:${member.email}`}
                            className="linkImageWrapper email"
                          >
                            <img
                              //   className={styles.linkImage}
                              src={prefix + "/Team/Logo/gmail1.png"}
                              width={20}
                              height={20}
                              priority
                              alt="Team Member Logo"
                            />
                          </a>
                          {member.linkedin && (
                            <a
                              className="linkImageWrapper linkedin"
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                // className={styles.linkImage}
                                src={prefix + "/Team/Logo/linkedin1.png"}
                                width={20}
                                height={20}
                                priority
                                alt="Link Image"
                              />
                            </a>
                          )}
                          {member.twitter && (
                            <a
                              className="linkImageWrapper twitter"
                              href={member.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                // className={styles.linkImage}
                                src={prefix + "/Team/Logo/twitter1.png"}
                                width={20}
                                height={20}
                                priority
                              />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              className="linkImageWrapper instagram"
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                // className={styles.linkImage}
                                src={prefix + "/Team/Logo/instagram.png"}
                                width={20}
                                height={20}
                                priority
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
