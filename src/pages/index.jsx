import Head from 'next/head';
import Link from 'next/link';

import { getAllTeams } from '@api/teamsRequest';
import { useRequest } from '@hooks/useRequest';

const HEADING = 'NHL Team Dashboard';

export default function Home() {
  const {
    data: { teams },
    loading,
    error,
  } = useRequest(getAllTeams);

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
