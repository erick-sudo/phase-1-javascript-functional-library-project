
function myEach(collection, callback) {
    for(let value of Object.values(collection)) {
        callback(value)
    }
    return collection
}

function myMap(collection, callback) {
    let newCollection = []

    for(let obj of Object.values(collection)) {
        newCollection.push(callback(obj))
    }
    
    return newCollection
}

function myReduce(collection, callback, start) {
    let acc = Boolean(start) ? start : Object.values(collection)[0]
    let index = Boolean(start) ? 0 : 1

    for(let i=index;i<Object.values(collection).length;i++) {
        acc = callback(acc, Object.values(collection)[i], Object.values(collection))
    }

    return acc
}

function myFind(collection, predicate) {
    for(let value of Object.values(collection)) {
        if(predicate(value)){
            return value
        }
    }
}

function myFilter(collection, predicate) {
    let acc = []

    for(let value of Object.values(collection)){
        if(predicate(value)) {
            acc.push(value)
        }
    }
    return acc
}

function mySize(collection) {
    return Object.values(collection).length
}

function myFirst(array, n) {
    return Boolean(n) ? array.slice(0,n) : array[0]
}

function myLast(array, n) {
    return Boolean(n) ? array.slice(-n) : array[array.length-1]
}

function myKeys(obj) {
    return Object.keys(obj)
}

function myValues (obj) {
    return Object.values(obj)
}

function mySortBy(array, callback) {

}