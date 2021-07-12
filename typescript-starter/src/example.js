const assert = require("assert");
const {parseNumber} = require("./split-file");

parseNumber('../../inputs/use_case_1/123456789', function ( number ) {
	assert.equal(number, '123456789', 'This works!')
})

parseNumber('../../inputs/use_case_1/000000000', function ( number ) {
	assert.equal(number, '000000000', 'This works!')
})

parseNumber('../../inputs/use_case_1/111111111', function ( number ) {
	assert.equal(number, '111111111', 'This works!')
})

