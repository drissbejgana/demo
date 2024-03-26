document.addEventListener('DOMContentLoaded', function() {
    processText(document.body);
  });

  function processText(element) {
    if (element.nodeType === Node.TEXT_NODE) {
      var text = element.nodeValue;

      if (text !== '') {
        // Capitalize the first letter of the first word
        text = capitalizeFirstLetter(text);
        text = text.replace(/\berrahma\b/gi, 'ERRAHMA');

        element.nodeValue = text;
      }
    } else {
      element.childNodes.forEach(function(childNode) {
        processText(childNode);
      });
    }
  }

  function capitalizeFirstLetter(text) {
    var sentences = text.split('. ');

    sentences = sentences.map(function(sentence) {
      // Check for leading spaces before trimming
      var trimmedSentence = sentence.trimLeft();

      if (trimmedSentence.length > 0) {
        return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1).toLowerCase();
      }
      return sentence;
    });

    return sentences.join('. ');
  }