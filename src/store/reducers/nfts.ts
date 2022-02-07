import { GET_NFTS } from '../actionTypes';
import { nfts } from '@src/constants';
interface IAction {
  type: typeof GET_NFTS;
}

function nftsReducer(state = nfts, action: IAction) {
  switch (action.type) {
    case GET_NFTS:
      return state;
    default:
      return state;
  }
}

export default nftsReducer;
