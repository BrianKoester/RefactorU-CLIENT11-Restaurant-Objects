// Define constructor: FoodItem
// property types:
//		name - string
//		calories - number
//		vegan - boolean
//		glutenFree - boolean
//		citrusFree - boolean
var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	// define instance variables
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
};

// Define constructor prototype: FoodItem.prototype.toString
FoodItem.prototype.toString = function() {
	var outputString = '';
	outputString = String(this.name) +', '+ String(this.calories);
				   // String(this.vegan) +', '+ String(this.glutenFree) +', '+
				   // String(this.citrusFree);	

	return (' FoodItem: ' + outputString);
};



// Define constructor: Drink
// property types:
//		name - string
//		descrtiption - string
//		items - array of ingredients
var Drink = function(name, description, items) {
	// define instance variables
	this.name = name;
	this.description = description;
	this.items = items;
};

// Define constructor prototype: Drink.prototype.toString
Drink.prototype.toString = function() {
	var outputString = '';
	outputString = String(this.name) +', '+ String(this.description) +', '+
				   String(this.items);	

	return ('Drink: ' + outputString);	
};



// Define constructor: Plate
// property types:
//		name - string
//		descrtiption - string
//		price - number
//		items - array of food items
var Plate = function(name, description, price, items) {
	// define instance variables
	this.name = name;
	this.description = description;
	this.price = price;
	this.items = items;
};

// Define constructor prototype: Plate.prototype.toString
// Returns string of plate items with dietary considerations
Plate.prototype.toString = function(vegan, glutenFree, citrusFree) {
	var outputString = '';
	var veganString = '';
	var glutenFreeString = '';
	var citrusFreeString = '';
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

	(this.vegan) ? veganString = 'Vegan' : veganString = 'Non-Vegan';
	(this.glutenFree) ? glutenFreeString = 'Gluten free' : glutenFreeString = 'Non-Gluten free';
	(this.citrusFree) ? citrusFreeString = 'Citrus free' : citrusFreeString = 'Non-Citrus free';


	outputString = String(this.name) +', '+ String(this.description) +', '+
				   String(this.price) +'  \n' + this.items.join("  ") +
				   '  Plate is => ' + veganString +', '+ glutenFreeString  +', '+ citrusFreeString +' \n \n';

	return ('Plate: ' + outputString);
};

// Define constructor prototype: Plate.prototype.vegan
// Determines if item is vegan or not
Plate.prototype.isVegan = function() {
	var Vegan = true;

	for (i=0; i<this.items.length; i++) {

		if (!this.items[i].vegan) {
			Vegan = false;
			}
	};	

	return Vegan;
};

// Define constructor prototype: Plate.prototype.glutenFree
// Determines if item is gluten free or not
Plate.prototype.isGlutenFree = function() {
	var GlutenFree = true;

	for (i=0; i<this.items.length; i++) {

		if (!this.items[i].glutenFree) {
			GlutenFree = false;
			}
	};	

	return GlutenFree;
};

// Define constructor prototype: Plate.prototype.citrusFtree
// Determines if item is citrus free or not
Plate.prototype.isCitrusFree = function() {
	var CitrusFree = true;

	for (i=0; i<this.items.length; i++) {

		if (!this.items[i].citrusFree) {
			CitrusFree = false;
			}
	};	

	return CitrusFree;
};



// Define constructor: Order
// property types:
//		plates - array of plates (per order)
var Order = function(plates) {
	// define instance variables
	this.plates = plates;
};



// Define constructor: Menu
// property types:
//		plates - array of plates
var Menu = function(plates) {
	// define instance variables
	this.plates = plates;
};

// Define constructor prototype: Restaurant.prototype.toString
// Returns plate items
Menu.prototype.toString = function() {
	return this.plates;
};



// Define constructor: Restaurant
//		name - string
//		description - string
//		menu - array of menus
var Restaurant = function(name, description, menu) {
	// define instance variables
	this.name = name;
	this.description = description;
	this.menu = menu;
};

// Define constructor prototype: Restaurant.prototype.toString
// Returns restaurant menu
Restaurant.prototype.toString = function() {
	return this.name + ', ' + this.description + '\n\n~ MENU ~\n\n' + this.menu.join("");
};



// Define constructor: Customer
//		dietaryPreference - string
var Customer = function(dietaryPreference) {
	// define instance variables
	this.dietaryPreference = dietaryPreference;
};



// Instantiation
var foodItemCheese = new FoodItem('cheese', 120, true, false, true);
var foodItemChicken = new FoodItem('chicken', 500, true, false, true);
var foodItemTortilla = new FoodItem('tortilla', 650, true, false, true);
var foodItemAvocado = new FoodItem('avocado', 340, true, true, false);
var foodItemLemon = new FoodItem('lemon', 100, true, true, false);
var foodItemSalt = new FoodItem('salt', 50, false, true, true);
var foodItemMix = new FoodItem('mix', 50, false, false, true);
var foodItemTequila = new FoodItem('tequila', 50, false, false, true);


var burritoPlate = new Plate('Burrito', 'cheese and chicken wrapped in tortilla', 8.75, [foodItemTortilla, foodItemCheese, foodItemChicken]);
var guacomolePlate = new Plate('Guacomole', 'fresh guac',  8.75, [foodItemAvocado, foodItemLemon, foodItemSalt]);
var margaritaDrink = new Drink('Margarita', 'sweetness with tequila mixed in', 10.55, [foodItemMix, foodItemTequila]);


//Determine vegan, gluten free and citrus free for plates
var vegan = (burritoPlate.isVegan());
var glutenFree = (burritoPlate.isGlutenFree());
var citrusFree = (burritoPlate.isCitrusFree());
var burrPlateDietary = burritoPlate.toString(vegan, glutenFree, citrusFree);

var vegan = (guacomolePlate.isVegan());
var glutenFree = (guacomolePlate.isGlutenFree());
var citrusFree = (guacomolePlate.isCitrusFree());
var guacPlateDietary = guacomolePlate.toString(vegan, glutenFree, citrusFree);


// Instantiate dinnerMenu with plates including dietary considerations
var dinnerMenu = new Menu([burrPlateDietary, guacPlateDietary, margaritaDrink]);

var eateryRestaurant = new Restaurant('The Eatery', 'Yummy food that everyone loves!', dinnerMenu.plates);

console.log(eateryRestaurant.toString());