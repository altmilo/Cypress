const functions = require('./functions');

test('Adds 2 + 2 to Equal 4', ()=>{
    expect(functions.add(2 , 2)).toBe(4);
});


test('Adds 2 + 2 to Not Equal 4', ()=>{
    expect(functions.add(2 , 2)).not.toBe(5);
});

///toBeFalsy
test('Should be Falsy', ()=>{
    expect(functions.checkValue()).toBeFalsy()

});

//tobeNull
test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull()

});

test('User should be Brad  traversy Object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })

});