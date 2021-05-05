import React from 'react'
import './InputCount.scss'

/**
 * Component for render an input or textarea with character counter
 */
export default class InputCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Set the state of the value to the current input value
   * @param {event} event event of the changed input
   */
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.getData(event.target.value.trim() && this.state.value.length >= this.props.min && this.state.value.length <= this.props.max)
  }

  /**
   * Renders the component with some fields conditioned by its props (max and min values)
   * @returns element
   */
  render() {
    const input = <input type="text" className="input" placeholder={this.props.placeholder} onChange={this.handleChange} />
    const textarea = <textarea className="textarea" placeholder={this.props.placeholder} onChange={this.handleChange}></textarea>
    const max = (this.props.max)
      ? <><span className="inputCount__chars">{this.state.value.length}</span> / <span className="inputCount__maxChars">{this.props.max}</span></>
      : ``
    const min = (this.props.min)
      ? <>(mín. {<span className="inputCount__minChars">{this.props.min}</span>})</>
      : ``
    return (
      <div className={`inputCount--${this.props.type} inputCount`}>
        {(this.props.type === 'textarea') ? textarea : input}
        <div className={(this.state.value.length >= this.props.min && this.state.value.length <= this.props.max) ? 'inputCount__check ok' : (this.state.value.length === 0) ? 'inputCount__check' : 'inputCount__check ko'}>{max}  {min}</div>
      </div>
    )
  }
}
