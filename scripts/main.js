console.log('HELLOW WORLD');

function liczsilnie(n) {
    if (n <= 0) {
        return 1;
    }
    return  n * liczsilnie(n-1);
}

console.log(liczsilnie(5));