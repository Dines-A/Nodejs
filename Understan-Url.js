const url = require('url');

const UtubeUrl = 'https://github.com/Dines-A/Nodejs.git';

const Holder = url.parse(UtubeUrl,true);

 console.log( "hostname : " ,Holder.hostname); 
 console.log( "href : " ,Holder.href);
 console.log( "path : " ,Holder.path);
 console.log( "pathname : " ,Holder.pathname);
 console.log( "port : " ,Holder.port);
 console.log( "protocol : " ,Holder.protocol); 
 console.log( "search : " ,Holder.search);  
 console.log( "url : " ,Holder.url);
 console.log( "Query : " ,Holder.query);
