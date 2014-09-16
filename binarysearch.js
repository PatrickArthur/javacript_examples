function binaryIndexOf(searchElement) {
    'use strict';

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}

Array.prototype.binaryIndexOf = binaryIndexOf;
var arr = [0, 1, 2, 4, 5, 6, 6.5, 7, 8, 9];
var a = [1, 2, 3];
arr.binaryIndexOf(6.5);
