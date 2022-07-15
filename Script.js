$(function(){

    var commands = {

       "random":"var rand = (Math.floor(Math.random() * 10)); incoming(rand);",

       "commands":"var objstr = JSON.stringify(commands); objstr = JSON.stringify(commands, null, 4); incoming(objstr)"

    }

    var responseSys = {

            "hi":"Hello There!",

            "bye":"GoodBye!"

            };

            function cmd(name, action){

               commands[name] = action;

            }

    function outgoing(text){

        var newMsg = "<div class='section right'><div class='message outgoing'>" + text + "</div></div>";

        $("#messages").append(newMsg);

    }

    function incoming(text){

     var newMsg = "<div class='section left'><div class='message incoming'>" + text + "</div></div>";

        $("#messages").append(newMsg);

        window.scrollTo(0, parseInt($("#messages").innerHeight))

    }

    $("#send").click(function(){

        $("#msgbox").trigger("blur")

        var text = $("#msgbox").val();

        if(text != null && text != ""){

        $("#msgbox").val("");

        text = text.replace(/</ig, "&lt;");

        text = text.replace(/>/ig, "&gt;");

        text = text.replace(/\n/ig, "<br />");

        outgoing(text);

        reply(text)

        }

        else{

           // Praise the Sun 

           incoming("Please, don't send empty messages.")

        }

    });

    $("#msgbox").keyup(function(e){

        if(e.which == 13){

           $("#send").trigger("click")

        }

        else{

           // Do Nothing 

        }

    });

    

    

    incoming("apa kabar ?")

    function responses(msg, response){

    msg = msg.toLowerCase();

        responseSys[msg] = response;

    }

    function reply(txt){

    txt = txt.toLowerCase();

    if(txt[0] == "r" && txt[1] == "e" && txt[2] == "s" && txt[3] == "p" && txt[4] == "o" && txt[5] == "n" && txt[6] == "s" && txt[7] == "e" && txt[8] == "s" && txt[9] == "("){

            try{

                eval(txt);

            }

            catch(e){

               incoming(e);

            }

        }

        else if(responseSys[txt] != undefined && responseSys[txt] != null && responseSys[txt] != "" ){

           incoming(responseSys[txt]);

           

        }

        else if(commands[txt] != null && commands[txt] != undefined && commands[txt] != ""){

           try{

               try{

                   eval(commands[txt])

               }

               catch(e){

                   incoming("Error Executing")

               }

           }

           catch(e){

              incoming("Command not defined") 

           }

        }

        else if(txt[0] == "c" && txt[1] == "m" && txt[2] == "d"){

           try{

              eval(txt) 

           }

           catch(e){

              incoming(e) ;

           }

        }

        else{

           incoming("Saya tidak dapat merespons apa yang kamu katakan, tolong gunakan ejaan yg benar") 

        }

    }

    

    

    responses("example", "My Response")

    responses("hello", "Hello World.. or.. person.")

});
