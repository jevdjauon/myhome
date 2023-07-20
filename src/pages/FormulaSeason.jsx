import { useQuery } from "@tanstack/react-query";
import formulaData from "../data/formulaTestData.json";
import { formulaFetchData } from "../helpers/formulaFetchData";

const FormulaSeason = () => {
  const nextRace = formulaData.nextRoundEvents;

  const { isLoading, error, data } = useQuery({
    queryKey: ["formulaSeason"],
    queryFn: formulaFetchData,
    staleTime: 60 * (60 * 1000),
    cacheTime: 60 * (60 * 1000),
  });

  return (
    <div>
      <h3>Next Sesion</h3>
      {data &&
        data.nextRoundEvents.map(({ startDate, summary, location, status }) => (
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
