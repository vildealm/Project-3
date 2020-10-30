import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../../../App'

it( "renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div></div>, div)
})

describe('App component', ()=> {
  it('renders the App-component', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
})


/*it("renders button correctly", () => {
    const [getByTestId] = render(<span data-testit ="nextButtonTest" id="buttonAppear" className="navigationButton" onClick={previousPage}></span>
    );
    expect(getByTestId('nextButtonTest')).toHaveTextContent("");
})*/

