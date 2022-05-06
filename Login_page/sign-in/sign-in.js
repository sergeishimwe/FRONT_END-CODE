const inpkey = document.getElementById("inpkey");
const inpvalue = document.getElementById("inpvalue");
const btnInsert = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");
const form = document. getElementById('form')

btnInsert.onclick = function()
{
      const key = inpkey.value;
      const value = inpvalue.value;

      if (key && value){
            localStorage.setItem(key, value);
            location.reload();
      }
};
for(let i =0; i<localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      isOutput.innerHTML +=`${key}: ${value}<br />`;
}
const errorElement = document.getElementById('error')
//.validation 

form.addEventListener('submit',(e) =>{
      let messages = []
      if (inpkey.value === '' || inpkey.value == null){
            messages.push('email is required')
      }
      if (inpvalue.value.length <=6){
            messages.push('Password must be long than 6')
      }
      if (inpvalue.value.length >=20){
            messages.push('Password must be less than 20')
      }
      if (messages.length >0){
            e.preventDefault()
            errorElement.innerText = messages.join(',')
      }
      e.preventDefault()
})
