import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';
import Board from '../js/components/board';

const renderer = TestUtils.createRenderer();
const result = renderer.getRenderOutput();



describe('Card component',function() {

	it('Returns a div with text inside of it ', function() {


		const text = "something";

		renderer.render(<Card text="something"/>)
		const result = renderer.getRenderOutput();
		result.props.children.should.equal(text);
		result.props.className.should.equal('card');
		result.type.should.equal('div');
	})


})

describe('List component', function() {


	it(' Should return a list of three cards', function() {
		var cards= [{
			value: 'Cardrd 1'
		}]
		const renderer = TestUtils.createRenderer();

		renderer.render(<List cards={cards}/>)
		const result = renderer.getRenderOutput();
		result.props.children[0].props.text.should.equal('Cardrd 1');
		result.props.children[0].type.should.equal(Card);
		result.props.children.length.should.equal(1);
		result.props.className.should.equal('list');

	});
});

describe ('Board component', function() {

	it('Should render three lists', function() {


		renderer.render(<Board cards={cards}/>)
		const result = renderer.getRenderOutput();

	})

})