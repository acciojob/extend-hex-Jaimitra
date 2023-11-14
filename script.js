const extendHex = (shortHex) => {
  // write your code here
	let a = '#';
	for(i=1;i<shortHex.length;i++)
		{
			a =a+ shortHex[i] + shortHex[i];
		}
	return a;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
