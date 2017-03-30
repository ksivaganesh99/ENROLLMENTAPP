$(document).ready(function(){
	
	 // Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:9e80f8c4-816f-44da-8553-ed7a79ed5687',
});		
		
var lexruntime = new AWS.LexRuntime({apiVersion: '2016-11-28'});
var userid = guid();
//alert(lexruntime);
console.log();
var params = {
  botAlias: 'DEV', /* required */
  botName: 'PasswordReset', /* required */
  inputText: 'Reset the password', /* required */
  userId: userid, /* required */
  sessionAttributes: {
    Name: 'Siva',
    /* anotherKey: ... */
  }
};
	
//alert(AWS);

$("#sendsubmit").on("click",function(e){
	e.preventDefault();
	var message = $("#user_message").val();
	params.inputText = message;
	$("#user_message").val("");
	$(".direct-chat-messages").append('<div class="direct-chat-info clearfix"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">You</span></div><img alt="message user image" src="images/character.png" class="direct-chat-img"><!-- /.direct-chat-img --><div class="direct-chat-text">'+message +'</div><span class="direct-chat-timestamp pull-right">3.36 PM</span></div>');
	$('.popup-messages').animate({scrollTop:1E10}, 800);
	//alert(params);
	lexruntime.postText(params, function (err, data) {
  if (err){
	   console.log(err, err.stack); 
		}
  else  {  
	var message = data.message;
		console.log(data);
  $(".direct-chat-messages").append('<div class="direct-chat-info clearfix"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">Eve</span></div><img alt="message user image" src="images/chatbot.png" class="direct-chat-img"><!-- /.direct-chat-img --><div class="direct-chat-text">'+message+'</div> <span class="direct-chat-timestamp pull-right">3.36 PM</span></div>');
  $('.popup-messages').animate({scrollTop:1E10}, 800);
  
  
  
		} 
});

});
$("#loginbtn, #hiddensubmit").on("click",function(e){
	e.preventDefault();
if($("#username").val() === "admin" && $("#password").val() === "admin"){
window.location.replace("./doc.html");
}else{
alert("Login Failed");
}

});



$("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
		  $(".direct-chat-messages").val("").not("firstChild");
		  userid = guid();
            });
			

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}


});