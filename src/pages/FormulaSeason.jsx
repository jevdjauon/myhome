import formulaData from "../data/formulaTestData.json";

const FormulaSeason = () => {
  const nextRace = formulaData.nextRoundEvents;

  return (
    <div>
      <h3>Next Sesion</h3>
      {nextRace.map(({ startDate, summary, location, status }) => (
        <div key={startDate} style={{ margin: "20px" }}>
          <div>
            <p>{location}</p>
            <p>{startDate}</p>
          </div>
          <h3>{summary}</h3>
          <div>
            <div className="status-icon"></div>
            <p>{status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormulaSeason;
