// FUNCTION TO COPY SPECIFIED TEXT TO CLIPBOARD
function copyTextToClipboard(text){
  var
    textArea = document.createElement("textarea"),
    st = textArea.style;

  st.position = 'fixed';
  st.top = 0;
  st.left = 0;
  st.width = '2em';
  st.height = '2em';
  st.padding = 0;
  st.border = 'none';
  st.outline = 'none';
  st.boxShadow = 'none';
  st.background = 'transparent';

  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

}

module.exports = copyTextToClipboard