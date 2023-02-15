import React from 'react';

function Header({ selectedTeam, teamMemberCount }) {
  return (
    <header className="container">
      <div className="d-flex flex-column align-items-center">
        <h1>Team Member Allocation</h1>
        <h3>
          {selectedTeam} has {teamMemberCount} members
        </h3>
      </div>
    </header>
  );
}

export default Header;
