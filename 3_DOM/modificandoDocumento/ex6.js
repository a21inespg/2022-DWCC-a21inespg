let data = {
    "Fish": {
    "trout": {},
    "salmon": {}
    },
    "Tree": {
    "Huge": {
    "sequoia": {},
    "oak": {}
    },
    "Flowering": {
    "apple tree": {},
    "magnolia": {}
    }
    },
    "COche": {
        "trout": {},
        "salmon": {}
        }
    };
function crearLista(array) {
    let ol=document.createElement("ul");
    for (const [nome, tipo] of array) {
        let li=document.createElement("li");
        li.append(nome)
        ol.append(li);
        array2=Object.entries(tipo);
    }


}

function createTree(data){
    let array=Object.entries(data);
 

  
    let ol=document.createElement("ul");
    
    for (const [nome, tipo] of array) {
        let li=document.createElement("li");
        li.append(nome)
        ol.append(li);
        array2=Object.entries(tipo);

        let ol2=document.createElement("ul");
            for (const [key, value] of array2) {
                let li2=document.createElement("li");
                li2.append(key);
                ol2.append(li2);
                array3=Object.keys(value);
                

                if (array3.length!=0) {
                    let ol3=document.createElement("ul");
                    for (let key2 of array3) {
                        console.log(key2);
                        let li3=document.createElement("li");
                        li3.append(key2);
                        ol3.append(li3);
                    }
                    li2.append(ol3);

                    
                }
                

            }
        li.append(ol2);

    
    
    }
document.body.append(ol);


}

createTree(data);

// createTree2(data);


function createTree2(data) {
    ol=crearLista(Object.entries(data));
    values=Object.values(data);

    for (value of values) {
        ol2=crearLista(Object.entries(values))
        ol.append(ol2);
    }

    document.body.append(ol);
}