import sensitiveWords from "."

describe( `Module when called`, () => {
	
	it( "should return a string", () =>
		expect( typeof sensitiveWords() ).toBe( "string" ) )
	
	it( "should return a Wuuuuut", () =>
		expect( sensitiveWords() ).toBe( "Wuuuuut" ) )
	
} )
