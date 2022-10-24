import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import Teams from '@/components/Teams/Teams';

import { getAllTeams } from '@/redux/teams';
import { MESSAGES } from '@/constants';

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

  // TODO - implement loading and error
  // render chakra-ui spinner or skeleton, maybe extract out to useLoading hook
  // const renderContent = () => {
  //   if (loading) {
  //     return <h3>Loading Teams...</h3>;
  //   }

  //   if (error) {
  //     return (
  //       <h3>
  //         {MESSAGES.errors.default}
  //         {error}
  //       </h3>
  //     );
  //   }
  // };

  return (
    <div>
      <Head>
        <title>{MESSAGES.title}</title>
        <meta name="description" content="NHL Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Teams />
    </div>
  );
}
