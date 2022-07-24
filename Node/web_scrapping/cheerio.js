const cheerio=require("cheerio");
let html=`<ul id="fruits">
    <li class="apple">Apple</li>
    <li class="orange">Orange</li>
    <li class="pear">Pear</li>
</ul>`;
let selecTool=cheerio.load(html);
let fruitnamearr=selecTool("#fruits");
console.log(fruitnamearr.text());

let fruitname=selecTool(".pear");
console.log(fruitname.text());
