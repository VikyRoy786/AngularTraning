function addNums(... nums:number[]){
    var i;
    var sum : number = 0;
    for(i = 0; i<nums.length; i++){
        sum = sum + nums[i];
    }
    console.log("sum of numbers", sum);
}
addNums( 1,3,4,);