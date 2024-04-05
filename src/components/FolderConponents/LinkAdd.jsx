import styled from 'styled-components';

function LinkAdd() {
  const LinkAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0 4rem;
    box-sizing: border-box;
    background-color: var(--light-blue);

    @media (min-width: 768px) {
      padding: 2rem 0 6rem;
    }
  `;

  return (
    <>
      <LinkAdd></LinkAdd>
    </>
  );
}

export default LinkAdd;
