//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
	this.hungry = true
	
}

let sadie = new Dog()
sadie.status = "normal"
sadie.color = "black"
sadie.hungry = false



let moonshine = new Dog()
let atticus = new Dog()

// Instances of Dog
// Needed: sadie, moonshine, atticus


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
	this.name = name
	this.cool = true
	this.pet = function(dog){
		dog.status = "happy"
	}
	this.feed = function(dog){
		dog.hungry = false
	}
}

let mason = new Human("Mason")
	mason.cool = false
let julia = new Human("Julia")
// Instances of Human
// Needed: mason, julia
