const fileButton = document.getElementsByName('file-btn');
const fileData = document.getElementsByName('file')[0];
const list = document.getElementsByClassName('file-list')[0];
const submitBtn = document.getElementsByClassName('submit-btn')[0];
const formDiscrition = document.getElementsByClassName('input-test-text')[0];
let fileList = []; i = 0;

fileData.addEventListener("change", () => {
  fileList[i] = fileData.files[0];
  let li = document.createElement('li');
  li.innerHTML = `${fileList[i].name}` + '<spun data-cansel> &#10006;</spun>';
  li.setAttribute("value", i);
  list.append(li);
  i++;
});

list.addEventListener('click', (event) => {
  if (event.target.dataset.cansel != undefined) {
    fileList[event.target.parentElement.value] = undefined;
    event.target.parentElement.remove();
  }
});

submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  let formData = new FormData();
  formData.append("discrition", formDiscrition.value);
  for (let j = 0; j <= i; j++) {
    if (fileList[j] !== undefined) {
      formData.append("file", fileList[j]);
    }
  }
  alert (`farmData:
  discrition: ${formData.get('discrition')}
  files: ${formData.get('file')}`);
  formData.submit();
});