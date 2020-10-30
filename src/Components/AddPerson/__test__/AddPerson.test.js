import React from 'react'
import renderer from 'react-test-renderer'
import AddPerson from "../Components/AddPerson/AddPerson"

test('Header snapshot test', () => {

    const tree = renderer.create(<AddPerson />)

    expect(tree).toMatchSnapshot()

})