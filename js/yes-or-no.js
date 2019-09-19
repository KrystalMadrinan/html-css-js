var answer = prompt('Are alpacas cute?');
var response;
while(answer === ''){
   answer = prompt('Are alpacas cute?');
} 


if(answer === 'yes') {
    response = ('Yes they are!');
}   else if (answer === 'no'){
    response = ('That is fine!');
}   else {
    response = ('Cool story but yes or no though??');
}

document.write('<h3>' + response + '</h3>');