const { NotImplementedError } = require('../extensions/index.js');
/*
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with l interface
 * function ListNode(x) {
 *   l.value = x;
 *   l.next = null;
 * }
 */


module.exports = function removeKFromList(l, k) {
  if (l === {}) {
    return l;
  }
  
  let current = l;
  let prev = null;

  if (current.next === null) {
    if (current.value === k){
      return {};
    }
    return l;
  }

  else { 
    while(current.next) {

    if (current.value === k) {
      if(current !== l) {
        prev.next = current.next;
      } else {
        l = current.next
      }
    }
    
    prev = current;
    current = current.next;

  }
  return l;

  }

 
}


