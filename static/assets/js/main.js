let list = document.getElementById("out-list");
let pre_content = document.getElementById("pre-content");
let out_name = document.getElementById("out-name");

let my_name = undefined;

function gra(min, max) {
    return Math.random() * (max - min) + min;
}

function new_data() {
  let numero1=Math.floor(gra(0,lista1.length))
  let numero2=Math.floor(gra(0,lista2.length))
  let numero3=Math.floor(gra(0,lista3.length))
  let numero4=Math.floor(gra(0,lista4.length))
  let numero5=Math.floor(gra(0,lista5.length))
  let numero6=Math.floor(gra(0,lista6.length))
  let numero7=Math.floor(gra(0,lista7.length))
  let numero8=Math.floor(gra(0,lista8.length))

  let data = [lista1[numero1],
              lista2[numero2],
              lista3[numero3],
              lista4[numero4],
              lista5[numero5],
              lista6[numero6],
              lista7[numero7],
              lista8[numero8]]

  return(data)
}

function gen_elements(d) {
  d.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  })
}

function remove_elements(lis) {
  while (lis.hasChildNodes()) {
    lis.removeChild(lis.firstChild);
  }
}

function showContent(){
  let input_val = document.getElementById("input-name").value;

  if (input_val.length > 3) {
    input_val +=","
  } else {
    input_val = ""
  }

  if (output.classList.contains("hidden")) {
    out_name.innerText = input_val;
    pre_content.classList.add("hidden")
    output.classList.remove("hidden")
    return(true)
  }
  else {
    return(false)
  }
}

function regenerate() {
  let data = new_data();
  remove_elements(list);
  gen_elements(data);
}

regenerate()
