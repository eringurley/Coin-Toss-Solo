import pandaFlip from '../src/panda-flip.js';
const test = QUnit.test;

test('test for <.5 then return heads', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .49;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = pandaFlip(number);

    //Assert
    assert.equal(result, expected);
});

test('test for >=.5 then return tails', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .5;
    const expected = 'tails';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = pandaFlip(number);

    //Assert
    assert.equal(result, expected);
});