import React from 'react'
import renderer from 'react-test-renderer'
import App from "../App.tsx"

test('App snapshot test', () => {

    const tree = renderer.create(<App />)

    expect(tree).toMatchSnapshot()

})
