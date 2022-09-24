import {bindActionCreators} from 'redux';
import {actionCreators} from '../action-creators';
import {useDispatch} from 'react-redux';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
