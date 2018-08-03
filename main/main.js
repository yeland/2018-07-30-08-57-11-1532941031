module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
	
  if(arguments.length===0){
	return 0;
  }
  
  var toplcd = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
  var midlcd = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
  var botlcd = ['|_|','..|','|_.',',_|','..|','._|','|_|','..|','|_|','..|'];
  
  var str = arguments[0];
  var length = str.length;
  var arr;
  arr.length = length;
  for(var i=0;i<length;i++){
	  arr[i] = parseInt(str.charAt(i));
  }
  
  var toparr;
  var midarr;
  var botarr;
  
  for(var i=0;i<length;i++){
	  toparr[i] = toplcd[arr[i]];
	  midarr[i] = midlcd[arr[i]];
	  botarr[i] = botlcd[arr[i]];
  }
  
  toparr[length-1].push("\n");
  midarr[length-1].push("\n");
  botarr[length-1].push("\n");
  
  toparr[length-1] = toparr[length-1].join("");
  midarr[length-1] = midarr[length-1].join("");
  botarr[length-1] = botarr[length-1].join("");
  
  console.log(toparr.join(" ")+midarr.join(" ")+botarr.join(" "));
  
};