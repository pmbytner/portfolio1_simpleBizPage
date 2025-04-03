const set_class = function(the_class, unique_from, target) {
	for(let any_class of unique_from)
		target.classList.remove(any_class)
	target.classList.add(the_class)
}
const motifs = [
	"light",
	"dark",
	"grey",
	"plain"
]
const setMotif = function(theMotif = null) {
	for(let anyMotif of motifs)
		document.body.parentNode.classList.remove(anyMotif)
	if(theMotif == null)
		return document.body.parentNode.classList.remove(`custom-motif`)
	else
		document.body.parentNode.classList.add(`custom-motif`)
	
	document.body.parentNode.classList.add(theMotif)
}
const fonts = [
	"dyslexia",
	"compromise",
	"boring"
]
const setFont = function(theFont = null) {
	for(let anyFont of fonts)
		document.body.parentNode.classList.remove(anyFont)
	if(theFont == null)
		return ;
	
	document.body.parentNode.classList.add(theFont)
}