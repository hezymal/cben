import { connect } from 'react-redux';
import TextView from './TextView';

const mapStateToProps = (state) => {
  return {
    text: state.empty.text,
  }
}

const HelloWorldView = connect(mapStateToProps)(TextView);

export default HelloWorldView;
