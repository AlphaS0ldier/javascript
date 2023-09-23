const TXTWELCOME = "Welcome to the application!";
const TXTINFO ="This is an informational message.";
const TXTWARN ="This is a warning. Be cautious.";
const TXTERROR="Error! Something went wrong.";
const TXTWELCOME_SIZE ="font-size:18";
const TXT_SIZE ="font-size:16";

const OBJTABLE =[{name:"John",age:30,city:"New York"},
{name:"Jane",age:25,city:"San Francisco"},
{name:"Bob",age:40,city:"Chicago"}];


console.log("%c"+TXTWELCOME,"color:blue;"+TXTWELCOME_SIZE+"font-weight:bold");
console.log("%c"+TXTINFO,"color:green"+TXT_SIZE);
console.warn(TXTWARN);
console.error(TXTERROR);
console.table(OBJTABLE);
