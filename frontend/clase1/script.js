// creamos el elemento template
const tmp = document.createElement('template');



// definimos el innerHtml --> donde le agregamos los elementos 
// aqui adentro definimos todos los elementos que interacturan 
tmp.innerHTML= `
    <div>
        <input type="text" placeholder="ingrese texto" /> <br />
        <label miPropiedad="" />
    </div>    
`; 

// definimos la clase 
class MiElemento extends HTMLElement {


    constructor() {
        super();

        this._shadowRoot = this.attachShadow({'mode':'open'});
        this._shadowRoot.appendChild(tmp.content.cloneNode(true));

    }
}

// para crear el elemento y mostrarlo en la pagina html
window.customElements.define('neo-input',MiElemento);