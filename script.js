function checkPlagiarism() {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var result = document.getElementById("result");
  
    if (text1.trim() === "" || text2.trim() === "") {
      result.innerHTML = "Please Fill The Above Text Areas!";
      return;
    }
  
    var matchingWords = getMatchingWords(text1, text2);
    var accuracy = calculateAccuracy(matchingWords, text1.split(" ").length);
  
    if (accuracy > 0) {
      result.innerHTML = "PLAGIARISM IS DETECTED !"  + accuracy.toFixed(2) + "%.";
    } 
    else {
      result.innerHTML = "THERE IS NO PLAGIARISM.";
    }
  }
  
  function getMatchingWords(text1, text2) {
    var words1 = text1.toLowerCase().split(" ");
    var words2 = text2.toLowerCase().split(" ");
    var matchingWords = [];
  
    for (var i = 0; i < words1.length; i++) {
      var word = words1[i];
  
      if (words2.includes(word) && !matchingWords.includes(word)) {
        matchingWords.push(word);
      }
    }
  
    return matchingWords;
  }
  
  function calculateAccuracy(matchingWords, totalWords) {
    return (matchingWords.length / totalWords) * 100;
  }