import React from 'react';
import TextArea from '../TextArea';

class HTML extends TextArea {
  render() {
    return (
      <div className="html-editor">
        <textarea
          ref="textinput"
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          className="html-editor__textarea"
        />
      </div>
    );
  }
}

export default HTML;
