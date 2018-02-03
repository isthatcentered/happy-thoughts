import sensitiveWords from "."

describe( `Module when called`, () => {
	
	it( "should return a string", () =>
		expect( typeof sensitiveWords() ).toBe( "string" ) )
	
	
	describe( `When passed string with one blacklisted word`, () =>
		it( `should replace blacklisted word with "***"`, () =>
			expect( sensitiveWords( `Kill Bill`, [ "Bill" ] ) ).toBe( "Kill ***" ) ) )
	
	describe( `When passed string with multiple blacklisted words`,
		() => it( `should replace blacklisted words with "***"`, () =>
			expect( sensitiveWords( `Kill Bill and Roger`, [ "Bill", "Roger" ] ) ).toBe( "Kill *** and ***" ) ) )
} )
