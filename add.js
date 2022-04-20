class Curso {
    constructor(name, price, duration){
        this.name = name;
        this.price = price;
        this.duration = duration;
    }
}

class UI{
    addCurso(curso) {
        const cursoList = document.getElementById('curso-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong class="listName">Nombre del curso</strong>: ${curso.name}
                    <strong class="listName">Precio del curso</strong>: $${curso.price}
                    <strong class="listName">Duración del curso</strong>: ${curso.duration}          
                    <a href="#" class="btn-delete" name="delete">Quitar</a>
                </div>
            </div>
        `;
        cursoList.appendChild(element);
        
    }
    resetform() {
        document.getElementById('curso-form').reset();
    }

    deleteCurso(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Curso borrado con éxito', 'verde');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 3000);

    }
}

document.getElementById('curso-form')
    .addEventListener('submit', function (e) {
       const name = document.getElementById('name').value;
       const price = document.getElementById('price').value;
       const duration = document.getElementById('duration').value;

       const curso = new Curso(name, price, duration);

       const ui = new UI();

       if(name === '' || price === '' || duration === '') {
           return ui.showMessage('Complete los campos por favor', 'rojo');
       }
       ui.addCurso(curso);
       ui.resetform();
       ui.showMessage('Curso agregado', 'alert') 

       e.preventDefault();
    });

document.getElementById('curso-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteCurso(e.target);
})    

    