var maxSequence = function(arr){
    let min = 0;let sum = 0; let res = 0;
    for(let i=0,len=arr.length;i<len;i++){
        sum+=arr[i];
        min = Math.min(sum,min);
        res = Math.max(res,sum-min);
        console.log(min,sum,res)

    }
    return res;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

