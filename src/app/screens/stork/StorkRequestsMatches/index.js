/**
 * Link to zeplin -> No screen in zeplin
 */

import React from 'react';

import RequestCard from '@common/cards/RequestCard';
import { cairoRequests } from './mocks';

const PatronPostsRequests = () => {
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  const onClickCard = () => () => {};

  return (
    <>
      <p className={regionTitleClass}>CAIRO</p>
      {cairoRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard {...props} onClick={onClickCard({ id, ...props })} />
        </div>
      ))}
    </>
  );
};

export default PatronPostsRequests;
