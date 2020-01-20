var MdcFunc = function(){}

MdcFunc.prototype = {
    init: function(){},
    $: function(ele){
        return document.querySelector(ele)
    },
    $$: function(){
        return document.querySelectorAll(ele)
    },
    bindMdc: function(){

    }
}

var idx = new MdcFunc;

console.log(idx)

mdc.autoInit()