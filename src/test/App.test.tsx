import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import App from '../App';
import Modal from 'react-modal'



describe('App component', ()=> {
  it('renders the App-component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
})

