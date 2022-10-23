import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

import { getAllTeams } from '@redux/teams';
import { MESSAGES, NHL_API_URL } from '@constants';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { teams, error } = useSelector(state => state.team);

  const getTeams = () => {
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
    if (!teams.length) {
      getTeams();
    }
  }, [teams]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderContent = () => {
    if (loading) {
      // TODO - render chakra-ui spinner or skeleton, maybe extract out to useLoading hook
      return <h3>Loading Teams...</h3>;
    }

    if (error) {
      return (
        <h3>
          {MESSAGES.errors.default}
          {error}
        </h3>
      );
    }

    return teams?.map(team => {
      return (
        <li key={team.teamName}>
          <Link href={`${NHL_API_URL.teams}${team.teamName.toLowerCase()}`}>
            <a>{team.name}</a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <Head>
        <title>{MESSAGES.title}</title>
        <meta name="description" content="NHL Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* // TODO - move the main element into a separate Teams component */}
      <main>
        <Text as="h2" fontSize="4xl">
          {MESSAGES.teamsPage.heading}
        </Text>
        <section>
          <ul>{renderContent()}</ul>
        </section>
      </main>
    </div>
  );
}
