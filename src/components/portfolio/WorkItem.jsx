import React from 'react';
const WorkItem = ({ item }) => {
  return (
    <div
      className='work__card'
      key={item.id}>
      <img
        src={item.image}
        alt=''
        className='work__img'
      />

      <h3 className='work__title'>{item.title}</h3>

      <a
        href={item.link}
        className='work__button'
        target='_blank'>
        Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      <a
        href={item.source}
        className='work__button button__work'
        target='_blank'>
        Source <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  );
};

export default WorkItem;
