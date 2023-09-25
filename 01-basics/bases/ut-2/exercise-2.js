const TXT_ALERT1 = "This is an alert message, click me to move on!!";
const TXT_CONFIRM1 = "Show me in an alert if you clicked on ok or false";
const TXT_PROMPT1="Show me in an alert the message typed";

window.alert(TXT_ALERT1);
let valor_confirm1 = window.confirm(TXT_CONFIRM1);

let txt_alert2 ="You clicked on "+valor_confirm1+" click me to move on";

window.alert(txt_alert2);

let valor_prompt1 = window.prompt(TXT_PROMPT1);

let txt_alert3 ="You typed "+valor_prompt1+" click me to move on";

window.alert(txt_alert3);


