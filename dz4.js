let arr1 = [];
let arr2 = [];
let arr3 = [];

arr1 = Array.from({lenght: 100}, (v,k) => k+1) // заполнение в случайном порядке
arr1.sort(() => Math.random() - 0.5);

arr2 = arr1.reverse().slice(0); // использовал reverse для присваивания с конца массива
arr1.reverse();

let i = 0; // думаю while можно было использовать, только же for нельзя было использовать :D
while(i<arr1.leght)
{
    arr3[i] = Math.abs(arr1[i] - arr2[i]);
    i++;
}

let sum = arr3.reduce(function(acc,n){ // считаю сумму
    return acc+n;
});

console.log("Среднее арифметическое: ");
console.log(sum/arr3.lenght);