async function data(){
    await fetch("")
    .them(res=>res.json())
    .them(json=>console.log(json))
}
data();