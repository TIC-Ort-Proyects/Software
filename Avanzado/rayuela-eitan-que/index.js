import fs from 'fs';

fs.writeFileSync('La autopista del sur.txt', '');
let orden = fs.readFileSync('orden.txt', 'utf-8').split('\n');
console.log(orden)
orden.forEach((i) => {
    const j = fs.readFileSync(`Cuento/parte${i}.txt`, 'utf-8');
    fs.appendFileSync('La autopista del sur.txt', j + '\n');
});
