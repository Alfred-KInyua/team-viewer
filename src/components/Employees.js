import { useState } from 'react';
import male from './imgassets/males.jpeg';
import female from './imgassets/females.png';

function Employees() {
  const [selectedTeam, setTeam] = useState('TeamB');
  const [employee, setEmployees] = useState([
    {
      id: 1,
      fullname: 'Grace',
      designation: 'C++ developer',
      Gender: 'Female',
      teamName: 'Team1',
    },
    {
      id: 2,
      fullname: 'Jane',
      designation: 'React developer',
      Gender: 'Female',
      teamName: 'Team1',
    },
    {
      id: 3,
      fullname: 'Chirchir',
      designation: 'NOdejs developer',
      Gender: 'Male',
      teamName: 'Team1',
    },
    {
      id: 4,
      fullname: 'Frank',
      designation: 'JavaScript developer',
      Gender: 'Male',
      teamName: 'Team2',
    },
    {
      id: 5,
      fullname: 'Alfred',
      designation: 'React Native developer',
      Gender: 'Male',
      teamName: 'Team2',
    },
    {
      id: 6,
      fullname: 'Biden',
      designation: 'Ruby developer',
      Gender: 'Male',
      teamName: 'Team2',
    },
    {
      id: 7,
      fullname: 'Lesley',
      designation: 'Ruby on Rails developer',
      Gender: 'Female',
      teamName: 'Team2',
    },
    {
      id: 8,
      fullname: 'Tommy',
      designation: 'HTML and CSS developer',
      Gender: 'Male',
      teamName: 'Team3',
    },
    {
      id: 9,
      fullname: 'Alfred',
      designation: 'Jest Unit tester',
      Gender: 'Male',
      teamName: 'Team3',
    },
    {
      id: 10,
      fullname: 'Davis',
      designation: 'Front end web developer',
      Gender: 'Male',
      teamName: 'Team3',
    },
    {
      id: 11,
      fullname: 'Rahab',
      designation: 'Postgress backend developer',
      Gender: 'Female',
      teamName: 'Team4',
    },
    {
      id: 12,
      fullname: 'Kamau',
      designation: 'Rust developer',
      Gender: 'Male',
      teamName: 'Team4',
    },
    {
      id: 13,
      fullname: 'Job',
      designation: 'Go developer',
      Gender: 'Male',
      teamName: 'Team4',
    },
  ]);
  const handleTeamSelection = (event) => {
    setTeam(event.target.value);
  };
  const handleEmployee = (event) => {
    const transformedArray = employee.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedArray);
  };
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6 mb-3">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelection}
          >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">
            {employee.map((devs) => (
              <div
                id={devs.id}
                className={
                  devs.teamName === selectedTeam
                    ? 'card m-2 standout'
                    : 'card m-2'
                }
                style={{ cursor: 'pointer' }}
                onClick={handleEmployee}
              >
                {devs.Gender === 'Male' ? (
                  <img src={male} alt="profile" className="card-img-top" />
                ) : (
                  <img src={female} alt="profile" className="card-img-top" />
                )}
                <h5 className="card-title"> Full Name: {devs.fullname}</h5>
                <p className="card-text">
                  {' '}
                  <b>Designation</b>
                  {devs.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
