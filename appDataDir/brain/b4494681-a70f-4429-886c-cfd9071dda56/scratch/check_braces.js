const fs = require('fs');
const content = fs.readFileSync('app/services/services.css', 'utf8');
const lines = content.split('\n');
let depth = 0;
lines.forEach((line, i) => {
    const open = (line.match(/{/g) || []).length;
    const close = (line.match(/}/g) || []).length;
    depth += open;
    depth -= close;
    if (depth < 0) {
        console.log(`Error at line ${i + 1}: Unexpected closing brace`);
        depth = 0;
    }
});
if (depth > 0) {
    console.log(`Error: ${depth} unclosed braces at end of file`);
} else if (depth === 0) {
    console.log('Braces are balanced');
}
