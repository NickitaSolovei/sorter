class Sorter {
  constructor() {
    // your implementation
    // создам переменную массив в новом объекте
    this.arr1 = [];
    this.compareFunction2 = function fff(a, b){
      return a - b;
    }
  }

  add(element) {
    // your implementation
    // добавить в переменную-массив объекта один элемент
    this.arr1.push(element);

  }

  at(index) {
    // your implementation
    return this.arr1[index];
  }

  get length() {
    // your implementation
    return this.arr1.length;
  }

  toArray() {
    // your implementation
    return this.arr1;
  }

  sort(indices) {
    // your implementation
    function compareNumeric(a, b) {
      return a - b;
    }
    var ind2 = indices.slice();
    ind2.sort(compareNumeric);


    var arr2 = [];
    for (var i=0; i<indices.length; i++){
      // добавим в arr2 выбранные значения массива
      arr2.push(this.arr1[ind2[i]]);
      
    }
    // сортирнем
    arr2.sort(this.compareFunction2);
    // пройдем по массиву indices и расставим элементы отсортированного массива
    for (var i=0; i < indices.length; i++) {
      this.arr1[ind2[i]] = arr2[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    function compareNumeric(a, b) {
      return a - b;
    }
    var compareFunction1 = compareFunction || compareNumeric;

    this.compareFunction2 = compareFunction1;
  }
}

module.exports = Sorter;