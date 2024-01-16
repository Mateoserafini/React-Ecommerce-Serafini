const products= [
    {
        id: '1',
        titulo: 'nose1',
        precio: 1000,
        categoria:'michimio',
        img: 'https://i.postimg.cc/NMTTrcq6/otro1.jpg',
        stock: 20,
        descripcion:'descripcion de producto'
    },
    {
        id: '2',
        titulo: 'nose2',
        precio: 1000,
        categoria:'otro',
        img: 'https://i.postimg.cc/cJPwHJj1/otro2.jpg',
        stock: 20,
        descripcion:'descripcion de producto'
    },
    {
        id: '3',
        titulo: 'nose3',
        precio: 1000,
        categoria:'val',
        img: 'https://i.postimg.cc/WzvZGHTQ/otro3.jpg',
        stock: 20,
        descripcion:'descripcion de producto'
    },
    {
        id: '4',
        titulo: 'nose4',
        precio: 1000,
        categoria:'val',
        img: 'https://i.postimg.cc/R0Ww4tgb/otro4.jpg',
        stock: 20,
        descripcion:'descripcion de producto'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(products => products.categoria === categoryId))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(products => products.id === productId))
        }, 500)
    })
}