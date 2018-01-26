import React from 'react';

class InviteList extends React.Component {
  render() {
    const { entries = [] } = this.props;
    return (
      <div>
        This is list of length :--> {this.props.entries.length}
        {entries.map(item => (
          <p>
            <br />
            {item}
          </p>
        ))}
      </div>
    );
  }
}

export default InviteList;
