"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

interface Match {
    id: number;
    match_id: string;
    match_status: string;
    created_at: string;
    updated_at: string;
}

interface MatchesApiResponse {
    status: string;
    data: Match[];
}


const UpcommingMatces = () => {
    const [upcomingMatches, setUpcomingMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                setLoading(true);
                const response = await axios.get<MatchesApiResponse>(
                    'https://ghostpanel.tech/api/matches'
                );
                const upcommingMatches = response.data.data.filter(
                    (match) => match.match_status === 'upcoming'
                );
                setUpcomingMatches(upcommingMatches);
            } catch (err) {
                console.log('Failed to fetch matches data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div>Loading matches...</div>;
    }

    if (!upcomingMatches.length) {
        return <div className="font-Lato w-full  px-4 sm:px-8 lg:px-0">
            <h2 className="text-xl sm:text-2xl font-bold w-full mx-auto flex justify-center items-center mb-3">
                Upcoming Matches
            </h2>
            No matches available
        </div>;
    }
    return (
        <div className="font-Lato w-full  px-4 sm:px-8 lg:px-0">
            <h2 className="text-xl sm:text-2xl font-bold w-full mx-auto flex justify-center items-center">
                Upcoming Matches
            </h2>
            <div className='space-y-10 lg:w-[70%]'>
                {upcomingMatches?.map((item) => (
                    <MatchCard match_id={item.match_id} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default UpcommingMatces;
