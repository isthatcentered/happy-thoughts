const randomNumber = max =>
	Math.floor( Math.random() * max )

export const randomInArray = arr =>
	arr[ randomNumber( arr.length ) ]
