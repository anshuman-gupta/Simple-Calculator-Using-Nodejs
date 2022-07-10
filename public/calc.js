function add(){
    let a = document.getElementById("number1").value;
    document.getElementById("number1").innerHTML= a;

    let b = document.getElementById("number2").value;
    document.getElementById("number2").innerHTML=b;

    if(isNaN(a) || isNaN(b)){
        alert("Please Enter both the numbers")
        return;
    }

    let data= {
        a: a,
        b: b,
    };

    fetch("http://localhost:3000/add",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Ans", data.ans);
        document.getElementById("result").value= data.ans;
    });

}


function mul(){
    let a = document.getElementById("number1").value;
    document.getElementById("number1").innerHTML= a;

    let b = document.getElementById("number2").value;
    document.getElementById("number2").innerHTML=b;

    if(isNaN(a) || isNaN(b)){
        alert("Please Enter number")
        return;
    }

    let data= {
        a: a,
        b: b,
    };

    fetch("http://localhost:3000/mul",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Ans", data.ans);
        document.getElementById("result").value= data.ans;
    });

}

function div(){
    let a = document.getElementById("number1").value;
    document.getElementById("number1").innerHTML= a;

    let b = document.getElementById("number2").value;
    document.getElementById("number2").innerHTML=b;

    if(isNaN(a) || isNaN(b)){
        alert("Please Enter number")
        return;
    }

    let data= {
        a: a,
        b: b,
    };

    fetch("http://localhost:3000/div",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Ans", data.ans);
        document.getElementById("result").value= data.ans;
    });

}

function sub(){
    let a = document.getElementById("number1").value;
    document.getElementById("number1").innerHTML= a;

    let b = document.getElementById("number2").value;
    document.getElementById("number2").innerHTML=b;

    if(isNaN(a) || isNaN(b)){
        alert("Please Enter number")
        return;
    }

    let data= {
        a: a,
        b: b,
    };

    fetch("http://localhost:3000/sub",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(data),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Ans", data.ans);
        document.getElementById("result").value= data.ans;
    });

}

function clearInput(){
    document.getElementById("number1").value= null;
    document.getElementById("number2").value= null;
    document.getElementById("result").value= null;
}