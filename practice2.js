function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index++;
  });
  console.log(result);
}

selectEvenItems(["a", "b", "c", "d", "e", "f"]);

function max(numbers) {
  var currentmax = numbers[0];
  numbers.forEach(function (number) {
    if (number > currentmax) {
      currentmax = number;
    }
  });
  return currentmax;
}
console.log(max([5, 4, 8, 1, 2]));

function factorial(number) {
  var result = 1;
  var currentnumber = number;
  for (var i = 0; i < number; i++) {
    result = result * currentnumber;
    currentnumber = currentnumber - 1;
  }
  return result;
}
console.log(factorial(5));

function descending(numbers) {
  var result = [];
  for (var i = numbers.length - 1; i < numbers.length; i = i - 1) {
    result.push(numbers[i]);
  }
  return result;
}
console.log(descending([1, 3, 5, 7]));
