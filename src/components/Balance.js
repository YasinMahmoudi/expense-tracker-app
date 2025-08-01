function Balance({ list }) {
  const balance = list.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <h2
      className='title title--bolder'
      style={balance > 0 ? { color: 'green' } : { color: 'crimson' }}>
      ${new Intl.NumberFormat(navigator.language).format(balance)}
    </h2>
  );
}

export default Balance;
