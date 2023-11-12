const header = document.querySelector("#header");
const contentHeaer = header.outerHTML;
console.log(contentHeaer);
console.log(typeof contentHeaer);

const main = document.querySelector("#main");
main.innerHTML = `
    <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
    </ul>s
`
