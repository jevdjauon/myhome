import { useQuery } from "@tanstack/react-query";
import formulaData from "../data/formulaTestData.json";
import { formulaFetchData } from "../helpers/formulaFetchData";
import Loader from "../components/Loader";
import "../styles/formula.scss";
import { useEffect, useState } from "react";

const FormulaSeason = () => {
  const nextRace = formulaData.nextRoundEvents;
  const [raceDate, setRaceDate] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["formulaSeason"],
    queryFn: formulaFetchData,
    staleTime: 60 * (60 * 1000),
    cacheTime: 60 * (60 * 1000),
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="formula-container">
      {isLoading && <Loader />}
      {data &&
        data.nextRoundEvents.map(({ startDate, summary, location, status }) => (
          <div key={startDate} className="formula-event">
            <h3>Next Sesion</h3>
            <div className="race-location">
              <p>{location}</p>
              <p>{startDate}</p>
            </div>
            <div className="race-summary">
              <h2>{summary}</h2>
              <div>
                <div className="status-icon"></div>
                <p>{status}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FormulaSeason;
