export const formatText = (text,desiredLength)=>{
    if(text.length<=100){
        return text;
    } else {
        return text.substring(0,desiredLength)+'...';
    }
}