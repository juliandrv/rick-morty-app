import { memo } from 'react';
import { Link } from 'react-router';

export const ListItem = memo(({ id, image, name }) => {
  return (
    <Link
      to={`/characters/${id}`}
      className='card bg-base-300 shadow-md relative animate__animated animate__fadeIn'
    >
      <figure>
        <img
          src={image}
          alt={name}
          className='w-full h-64 object-cover hover:scale-110 hover:rotate-2 transition-transform duration-300'
          loading='lazy'
        />
      </figure>
      <div className='card-body absolute bottom-0 left-0 right-0 bg-black/80 p-2'>
        <h2 className='card-title  inline-block text-center font-bold tracking-wide text-white'>
          {name}
        </h2>
      </div>
    </Link>
  );
});

// Add display name for debugging
ListItem.displayName = 'CharactersListItem';
