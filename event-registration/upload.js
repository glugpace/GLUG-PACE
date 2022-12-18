
var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  Swal.fire({
    title: 'Loading...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });
  // console.log(e);
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    fetch(url,{
      method:"POST",
      body:JSON.stringify(obj)
    })
    .then(r => r.text())
    .then(data => {
      form.reset();
      window.open('success.html','_self')
    })
  });
});


let file = document.getElementById('picture');
let url = "https://script.google.com/macros/s/AKfycbzBTDg3RjYM_iY0ZEoWVhVahlHt0LTUltoqtpepmkpgX9emuejp7Qx2f7UY3eT0DqkcQQ/exec";
let obj;
let res,spt;
file.addEventListener('change',()=>{
  let fr = new FileReader;
  fr.addEventListener('loadend',()=>{
    res = fr.result;
    spt = res.split("base64,")[1];
    obj = {
      base64:spt,
      type:file.files[0].type,
      name:file.files[0].name
    }
    let a = JSON.stringify(obj);
    let b = JSON.parse(a);
    console.log(b.type)
  })
  fr.readAsDataURL(file.files[0]);
})


console.log("hiii")
