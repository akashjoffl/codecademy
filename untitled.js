let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[7]='right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(5, 9, 'know'); // Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
console.log(secretMessage.join());
console.log(2, secretMessage);