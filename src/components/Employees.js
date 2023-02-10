import male from './imgassets/males.jpeg';
import female from './imgassets/females.png';

function Employees({
  selectedTeam,
  handleEmployee,
  employee,
  handleTeamSelection,
}) {
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
                key={devs.id}
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
