import React from "react";
import styles from "./Counter.module.css";
import { marked } from "marked";
import {connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
//const element = <FontAwesomeIcon icon="fas fa-angle-double-right" />

const pencil = <FontAwesomeIcon icon={solid('pencil')} />

export class Markdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: this.props.counter.message,
    };
    this.handleChange = this.handleChange.bind(this);
    this.markedUp = this.markedUp.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  markedUp(mensa) {
    return { __html: marked.parse(mensa, { breaks: true }) };
  };

  render() {
    return (
      <div className="container">
        <div class={styles.editor}>

<div class="md-form mb-4 pink-textarea active-pink-textarea-2">
  <div>
  <label for="editor"><h1>Markdown Editor</h1></label>
  </div>
  <i>{pencil}</i>
  <textarea id="editor"
            defaultValue={this.props.counter.message}
            onChange={this.handleChange} class={styles.textbox} rows="10"></textarea>

</div>

        </div>
        <div class={styles.value} >
          <h1 style={{color: "red", fontSize: 40}} className="brand">Markdown previewer</h1>
          <div
            id='preview'
            dangerouslySetInnerHTML={this.markedUp(this.state.input)}
          ></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

//Conexión React/Redux
export const Container = connect(mapStateToProps)(Markdown);