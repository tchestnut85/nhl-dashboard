import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';

import { getAllTeams } from '@redux/teams';

const HEADING = 'NHL Team Dashboard';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { teams, error } = useSelector(state => state.team);

  const getTeams = () => {
    console.log('getTeams invoked');
    try {
      setLoading(true);
      dispatch(getAllTeams());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeams();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderContent = () => {
    if (loading) {
      return <h3>Loading Teams...</h3>;
    }

    if (error) {
      return <h3>There was an error: {error}</h3>;
    }

    return teams?.map(team => {
      return (
        <li key={team.teamName}>
          <Link href={`/teams/${team.teamName.toLowerCase()}`}>
            <a>{team.name}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <Head>
        <title>NHL Dashboard</title>
        <meta name="description" content="NHL Dashboard" />
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
