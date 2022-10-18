// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
function isPalindrome(s, start, end){
    while(start < end){
        if(s[start] !== s[end]) return false
        start++
        end--
    }
    return true 
}
var partition = function(s) {
    const result = []
    function dfs(i, s, slate){
        if(i === s.length){
            result.push(slate.slice())
            return
        }
        for(let j=i;j<s.length;j++){
            if(isPalindrome(s, i, j)){
                slate.push(s.slice(i, j + 1))
                dfs(j + 1, s, slate)
                slate.pop()
            }
        }
    }
    dfs(0, s, [])
    return result
    
};