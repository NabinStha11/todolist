 exports.getDate =  function(){
var today=new Date()
var options={
    weekday:'long',
    month:'long',
    day:'numeric'
}
return today.toLocaleDateString("us-en" , options)

}

exports.getDay =function(){
var today=new Date()
var options={
    weekday:'long',
    month:'long',
    day:'numeric'
}
return today.toLocaleDateString("us-en" , options)

}
