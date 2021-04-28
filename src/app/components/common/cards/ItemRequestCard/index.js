import React from 'react';
import PropTypes from 'prop-types';

import RequestBaseCard from '@common/cards/RequestBaseCard';

const ItemRequestCard = (props) => {
  const {
    itemName,
    packageName,
    amount,
    weight,
    units,
    quantity,
    ...baseProps
  } = props;

  const gothamBook2xs = 'font-gotham-book text-blue-gray text-2xs';

  return (
    <RequestBaseCard {...baseProps} imgClassName="rounded-xl h-23">
      <p className={gothamBook2xs}>{itemName}</p>
      <p className="text-blue-gray font-gotham-medium text-xs mb-1">
        {packageName}
      </p>
      <p className={gothamBook2xs}>
        <span>{amount}</span>
        <span className="mx-3 font-gotham-medium">|</span>
        <span>
          {weight} {units}
        </span>
      </p>
      <div className="flex mt-1">
        <div className="mr-1 flex items-center">
          <p className={`${gothamBook2xs} mt-0.5`}>QTY:</p>
        </div>
        <p className="text-blue-gray font-gotham-bold text-sm">{quantity}</p>
      </div>
    </RequestBaseCard>
  );
};

ItemRequestCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  packageName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default ItemRequestCard;
