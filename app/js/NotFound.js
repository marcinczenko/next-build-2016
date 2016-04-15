import React from 'react'
import Paper from 'material-ui/Paper';

class NotFound extends React.Component {
  render() {
    const style = {
      overflow: 'auto',
      color: 'gray',
      textAlign: 'center',
      fontSize: 26
    };
    return (
        <div className="row">
          <Paper style={style} zDepth={2}>
            <p>And what are you looking for here?</p>
          </Paper>
        </div>
    )
  }
}

export default NotFound
