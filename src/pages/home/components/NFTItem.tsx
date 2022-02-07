import styled from 'styled-components';
import { INFT } from '@store/types';

type Props = {
  item: INFT;
};

function NFTItem({ item }: Props) {
  return (
    <ItemWrapper>
      <section className="image" />
      <section className="details">
        <h4 className="title">{item?.name}</h4>
        <p className="description">
          by <span>{item?.user}</span>
        </p>
      </section>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 8px 0;
  gap: 8px;

  .image {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.text[600]};
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .title {
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }

    .description {
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text[300]};

      span {
        color: ${({ theme }) => theme.colors.accent[2]};
      }
    }
  }
`;

export default NFTItem;
