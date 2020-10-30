import React from 'react'
import renderer from 'react-test-renderer'
import Filter from "../../Filter/Filter"

test('Header snapshot test', () => {

    const tree = renderer.create(<Filter />)

    expect(tree).toMatchSnapshot()

})