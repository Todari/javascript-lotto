import './NumberInputField.css';

const NUMBER_INPUT_FIELD_COMPONENT = `
  <input class="number-input" type="text"></input>
`;

class NumberInputField extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = NUMBER_INPUT_FIELD_COMPONENT;
  }

  getValue() {
    return Number(this.querySelector('.number-input').value);
  }
}

customElements.define('number-input-field', NumberInputField);
