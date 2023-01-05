let html = document.querySelector('.html');
let css = document.querySelector('.css');
var javascript = document.querySelector('.javascript');
var result2 = document.querySelector('.result2');
 
//Subscribe Button function
function Subscribebtn(){
    document.querySelector('.result2').value = 
      `
      <style>
      ${css.value}
      </style>
      ${html.value}
      <script>
      ${javascript.value}
      </script>
      `;
      const blob = new Blob([result2.value], {type: '.txt'});
        const fileUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = document.querySelector('.link').value;
        link.href = fileUrl;
        link.click();
   }
//Subscribe Button Code Copy function
function Clipboard(){
     if(result2.value != ""){
        const textarea = document.createElement('textarea');
        const result2E = result2.value;
     if (!result2) { return; }
        textarea.value = result2E;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('👇👇👇Code Copied to Clipboard👇👇👇\n'+result2.value);
      }
      else{
        alert('Enter Your YouTube Url');
      }
   }
