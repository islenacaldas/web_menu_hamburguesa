(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr= document.getElementById("xhr"),
    $fragment= document.createDocumentFragment()


    console.log(xhr)

        xhr.addEventListener("readystatechange", e=>{
            if(xhr.readyState !== 4) return;
            //console.log(xhr)
            if(xhr.status>= 200 && xhr.status <300){
            
            console.log("exito")
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
})()



(()=>{
    const $fetch = document.getElementById("fetch"),
     $fragment = document.createDocumentFragment();

     fetch("https://jsonplaceholder.typicode.com/users")
     .then((res)=> (res.ok ? res.json(): Promise.reject(res)))
        //console.log(res);
    .then((json)=>{
       console.log(json) 
       json.forEach((el)=>{
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} --${el.email} --${el.phone}`;
        $fragment.appendChild($li)
       })

       $fetch.appendChild($fragment)
    })
    .catch((err)=>{
        console.log(err)
        //fetch.innerHTML = json;
        let message = err.statusText || "ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(()=>
        console.log(
            "esto se ejecutara independientemente del resultado de la promesa Fetch"
        )
    );
})();