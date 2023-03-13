class similarity{
	constructor(regex){
		this.regex = regex
		let word = regex.toString().split("")
		word.shift()
		word.pop()
		this.word = word.join("")
	}
	getPercentage(word){
		let number = 0
		let x = (word.length < this.word.length) ? word.length : this.word.length
		let splits = (word.split(/\s/gi).length < this.word.split(/\s/gi).length) ? word.split(/\s/gi).length : this.word.split(/\s/gi).length
		for(let i = 0; i < splits; i++){
			if(this.word.split(/\s/gi)[i].startsWith("([") && this.word.split(/\s/gi)[i].endsWith("]+)")){
				number += word.split(/\s/gi)[i].length
				console.log(word.split(/\s/gi)[i].length)
			}else{
				for(let j = 0; j < word.split(/\s/gi)[i].length; j++){
					if(word.split(/\s/gi)[i][j] == this.word.split(/\s/gi)[i][j]){
						number++
					}else{
						number += 0.1
						console.log(word.split(/\s/gi)[i])
					}
				}
			}
		}
		number += (splits - 1)
		this.percentage = {
			input: word,
			compare: this.word,
			percentage: (number / word.length) * 100
		}
		return this.percentage
	}
	canExecute(requiredPercentage = 75){
		return requiredPercentage <= this.percentage.percentage
	}
}

module.exports = {
	similarity
}