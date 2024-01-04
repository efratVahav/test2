

let Product = document.querySelector('.Product-text')
let price = document.querySelector('.Product-number')
let category = document.querySelector('.category')
let image = document.querySelector('#productImage')
let cartTable = document.querySelector('#cartTable')

let list = []


let ProductButton = document.querySelector('.Add-Product')

ProductButton.addEventListener("click", function () {
    if (Product.value && price.value && category.value && image.value) {
        let listProduct = {

            "Product": Product.value,
            "price": price.value,
            "category": category.value,
            "image": image.value,
        }
        list.push(listProduct)

        create(listProduct, list.length)
        Product.value=""
        price.value=""
        category.value=""
        image.value=""
    } else (alert("All fields must be filled"))
})


function create(product, length) {
    let tr = document.createElement('tr')
    tr.className = 'length' + length ;
    // let cartTableTr=cartTable.appendChild(cartTableHtml)
    let ProductElement = document.createElement('td')
    ProductElement.innerHTML = product.Product
    let priceElement = document.createElement('td')
    priceElement.innerText = product.price

    let categoryElement = document.createElement('td')
    categoryElement.innerHTML = product.category
    let imageElement = document.createElement('td')
    let image = document.createElement('img')
    image.src = product.image;
    imageElement.appendChild(image)
    let tdButten = document.createElement('td')
    tdButten.innerHTML = '<button onclick="clearButton('+length+')">Delete</button>';
    tr.appendChild(ProductElement)
    tr.appendChild(priceElement)
    tr.appendChild(categoryElement)
    tr.appendChild(imageElement)
    tr.appendChild(tdButten)

    cartTable.appendChild(tr)
   


}
function clearButton(length) {
    let tr = document.querySelector('.length' + length)
    cartTable.removeChild(tr)
    list.splice(length, 1);

}
