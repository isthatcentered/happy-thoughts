import happyThoughts from "./index"

describe( `Module when called`, () => {
	
	describe( `When passed no string`, () =>
		it( `should throw`, () =>
			expect( () => happyThoughts() )
				.toThrow() ) )
	
	describe( `When passed no blacklist`, () =>
		it( `should throw`, () =>
			expect( () => happyThoughts( "I passed a string but no blacklist" ) )
				.toThrow() ) )
	
	describe( `When passed string with blacklisted words`, () => {
		
		it( `should remove blacklisted words from string`, () => {
			
			const _blacklist = [ "looser", "bore" ],
				_result = happyThoughts( `Batman says Clark Kent's a looser and a bit of a bore`, _blacklist )
			
			_blacklist.forEach( word =>
				expect( _result.includes( word ) ).toBe( false ) )
		} )
		
		// @todo: add blacklisted word replaced with any of emoji test
		
		it( `should not mutate original string`, () => {
			
			const _phrase = "Wuuuuut, unicorn waffles?!",
				_blacklist = [ "unicorn" ],
				_result = happyThoughts( _phrase, [ "unicorn" ] )
			
			_blacklist
				.forEach( word =>
					expect( _result.includes( word ) ).toBe( false ) )
			
			expect( _phrase ).not.toEqual( _result )
		} )
	} )
} )
