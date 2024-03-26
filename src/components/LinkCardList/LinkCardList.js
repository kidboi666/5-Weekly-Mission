export default function LinkCardList({ items }) {
  return (
    <ul className='link-card-list'>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
