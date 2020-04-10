// Write your code below
let bobsFollowers = ['Joe', 'Jill', 'Jack', 'Phil'];
let tinasFollowers = ['Mike', 'Jack', 'Phil'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            console.log(mutualFollowers.push(bobsFollowers[i]))
        }
    }
};