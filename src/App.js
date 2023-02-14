import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'teamB'
  );

  const [employee, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeeList')) || [
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
    ]
  );
  useEffect(() => {
    localStorage.setItem('EmployeeList', JSON.stringify(employee));
  }, [employee]);
  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

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
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employee.filter((emp) => emp.teamName === selectedTeam).length
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              handleEmployee={handleEmployee}
              handleTeamSelection={handleTeamSelection}
              employee={employee}
              selectedTeam={selectedTeam}
            />
          }
        ></Route>
        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupedTeamMembers
              handleEmployee={handleEmployee}
              handleTeamSelection={handleTeamSelection}
              employee={employee}
              selectedTeam={selectedTeam}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
