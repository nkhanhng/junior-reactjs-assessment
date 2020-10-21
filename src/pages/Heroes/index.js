import React, { useState, useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { fetchHeroes } from './control';
import HerosTable from './HerosTable';

function Heroes() {
  // eslint-disable-next-line no-unused-vars
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchHeroes().then((result) => {
      setHeroes(result);
    });
  }, []);
  return (
    <PageLayout>
      <div />
      <span>HEROES</span>
      <HerosTable data={heroes} />
    </PageLayout>
  );
}

export default memo(Heroes);
