const biu = require("../index.js");

const mark = {
    type:String,//类型
    default:"adadadadasaa",
    required:false,
    check:[ //检测规范      用于对基本类型的检测
        {

        }
    ],
    children:[  //对象类型的检测 用于对对象类型的检测

    ]
}

const markString = {
    type:String,
    default:"adadadadasaa",
    required:false,
    check:[
        {
            RegExp:/^[a-z]+$/
        },
        {
            RegExp:/^[a-z0-9]+$/
        }
    ],
}

const markNumber = {
    type:Number,
    default:1,
    required:true,
    check:[
        {
            max : 1000,
            min : 0,
            values : [10001]
        }
    ],
}

const markBoolean = {
    type:Boolean,
    default:true,
    required:true,
    check:[
        {
            values : [false]
        }
    ],
}

const markArray = {
    type:Array,
    default:[],
    required:true,
    children:[
        markNumber,
        markString,
        markBoolean
    ],
}

const markObject = {
    type:Object,
    default:[],
    required:true,
    children:{
        x:markNumber,
        y:markString,
        array:markArray
    },
}

// const data = [1,1,1,"1231231",false];
const data = {
    x:10001,
    y:"12313123123",
    array:[1,1,1,"1231231",false]
};


// console.log(biu(data,mark))

try{

// console.log(biu(data,markString))
// console.log(biu(data,markNumber))
// console.log(biu(data,markBoolean))
// console.log(biu(data,markArray))
console.log(biu(data,markObject))

} catch (e) {

console.error(e)

}
