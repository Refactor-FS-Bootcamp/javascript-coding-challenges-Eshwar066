function CalculateAvg(nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    const result= sum/nums.length;
    return result;
    
}

const nums=[1,4,6,8,6,4,2,6,9,0,6,5,4];
const avg=CalculateAvg(nums);
console.log(avg);