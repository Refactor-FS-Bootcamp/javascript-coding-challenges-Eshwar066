function revStr(str) {
    if(str.length === 0){
       return str;
    }else{
     return revStr(str.substring(1))+str.charAt(0);
    }
  }
  
  const str = "Eshwar";
  const reverse = revStr(str);
  console.log(reverse);