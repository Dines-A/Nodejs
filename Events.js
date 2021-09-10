const events = require('events')
var eventemitter = new events.EventEmitter();
var Fun1=function()
{
    console.log('Welcome bugga !!');
}
var Funmsg=function(Msg)
{
    console.log(Msg);
}
eventemitter.on("HelloEveryOne",Fun1);
eventemitter.emit("HelloEveryOne")
eventemitter.on("Knock-Knock",Funmsg);
eventemitter.emit("Knock-Knock","Weclome-Customer!!")