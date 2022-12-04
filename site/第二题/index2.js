const inputs = document.querySelectorAll(".controls input");
var newColor = transtoarr(inputs);
function transtoarr(inputs){
    // var array = [];
    //     array = Array.prototype.slice.call(inputs,0);+

    var arr=Array.prototype.slice.call(inputs)
        // array = new Array();
        // for (var i=0,len = inputs.length;i < len; i++){
        //     array.push(inputs[i]);
        // }
    // console.log(arr[0].defaultValue);
    return arr;
}
console.log(newColor[0].defaultValue);
console.log(inputs);
const gradient =document.querySelector('.gradient')
function colorUpdate(){
    gradient.style.setProperty('background','linear-gradient(45deg, '+newColor+', '+newColor+')');
    // gradient.style.setProperty('width','999px');
    // alert('颜色已改变')
}


inputs.forEach(input => addEventListener('change',colorUpdate));
/**
 * 上面已经选取了两个取色器
 * 请添加相应的 JS 事件处理函数并绑定到合适的事件监听器上（提示：change 事件）
 * 这样我们就可以用取色器选取颜色来生成下方的渐变色背景啦
 *  */
