import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Teams from '@/components/Teams/Teams';

import { getAllTeams, clearCurrentTeam } from '@/redux/teams';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { teams, error } = useSelector(state => state.team);

  // TODO - add redux action etc to clear the currentTeam state on load

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

  const handleClearTeam = () => dispatch(clearCurrentTeam());

  useEffect(() => {
    handleClearTeam();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  return <Teams />;
}
