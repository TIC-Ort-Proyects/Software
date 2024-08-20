import fs from 'fs';

fs.writeFileSync('La autopista del sur.txt', '');
[71, 1, 2, 116, 3, 84, 4, 71, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11].forEach((i) => {
    const j = fs.readFileSync(`Cuento/parte${i}.txt`, 'utf-8');
    fs.appendFileSync('La autopista del sur.txt', j + '\n');
});
