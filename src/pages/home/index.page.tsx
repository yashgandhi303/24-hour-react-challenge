import styled from 'styled-components';
import HomeBar from './components/HomeBar';
import { Button } from '@components/ui';
import NFTContainer from './components/NFTContainer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';
import { useRouter } from 'next/router';

function Home() {
  const user = useSelector((state: IState) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user?.accountId) {
      router.replace('/register');
    }
  }, [user, router]);

  return (
    <HomeWrapper>
      <HomeBar />
      <HomeBody>
        <section className="start">
          <StartBox position="left">
            <h3 className="text black">Contacts</h3>
          </StartBox>
          <StartBox position="right">
            <h3 className="text white">web3 Apps</h3>
          </StartBox>
        </section>
        <section className="center">
          <h4 className="center-text">Start Creating your NFT Today</h4>
          <Button accent>Create NFT</Button>
        </section>
        <section className="end">
          <NFTContainer />
        </section>
      </HomeBody>
    </HomeWrapper>
  );
}

const HomeBody = styled.section`
  padding: 14px 10.98px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  .start,
  .center,
  .end {
    display: flex;
  }

  .start {
    gap: 11px;
  }

  .end,
  .center {
    flex-direction: column;
  }

  .center {
    height: 168px;
    border-radius: 10px;
    background-color: #f7e9ff;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 16px;
    align-items: flex-start;
    justify-content: center;

    .center-text {
      font-weight: 600;
      font-size: 22px;
      /* line-height: 20.05; */
    }
  }
`;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StartBox = styled.section<{ position: 'left' | 'right' }>`
  height: 99px;
  flex: 1;
  border-radius: 10px;
  background-color: ${({ position, theme }) =>
    position === 'left' ? '#f5f5f4' : theme.colors.accent[2]};
  display: flex;
  flex-direction: column;
  padding: 8px;

  .text {
    font-weight: 600;
    font-size: 16px;
    line-height: 21.86px;

    &.black {
      color: ${({ theme }) => theme.colors.text[200]};
    }

    &.white {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default Home;
