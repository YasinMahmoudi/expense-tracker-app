import ListItem from './ListItem';

function List({ list, onDelete, onEditForm }) {
  return (
    <ul className='list'>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEditForm={onEditForm}
        />
      ))}
    </ul>
  );
}

export default List;
