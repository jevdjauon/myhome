import { useQuery } from "@tanstack/react-query";
import { liveScoreFetchData } from "../helpers/liveScoresFetchData";
import "../styles/liveScores.scss";

const LiveScores = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["live-scores"],
    queryFn: liveScoreFetchData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const liveData = data.Stages;

  return (
    <div className="live-scores-page">
      <h3>Live Scores</h3>
      {liveData.map(({ Cnm, CompD, Snm, Events }) => (
        <div className="live-scores-container">
          <h4>
            {CompD} {Cnm}
          </h4>
          <p>{Snm}</p>
          <div className="stages-container">
            {Events.map(({ T1, T2, Tr1, Tr2, Eps }) => (
              <div className="event-container">
                <h5>{Eps}</h5>
                <div className="event-item">
                  <div className="team-container">
                    <div className="team-info">
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${T1[0].Img}`}
                        alt=""
                      />
                      <p>
                        {T1[0].Nm}
                        <span> {T1[0].CoId}</span>
                      </p>
                    </div>

                    <p>{Tr1}</p>
                  </div>

                  <div className="team-container">
                    <div className="team-info">
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${T2[0].Img}`}
                        alt=""
                      />
                      <p>
                        {T2[0].Nm}
                        <span> {T2[0].CoId}</span>
                      </p>
                    </div>

                    <p>{Tr2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveScores;
