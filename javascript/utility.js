var UitilyLib = {
    GetRandomItemFromList: function (list) { return list[UitilyLib.GetRandomInt(list.length)] },
    GetRandomInt: function (max) {  return Math.floor(Math.random() * max) },
    DestroyParentElement: function(child) { child.parentNode.remove() },
    ArrayWithNumbersFromMinToMax: function (begin, end) { var arr = []; for(var i=begin; i<=end; i++){ arr.push(i); } return arr; }
}