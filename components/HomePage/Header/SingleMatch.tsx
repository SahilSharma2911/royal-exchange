import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface ScoreData {
  title: string;
  update: string;
  livescore: string;
  runrate: string;
  batterone: string;
  batsmanonerun: string;
  batsmanoneball: string;
  batsmanonesr: string;
  battertwo: string;
  batsmantworun: string;
  batsmantwoball: string;
  batsmantwosr: string;
  bowlerone: string;
  bowleroneover: string;
  bowleronerun: string;
  bowleronewickers: string;
  bowleroneeconomy: string;
  bowlertwo: string;
  bowlertwoover: string;
  bowlertworun: string;
  bowlertwowickers: string;
  bowlertwoeconomy: string;
}

const SingleMatch = (match_id: any) => {
  console.log("score id", match_id.match_id)
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(true);
  console.log("score data", scoreData)

  useEffect(() => {
    const fetchScore = async () => {
      try {
        setLoading(true);
        // Using local API route instead of direct API call
        const response = await axios.get(`/api/score?id=${match_id.match_id}`);
        setScoreData(response.data);
      } catch (err) {
        console.log("failed to fetch score", err)
      } finally {
        setLoading(false);
      }
    };

    if (match_id) {
      fetchScore();
    }
  }, [match_id]);
  if (!match_id) {
    return <div>No match ID provided</div>;
  }

  if (loading) {
    return <div>Loading score...</div>;
  }
  return (
    <section className="mx-2 rounded-xl bg-white">
      <div className="space-y-1 py-2 px-6">
        {/* heading */}
        <h3 className="text-[#48494A]">
          <span className="font-bold mr-1">RESULT</span>•
          <span className="mx-2">{scoreData?.title || "Match Info"}</span>•
        </h3>

        <div className="space-y-2">
          {/* team-1 */}
          <p className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="h-5 w-7 overflow-hidden rounded-sm bg-gray-300">
                {/* Add flag or team logo here if available */}
              </span>
              <p className="text-[#2B2C2D] font-bold">
                {scoreData?.batterone !== "Data Not Found"
                  ? scoreData?.batterone
                  : "Team 1"}
              </p>
            </span>
            <p className="text-[#2B2C2D] font-bold">
              {scoreData?.batsmanonerun !== "Data Not Found"
                ? scoreData?.batsmanonerun
                : "-"}
            </p>
          </p>

          {/* team-2 */}
          <p className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="h-5 w-7 overflow-hidden rounded-sm bg-gray-300">
                {/* Add flag or team logo here if available */}
              </span>
              <p className="text-[#2B2C2D] font-bold">
                {scoreData?.battertwo !== "Data Not Found"
                  ? scoreData?.battertwo
                  : "Team 2"}
              </p>
            </span>
            <p className="text-[#2B2C2D] font-bold">
              {scoreData?.batsmantworun !== "Data Not Found"
                ? scoreData?.batsmantworun
                : "-"}
            </p>
          </p>

          {/* final result */}
          <p className="text-[#2B2C2D] font-bold">
            {scoreData?.update !== "Data Not Found" ? scoreData?.update : "No Result"}
          </p>
        </div>
      </div>
      <hr />

      {/* other links */}
      <div className="bg-white rounded-b-xl pb-1.5 pt-1 px-6 text-[15px]">
        <ul className="flex gap-2">
          {/* Placeholder for future links */}
        </ul>
      </div>
    </section>

  )
}

export default SingleMatch
