function ListItem({ item, onDelete, onEditForm }) {
  return (
    <li
      className='list-item'
      style={
        item.amount < 0 ? { borderColor: 'crimson' } : { borderColor: 'green' }
      }>
      <span className='description'> {item.description} </span>
      <span className='amount'>
        ${new Intl.NumberFormat(navigator.language).format(item.amount)}
      </span>
      <div className='actions'>
        <button className='btn btn--red' onClick={() => onDelete(item.id)}>
          Delete
        </button>
        <button className='btn btn--info' onClick={() => onEditForm(item.id)}>
          Edit
        </button>
      </div>
    </li>
  );
}

export default ListItem;
