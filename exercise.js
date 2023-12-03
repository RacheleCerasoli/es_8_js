let myBoolean = true;

console.log('Il valore è :', myBoolean);
console.log('Ed è di tipo :', typeof (myBoolean));

let myNumber = Number(myBoolean);

console.log('Il valore è :', myNumber);
console.log('Ed è di tipo :', typeof (myNumber));

let myString = String(myBoolean);

console.log('Il valore è :', myString);
console.log('Ed è di tipo :', typeof (myString));

let anotherBoolean = Boolean(myString);

console.log('Il valore è di nuovo', anotherBoolean);
console.log('Ed è di tipo :', typeof (anotherBoolean));