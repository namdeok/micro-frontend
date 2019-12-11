import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import App from './App';

class ReactElement extends HTMLElement {
  
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return ['selectedvalue','toggle'];
    }
    connectedCallback() {
      this._innerHTML = this.innerHTML;
      this.mount();
    }
  
    disconnectedCallback() {
      this.unmount();
    }
  
    update() {
      this.unmount();
      this.mount();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case 'selectedvalue':
          console.log(`Value changed from ${oldValue} to ${newValue}`);
          this.mount()
          break;
        case 'toggle':
        console.log(`Value changed from ${oldValue} to ${newValue}`);
        this.mount()
        break;  
      }
    }
    mount() {
      const props ={ 
        selectedvalue: this.getAttribute("selectedvalue"),
        toggleval: this.getAttribute("toggle")
    }
      render(<App  {...props}/>, this);
      
    }
  
    unmount() {
      unmountComponentAtNode(this);
    }
  
  }
  
  customElements.define('react-app', ReactElement);
