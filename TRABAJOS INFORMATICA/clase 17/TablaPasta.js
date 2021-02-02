let ingredientesP = [
    {Ingrediente:"Macarrones", Cantidad: 180 , TipoDeaAimento: "Grano", imagen:"https://ep01.epimg.net/elcomidista/imagenes/2017/09/15/articulo/1505475554_963222_1505477258_noticia_normal.jpg"},
    {Ingrediente:"Tocineta", Cantidad: "4 lonchas", TipoDeaAimento: "Carnes", imagen:"https://www.jhonespig.com/wp-content/uploads/2017/11/tocineta-jhones.jpg"},
    {Ingrediente:"Mantequilla", Cantidad: 80 , TipoDeaAimento: "Grasas", imagen:"https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/11/08/5e9981d1ceb6c.jpeg"},
    {Ingrediente:"Cebolla", Cantidad: 1, TipoDeaAimento: "Vegetal", imagen:"https://jumbocolombiafood.vteximg.com.br/arquivos/ids/197929-1000-1000/185.jpg?v=636243952579870000"},
    {Ingrediente:"Pimiento verde", Cantidad: 1, TipoDeaAimento: "Vegetal", imagen:"https://salsaspicantes.net/wp-content/uploads/2019/04/pimiento-verde.jpg"},
    {Ingrediente:"Mostaza en polvo", Cantidad: "1 cucharada", TipoDeaAimento: "Condimento", imagen:"https://botanicagranel.mx/wp-content/uploads/2018/09/Mostaza-en-polvo.jpg"},
    {Ingrediente:"Pimentón dulce", Cantidad: "1/2 cucharada" , TipoDeaAimento: "Vegetal", imagen:"https://www.abc.com.py/resizer/xF7t59ljoWasOzDb3HaWeqfOtnk=/fit-in/770x495/smart/arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/5ALS5IPXQBCNTM42QCGLXKYB3I.jpg"},
    {Ingrediente:"Harina", Cantidad: 35, TipoDeaAimento: "Cereal", imagen:"https://i.blogs.es/95d4c3/harina-trigo-tipos/230_165.jpg"},
    {Ingrediente:"Leche", Cantidad: 250 , TipoDeaAimento: "Lacteo", imagen:"https://ep01.epimg.net/elpais/imagenes/2019/12/20/buenavida/1576848685_542543_1576848937_noticia_normal.jpg"},
    {Ingrediente:"Sopa de tomate en conserva", Cantidad: 420, TipoDeaAimento: "", imagen:"https://image.freepik.com/vector-gratis/tomate-fresco-sopa-tomate-lata_1308-31042.jpg"},
    {Ingrediente:"Queso chedar rayado", Cantidad: 180 , TipoDeaAimento: "Lacteo", imagen:"https://i1.wp.com/commememucho.com/wp-content/uploads/2020/01/queso-cheddar-1.jpg"},
    {Ingrediente:"salsa worcestershire", Cantidad: "1 cucharada", TipoDeaAimento: "Salsa", imagen:"https://saborgourmet.com//wp-content/uploads/salsa-worcester-salsa-perrins-iStock-.jpg"}
]
let Tabla = document.querySelector('#pasta')
let contenidoTabla = '<tr><th>Ingrediente</th><th>Cantidad</th><th>Tipo De Aimento</th><th>Imagen</th></tr>'
for (elemento of ingredientesP){
    contenidoTabla = contenidoTabla + `<tr><td>${elemento.Ingrediente}</td><td>${elemento.Cantidad}</td><td>${elemento.TipoDeaAimento}</td>
    <td><img width="100px" src="${elemento.imagen}" alt=""></td></tr>`
}
Tabla.innerHTML = contenidoTabla;
