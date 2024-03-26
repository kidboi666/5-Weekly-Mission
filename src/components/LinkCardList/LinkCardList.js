import LinkCard from '../LinkCard/LinkCard';

export default function LinkCardList({ items }) {
  return (
    <ul className='link-card-list'>
      {items.map((item) => (
        <li key={item.id}>
          <LinkCard linkCardInfo={item} />
        </li>
      ))}
    </ul>
  );
}
