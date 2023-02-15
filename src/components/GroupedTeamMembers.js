import React, { useState } from 'react';

function GroupedTeamMembers({ employees, selectedTeams, setTeams }) {
  const [groupedEmployees, groupedData] = useState();
  return (
    <header className="container">
      <div className="d-flex flex-column align-items-center">
        <h1>GroupedTeamMembers</h1>
      </div>
    </header>
  );
}

export default GroupedTeamMembers;
