/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 1. Create k variable (starting at 0).
 * 2. Loop through nums.
 *   a. Condition if current value doesn't equal to "val".
 *     i. Set nums[k] to nums[i].
 *     ii. Increment k.
 * 3. Return k.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};