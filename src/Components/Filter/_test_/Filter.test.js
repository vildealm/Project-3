import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

it( "renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<div></div>, div)
})

/*it("renders button correctly", () => {
    const [getByTestId] = render(<span data-testit ="nextButtonTest" id="buttonAppear" className="navigationButton" onClick={previousPage}></span>
    );
    expect(getByTestId('nextButtonTest')).toHaveTextContent("");
})*/

