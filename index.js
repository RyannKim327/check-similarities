let a = "What is your name"
let b = "who are"
let result = 0

let check = (input, base) => {
	let _1 = input.split(/\s/gi)
	let _2 = base.split(/\s/gi)
	let _r = 0
	for(let i = 0; i < _1.length; i++){
		for(let j = i; j < _2.length; j++){
			if(_1[i].toLowerCase() == _2[j].toLowerCase()){
				_r += 1
				break
			}else if(_1[i].toLowerCase() != _2[j].toLowerCase()){
				for(let k = 0; k < _1[i].toLowerCase().length; k++){
					for(let l = 0; l < _2[j].toLowerCase().length; l++){
						if(_1[i].toLowerCase()[k] == _2[j].toLowerCase()[l]){
							_r += 0.1
							break
						}
					}
				}
			}
		}
	}
	return {
		similarity: Math.round((_r / (_2.length)) * 100),
		input,
		base
	}
}

console.log(check(a, b))