export const createProductAdaptedFromFirestore = (doc) => {
    const fields = doc.data()
    
    return {
        id: doc.id,
        titulo: fields.titulo,
        categoria: fields.categoria,
        precio: fields.precio,
        img: fields.img,
        descripcion: fields.descripcion,
        stock: fields.stock
    }
}