import React from "react"
import TeamCard from "../../Components/TeamCard/TeamCard"
import "./Team.css"
import teamsData from "./data"

export default function Team() {
  return (
    <div className="teamBody">
      <div className="teamWrapper">
        <div className="teamsContentWrapper">
          <div className="teamHeaderWrapper">
            <div className="teamHeader">
              <h1 className="font-hero text-center font-semibold text-4xl">
                Meet the Team
              </h1>
            </div>
          </div>
          {teamsData.map((team) => (
            <div key={team.name} className="teamContainer">
              <h2 className="font-hero">{team.name}</h2>
              <div className="teamCardWrapper">
                {team.members.map((member) => (
                  <TeamCard data={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
