import { memo } from 'react';

export const ListItem = memo(
  ({ name, type, dimension, residents }) => {
    return (
      <div className='card bg-base-300 shadow-md animate__animated animate__fadeIn'>
        <div className='card-body'>
          <h2 className='card-title text-xl'>{name}</h2>
          <p>
            <b>Type:</b> {type}
          </p>
          <p>
            <b>Dimension:</b> {dimension}
          </p>
          <p>
            <b>Residents:</b> {residents.length}
          </p>
        </div>
      </div>
    );
  }
);

// Add display name for debugging
ListItem.displayName = 'LocationsListItem';
