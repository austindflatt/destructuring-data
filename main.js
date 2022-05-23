const userPersonalData = {
	name: 'peter',
	age: '56',
	birthday: 'jan 1st',
   };
   const userGameData = {
	score: 4546,
	accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
   };
	
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 1. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
  // const user = {
  //  name: 'peter',
  //  age: '56',
  //  birthday: 'jan 1st',
  //  score: 4546,
  //  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
  // }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 2. Make a copy of your new user object but override the birthday to december 31st
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 3. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 
  //  4.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
  //  and store it in a variable name food
  // 
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  var user = {
	name: 'pete',
	age: '32',
	favoriteThings: {
	  food: ['pizza', 'tacos', 'burgers', 'italian'],
	  movies: [],
	},
   };
   
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 5. Once you have grabbed the favorite foods. Descontrusct the food array to grab only the first 2 values. //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 6. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
  //    the food variable should have all the array items starting from the third one.
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
  
  
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 7. use object destructuring to grab the following from the userData object: 
  // - The user's name and in a constant named userName.
  // - The user's facorite food array and name it favoriteFood.
  // - The users first favorite thing (cars) and name it favoriteThing
  // - The users second favorite thing (jewelry) and name it secondfavoriteThing
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const userData = {
	name: 'Peter',
	favorites: {
	  needs: {
		food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
	  },
	  wants: {
		things: ['cars', 'jewelry'],
	  },
	},
  };
  