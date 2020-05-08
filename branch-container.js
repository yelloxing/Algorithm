/**
 * 有一批共n个集装箱要装上两艘载重方别为c1和c2的轮船上，
 * 其中集装箱i的重量为wi，且全部集装箱重量不大于两艘载重之和，
 * 问是否有一个装载方案完成装载。
 * 
 * 借助队列，一层层来检查，找到最优解。
 */

var weight1 = 30; //第一艘船载重
var weight2 = 10; //第二艘船载重
var w = [1, 9, 9, 4, 4, 9]; //集装箱

var nowBest1 = 0; //当前最优装载
var n = w.length; //集装箱个数

var arrayFIFO = [];

arrayFIFO.push([1, 1]); //deep,此时已经载重
arrayFIFO.push([1, 0]);

var nowBest1 = 1;

while (arrayFIFO.length > 0) {
    var nowNode = arrayFIFO.shift();
    currentDeep = nowNode[0];
    currentWeight = nowNode[1];
    if (currentDeep >= n) {
        if (currentWeight > nowBest1) {
            nowBest1 = currentWeight;
        }
    } else {
        arrayFIFO.push([currentDeep + 1, currentWeight]);
        if (currentWeight + w[currentDeep] < weight1) {
            arrayFIFO.push([currentDeep + 1, currentWeight + w[currentDeep]]);
        }
    }
}
allW = 0;
for (val = 0; val < w.length; val++) {
    allW += w[val];
}
console.log("第一艘船载重：" + nowBest1);

if (allW <= nowBest1 + weight2) {
    console.log("成功");
} else {
    console.log("失败");
}