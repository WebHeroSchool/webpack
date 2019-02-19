let nums1 = [46,55,88,0,0,0,0];
let nums2 = [18,29,80,90];

let test = (nums1, nums2) => {
   let nums3 = nums1.concat(nums2);
   return nums3.sort();
};

console.log(test(nums1, nums2));