class similarity{
	constructor(word){
		this.word = word
	}
	getPercentage(word){
		let number = 0
		let x = (word.length < this.word.length) ? word.length : this.word.length
		for(let i = 0; i < x; i++){
			if(word[i] == this.word[i]){
				number++
			}else{
				number +=  0.1
			}
		}
		return {
			input: word,
			compare: this.word,
			percentage: (number / x) * 100
		}
	}
}

module.exports = {
	similarity
}