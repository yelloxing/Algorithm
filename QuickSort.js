/**
 * 
 * 【快速排序】
 * 
 * 对于输入的子数组a[p:r]，按照一下3个步骤进行排序：
 * 1）分解divide：以a[p]为基准元素将a[p:r]划分成3段a[p:q-1]，a[q]和a[q+1:r]，其中a[q]不小于a[p:q-1]中的任何元素且不大于a[q+1:r]中的任何元素，下标q在划分中确定。
 * 2）递归求解conquer：通过递归调用排序，分别对a[p:q-1]和a[q+1:r]进行排序。
 * 3）合并merge：合并a[p:q-1]，a[q]和a[q+1:r]返回为最终结果。
 * 
 */

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