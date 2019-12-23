import { App } from './App';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../store/actions';
import { IAppState } from '../../store/index';

const mapStateToProps = (state: IAppState) => {
  return {
    count: state.counter
  };
};

const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


