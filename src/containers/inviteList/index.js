import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './duck';
import { InviteList } from '../../components';

class InviteListContainer extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.requestInviteList(), 1500);
    this.props.receiveInviteList({
      response: ['rohit', 'Kumar', 'choudhary']
    });
  }

  render() {
    return <InviteList entries={this.props.items} />;
  }
}

const mapStateToProps = state => {
  const { items } = state.inviteList;
  return {
    items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  InviteListContainer
);
