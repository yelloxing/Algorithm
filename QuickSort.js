let datas = [4, 8, 3, 7, 1, 5, 6, 2];

function qSort(p, r) {
    if (p < r) {
        let q = partition(p, r);
        qSort(p, q - 1);
        qSort(q + 1, r);
    }
}

function partition(p, r) {
    let i = p, j = r + 1, x = datas[p];

    while (true) {

        // 把<x的元素交换到左边区域
        // 把>x的元素交换到右边区域

        while (datas[++i] < x && i < r);
        while (datas[--j] > x);
        if (i >= j) break;

        // 交换位置
        let temp = datas[i];
        datas[i] = datas[j];
        datas[j] = temp;

    }

    datas[p] = datas[j];
    datas[j] = x;

    return j;
}

console.log("排序前：" + datas.join(" "));
qSort(0, datas.length - 1);
console.log("排序后：" + datas.join(" "));