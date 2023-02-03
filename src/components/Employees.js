import React from 'react';
import { useState } from 'react';
import male from './imgassets/males.jpeg';
import female from './imgassets/females.png';

function Employees() {
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
  return (
    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div className="card-collection">
            {employee.map((devs) => (
              <div key={devs.id} className="card">
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
