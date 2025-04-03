
const motifs = [
	"light",
	"dark",
	"grey",
	"plain"
]
const setMotif = function(theMotif = null) {
	for(let anyMotif of motifs)
		document.body.parentNode.classList.remove(anyMotif)
	if(theMotif == null) {
		localStorage.removeItem(`motif`)
		return document.body.parentNode.classList.remove(`custom-motif`)
	}
	else
		document.body.parentNode.classList.add(`custom-motif`)
	
	document.body.parentNode.classList.add(theMotif)
	localStorage.setItem(`motif`,theMotif)
}
const fonts = [
	"dyslexia",
	"compromise",
	"boring"
]
const setFont = function(theFont = null) {
	for(let anyFont of fonts)
		document.body.parentNode.classList.remove(anyFont)
	if(theFont == null) {
		localStorage.removeItem(`font`)
		return ;
	}
	document.body.parentNode.classList.add(theFont)
	localStorage.setItem(`font`,theFont)
}

const start = function() {
	let
		motif = localStorage.getItem(`motif`),
		font = localStorage.getItem(`font`)
	if(motif)
		setMotif(motif)
	if(font)
		setFont(font)
}