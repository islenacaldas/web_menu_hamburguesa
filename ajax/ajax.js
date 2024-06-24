(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr= document.getElementById("xhr"),
    $fragment= document.createDocumentFragment()


    console.log(xhr)

        xhr.addEventListener("readystatechange", e=>{
            if(xhr.readyState !== 4) return;
            //console.log(xhr)
            if(xhr.status>= 200 && xhr.status <300){
            
            //console.log("exito")
            //console.log(xhr.responseText)
            //$xhr.innerHTML =
            let json = JSON.parse(xhr.responseText)
            console.log(json)

            json.forEach(el=> {
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name}--${el.phone}--${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment)
            }else{
                console.log("error")
                let message = xhr.statusText|| "ocurrio un error"
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`
            }
        });

        xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

        xhr.send();
})();

(()=>{
    const $fetch = document.getElementById("fetch"),
     $fragment = document.createDocumentFragment();

     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=> (res.ok ? res.json(): Promise.reject(res)))
        //console.log(res);
    .then((json)=>{
       //console.log(json) 
       $fetch.innerHTML =json;
       json.forEach((el)=>{
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} --${el.email} --${el.phone}`;
        $fragment.appendChild($li)
       })

       $fetch.appendChild($fragment)
    })
    .catch((err)=>{
       // console.log(err)
        //fetch.innerHTML = json;
        let message = err.statusText || "ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(()=>
       // console.log(
            "esto se ejecutara independientemente del resultado de la promesa Fetch"
        )
})();

(()=>{
    const $fetchAsync= document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        try{
          let res=  await fetch("https://jsonplaceholder.typicode.com/users"),
          json= await res.json()

          console.log(res, json);

         // if(!res.ok) throw new error("ocurrio un error")
            if(!res.ok) throw{status:res.status, statusText: res.statusText}

          json.forEach((el)=>{
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} --${el.email} --${el.phone}`;
            $fragment.appendChild($li)
           })

        $fetchAsync.appendChild($fragment)

        }catch(err){
            console.log("Estoy en el catch y pasamos el error")
            let message = err.statusText|| "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}:${message}`;
        }finally{
            console.log("esto se ejecuta independientemente del try catch")
        }
    }

    getData()
})()


(()=>{
 const $axios= document.getElementsById("axios"),
 $fragment = document.createDocumentFragment();

 axios
 .get("https://jsonplaceholder.typicode.com/users")
 .then((res)=>{
    console.log(res)
    let json= res.data;

    json.forEach((el)=>{
        const $li= document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
    })

 $axios.appendChild($fragment);

 })
 .catch(err=>{
    console.log(err.response);
    let message = err.response.statusText || "ocurrio un error";
    $axios.innerHTML = `Error ${err.response.status}: ${message}`
 })
 .finally(()=>{
    console.log("Esto se ejecutara independientemente del resultado de Axios")
 });
})()