import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { fetchTeamData } from '@api/teamsRequest';

const HEADING = 'NHL Team Dashboard';

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  console.log({ teams, loading, error });

  const fetchTeams = async () => {
    try {
      setLoading(true);
      const { data } = await fetchTeamData();
      setTeams(data.teams);
    } catch (err) {
      console.log('err:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const renderContent = () => {
    if (loading) {
      console.log('render loading');
      return <h3>Loading Teams...</h3>;
    }

    if (error) {
      console.log('render error');
      return <h3>There was an error: {error}</h3>;
    }

    return teams.map(team => (
      <li key={team.teamName}>
        <Link href={`/${team.teamName.toLowerCase()}`}>
          <a>{team.name}</a>
        </Link>
      </li>
    ));
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NHL Team Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{HEADING}</h1>
        <section>
          <ul>{renderContent()}</ul>
        </section>
      </main>
    </div>
  );
}
