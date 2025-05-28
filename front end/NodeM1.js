function filterPrimes(arr) {


    function isPrime(num) {

        if (num < 2)

            return false;

        for (let i = 2; i <= num / 2; i++) {

            if (num % i === 0)

                return false;

        }

        return true;

    }


    return arr.filter(isPrime);

}




// b) Function to return the longest string from an array

function findLongestString(arr) {

    return arr.reduce(function (longest, current) {

        if (current.length > longest.length) {

            return current;

        } else {

            return longest;

        }

    });

}




// c) Function to display current date in the format: 5 Dec 2023 14:15:23

function displayCurrentDate() {

    const now = new Date();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",

                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  

    const h = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();

    const m = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

    const s = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

  

    return now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear() + ' ' + h + ':' + m + ':' + s;

  }

  


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 20];

console.log("Prime numbers:", filterPrimes(numbers));


const strings = ["apple", "banana", "cherry", "watermelon", "kiwi"];

console.log("Longest string:", findLongestString(strings));


console.log("Current date:", displayCurrentDate());
