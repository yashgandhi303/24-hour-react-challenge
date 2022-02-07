import styled from 'styled-components';
import NFTItem from './NFTItem';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';
import { useState } from 'react';

function NFTContainer() {
  const [active, setActive] = useState<'collectible' | 'transaction'>(
    'collectible',
  );
  const nfts = useSelector((state: IState) => state.nfts);

  return (
    <NFTContainerWrapper>
      <section className="top">
        <ToggleButton
          active={active === 'collectible'}
          onClick={() => setActive('collectible')}
        >
          Collectibles
        </ToggleButton>
        <ToggleButton
          active={active === 'transaction'}
          onClick={() => setActive('transaction')}
        >
          Transactions
        </ToggleButton>
      </section>
      <section className="bottom">
        {nfts?.map(
          (item, index) =>
            item.type === active && <NFTItem key={index} item={item} />,
        )}
      </section>
    </NFTContainerWrapper>
  );
}

const NFTContainerWrapper = styled.section`
  .top,
  .bottom {
    display: flex;
  }
  .top {
    border-bottom: solid 1px ${({ theme }) => theme.colors.text[600]};
  }

  .bottom {
    flex-direction: column;
  }
`;

const ToggleButton = styled.button<{ active?: boolean }>`
  background-color: transparent;
  padding: 12px;
  flex: 1;
  border: solid 3px transparent;
  border-bottom-color: ${({ active }) => (active ? '#000000' : 'transparent')};
  font-size: 16px;
  font-weight: 600;
  color: ${({ active, theme }) =>
    active ? theme.colors.text[100] : theme.colors.text[300]};
`;

export default NFTContainer;
