function askName(){
    var userName = prompt('Hello, what is your name?');
    return '<h2>' + 'Hello ' + userName + '!' + '</h2>'
}

function askQuestion(){
    var answer = prompt('Are alpacas cute?');
    var response;
}

while(answer === ''){
    answer = prompt('Are alpacas cute?');
 } 

if(answer === 'yes') {
    response = 'Yes they are!';
}  else if (answer === 'no'){
    response = 'That is fine!';
}  else {
    response = 'Cool story but yes or no though??';
}

return '<h3>' + response + '</h3>';