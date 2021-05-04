const euroCountries = ['Portugal', 'Belgium', 'Iceland', 'France'];
const asianCountries = ['Kazakhstan', 'Mongolia', 'China'];

euroCountries.push(...asianCountries);

console.log('1a:', euroCountries);

const southCountries = ['Paraguay', 'Uruguay', 'Chile'];
const caribCountries = ['Cuba', 'Jamaica', 'Dominica'];

const americaCountries = [...southCountries, ...caribCountries];

console.log('1b:', americaCountries);

const copyAmericaCountries = [...americaCountries];

console.log('2:', copyAmericaCountries);

const findMax = (array) => {
    return Math.max(...array);
};

const numbers = [3, 4, 3, 5, 4, 3, 2];

console.log('3:', findMax(numbers));

const findMin = (array) => {
    return Math.min(...array);
};

console.log('4:', findMin(numbers));

const person = {name: "John"}
const job = {role: "Teacher"}
const clonePerson = JSON.parse(JSON.stringify(person));

console.log('5.1:', clonePerson);

const employee = {...person, ...job};

console.log('5.2:', employee);

employee.role = 'Remote Teacher';

console.log('5.3:', employee);

const isWhole = (a, b, c, d) => {
    if ((a + b + c + d) / 4 % 1 === 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log('6:', isWhole(1, 2, 3, 4));
console.log('6:', isWhole(9, 2, 2, 5));
console.log('6:', isWhole(7, 2, 3, 4));

const fourNumbers = [7, 2, 3, 4];

console.log('6:', isWhole(...fourNumbers)); // It works!
