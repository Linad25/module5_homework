function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.trunk(Math.random() * (max - min + 1) + min); 
}

// рандомное целое число в интервале