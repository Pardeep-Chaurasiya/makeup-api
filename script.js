const div = document.createElement("div")
const card = document.createElement("div")

document.body.append(div);
div.setAttribute("background-color","yellow")
div.append(card);

card.setAttribute("style","width : 300px; height : 300px")

async function makeUp(){

    try{
        const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        const data = await res.json();
        console.log(data)
        let result = "";
        for(i=0;i<10;i++){
            result +=`
            <h2>Name : ${data[i].name}<h2>
            <h2>Brand : ${data[i].brand}<h2>
            <h2>Category : ${data[i].category}<h2>
            <img src=${data[i].image_link} alt="${data[i].name} image" />
            <hr/>
            `
            card.innerHTML = result;
        console.log(data[i].name)
        console.log(data[i].brand)
        console.log(data[i].category)
        console.log(data[i].image_link)
    }
    }catch(err){
        console.log(err)
    }
}
makeUp()