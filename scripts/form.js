class Forma {
  constructor(fArea, tArea, sBtn) {
    this.formArea = fArea;
    this.textArea = tArea;
    this.submitBtn = sBtn;
    this.fileList = [];
    this.i = 0;
  }

  unavailableForm () {
    this.textArea.innerText = '';
    this.textArea.setAttribute("disabled", "disabled");
    this.submitBtn.remove();
    fileBtn.parentElement.remove();
    list.childNodes.forEach ((element) => {
      element.children[0].remove();
    })
    let div = document.createElement('div');
    div.className = 'sended';
    div.innerText = 'Задание отправлено ментору'
    this.formArea.append(div);
    let p = document.createElement('p');
    p.innerHTML = 'После проверки задания, ментор пришлет вам приглашение в <a href="Projects.html">проекты</a>.';
    this.formArea.append(p);
  }

  addFile (file) {
    this.fileList[this.i] = file;
    let li = document.createElement('li');
    li.innerHTML = `${this.fileList[this.i].name}` + '<spun data-cansel> &#10006;</spun>';
    li.setAttribute("value", this.i);
    list.append(li);
    this.i++;
  }

  removeFile (e) {
    if (e.target.dataset.cansel != undefined) {
      this.fileList[e.target.parentElement.value] = undefined;
      e.target.parentElement.remove();
    }
  }

  submitF (e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("discription", this.textArea.value);
    for (let j = 0; j <= this.i; j++) {
      if (this.fileList[j] !== undefined) {
        formData.append("file", this.fileList[j]);
      }
    }
    localStorage.testSended = true;
    this.i = 0;
    this.unavailableForm();
    this.send(formData);
  }

  async send (formData) {
    let response = await fetch('../controller/ajax-controller.php', {
      method: 'POST',
      body: formData
    });
    let result = await response.json();
    alert(result.message);
  }
}

const fileBtn = document.getElementsByName('file')[0];
const list = document.getElementsByClassName('file-list')[0];
const submitBtn = document.getElementsByClassName('submit-btn')[0];
const formText = document.getElementsByClassName('input-test-text')[0];
const forma = new Forma(document.getElementsByName('form')[0], formText, submitBtn);


fileBtn.addEventListener('change', () => {
  forma.addFile(fileBtn.files[0]);
})

list.addEventListener('click', (event) => {
  forma.removeFile(event);
})

submitBtn.addEventListener('click', (event) => {
  forma.submitF(event);
})

if (localStorage.testSended) forma.unavailableForm;

const choiseDisplay = document.querySelector('[data-spec-display]');
if (localStorage.spec != undefined) {
  choiseDisplay.innerText = localStorage.spec;
}