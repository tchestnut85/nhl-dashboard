import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Teams from '@/components/Teams/Teams';

import { getAllTeams, clearCurrentTeam } from '@/redux/teams';

export default function Home() {
  const dispatch = useDispatch();
  const { teams } = useSelector(state => state.team);

  const getTeams = () => {
    try {
      dispatch(getAllTeams());
    } catch (err) {
      console.error(err);
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

  return <Teams />;
}
