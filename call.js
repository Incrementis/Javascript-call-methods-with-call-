var Shelf=
{
	items: [],
	fill: function(item)
	{
		this.items.push({name:item});//Array is filled with an object!
	},
	giveAll: function(cart, put)
	{
		for(var element = 0; element < this.items.length; element++)
		{
			item = this.items[element];

			/*
				ATTENTION:
				The argument "element" should be ignored by the method "call".
			*/
			put.call(cart, item.name, element);
		}
	}
	
}


var Cart=
{
	items: [],
	put: function(item)
	{
		this.items.push({name:item});//Array is filled with an object!
	},
	reset: function()
	{
		this.items = [];
	}
}


//Filling shelf with items
Shelf.fill("Pencil");
Shelf.fill("Card");
Shelf.fill("Small Box");
Shelf.fill("Big Box USA");

Shelf.fill("Book");
Shelf.fill("Belt");
Shelf.fill("Big Box GBR");



//Gives all items in the Shelf to the cart
function takeAll()
{
	var List = document.getElementById('selected');
	var position = Cart.items.length;


	/*
		ATTENTION:
		"giveAll" is a high-order-function which needs as a second
		argument a callback function.
	*/
	Shelf.giveAll(Cart, Cart.put);


	//Showing all items in the browser
	for(var item = 0; item <= 6; item++)
	{
		List.innerHTML += '<li>' + Cart.items[position + item].name + '</li>';
	}
}


//Verifies the item which was chosen
function Take()
{
	var List = document.getElementById('selected');
	var objClicked = document.getElementsByName('shelf');
	var position = 0;
	
	/*
		NOTE:
		The "if" structure below should be optimized with the help of a loop(e.g. "for" loop),
		but due to code logic visibility the code is kept simplified. 
		(Please, don`t write code like this if you want serviceability!)
		
		TIP:
		Just try to understand the first "if" defintion, because the others work the same.

		Using "find and replace" could help a lot to handle redundant code. 
	*/
	
	
	
	if(objClicked[0].checked) //-----PENCIL-----//
	{
		/*
			ATTENTION:
			Taking an object from the shelf and putting it into the Cart
			by temporarily inheriting the method "fill" to object "Cart".
		*/
		Shelf.fill.call(Cart, Shelf.items['0'].name);
		
		//Getting the index of the last object which is in the Cart
		position = Cart.items.length - 1;
		
		//Showing the Objects name in browser
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		//reset invisible checkbox
		objClicked[0].checked = false;
		
	}
	else if(objClicked[1].checked )	//-----CARD-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['1'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[1].checked = false;
		
	}
	else if(objClicked[2].checked) //-----SMALL BOX-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['2'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[2].checked = false;
		
	}
	else if(objClicked[3].checked) //-----BIG BOX USA-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['3'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[3].checked = false;
		
	}
	else if(objClicked[4].checked) //-----BOOK-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['4'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[4].checked = false;
		
	}
	else if(objClicked[5].checked) //-----BELT-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['5'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[5].checked = false;
		
	}
	else if(objClicked[6].checked) //-----BIG BOX GBR-----//
	{
		
		Shelf.fill.call(Cart, Shelf.items['6'].name);
		
		position = Cart.items.length - 1;
		
		List.innerHTML += '<li>' + Cart.items[position].name + '</li>';
		
		objClicked[6].checked = false;
		
	}
	else
	{
		alert("ERROR: Item not found!");
	}
	
}


//Deletes all the objects in the cart
function Reset()
{
	var List = document.getElementById('selected');
	
	List.innerHTML = "";
	
	Cart.reset();
}