

var canConstruct = function(ransomNote, magazine) {
    const count = new Array(26).fill(0)
    const base = 'a'.charCodeAt(0)

    for(let i = 0 ; i < magazine.length; i++) {
        count[magazine[i].charCodeAt(0) - base]++
    }

    for(let i = 0; i < ransomNote.length; i++) {
         count[ransomNote[i].charCodeAt(0) - base]--
         if(count[ransomNote[i].charCodeAt(0) - base] < 0)
         return false
    }

    return true

};




var canConstruct = function(ransomNote, magazine) {
    const map = new Map()

    for(let char of magazine) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let c of ransomNote) {
        if(!map.get(c) || map.get(c) === 0)
            return false
        map.set(c, map.get(c) - 1)
    }

    return true


  }





