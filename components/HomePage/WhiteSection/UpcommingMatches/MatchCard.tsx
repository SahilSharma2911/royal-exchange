import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

interface MatchCardProps {
  match_id: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ match_id }) => {
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/score?id=${match_id}`);
        setScoreData(response.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch score:', err);
        setError('Failed to fetch score data.');
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

  if (error) {
    return <div>{error}</div>;
  }

  if (!scoreData) {
    return <div>No data available for this match</div>;
  }

  const isUpcoming = scoreData.update.toLowerCase() === "upcoming";

  return (
    <div className="flex flex-col lg:flex-row mt-7 border-2 border-[#FEF9E8] shadow-sm rounded-md">
      {/* Date & Time Section */}
      <div className="relative bg-[#FEF9E8] flex flex-col items-center justify-center px-6 py-4 sm:px-10 sm:py-6 text-center lg:w-1/3">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 bg-[#3A225D] text-white text-xs sm:text-sm px-4 sm:px-7 py-1 sm:py-2 rounded-md">
          Upcoming
        </div>
        <h3 className="font-bold text-base sm:text-lg md:text-xl">{scoreData.title}</h3>
        <p className="text-sm sm:text-base">{isUpcoming ? "Match starts soon" : scoreData.livescore}</p>
      </div>

      {/* Match Info Section */}
      <div className="px-4 sm:px-8 py-4 sm:py-6 w-full lg:w-2/3">
        <h3 className="text-sm sm:text-base md:text-lg text-[#424242] font-semibold">
          {scoreData.title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-[#757575] border-b pb-2">
          {isUpcoming ? "Saxton Oval, Nelson" : `Run Rate: ${scoreData.runrate}`}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 mt-2">
          {/* Team 1 */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full">
              {/* Add Image if needed */}
            </div>
            <p className="text-sm sm:text-base font-bold">New Zealand</p>
          </div>

          {/* VS Text */}
          <span className="bg-[#EEEEEE] rounded-full px-2 py-1 text-xs sm:text-sm text-[#38383D] font-bold">
            Vs
          </span>

          {/* Team 2 */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full">
              {/* Add Image if needed */}
            </div>
            <p className="text-sm sm:text-base font-bold">Sri Lanka</p>
          </div>
        </div>

        {/* {!isUpcoming && (
          <div className="mt-4">
            <p className="text-sm sm:text-base font-semibold">
              Bowler 1: {scoreData.bowlerone} - {scoreData.bowleronerun}/{scoreData.bowleronewickers} in {scoreData.bowleroneover} overs
            </p>
            <p className="text-sm sm:text-base font-semibold">
              Bowler 2: {scoreData.bowlertwo} - {scoreData.bowlertworun}/{scoreData.bowlertwowickers} in {scoreData.bowlertwoover} overs
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MatchCard;
