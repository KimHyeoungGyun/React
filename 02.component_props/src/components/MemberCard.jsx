import React from 'react'

const MemberCard = ({ team, name }) => {
  console.log(team, name)
  return (
    <div className="container">
      <div className="MemberCard">
        <h3>{team}</h3>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default MemberCard
