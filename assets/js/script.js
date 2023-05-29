$(document).ready(function(){
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales
        columns: [{
              text: "Nombre",
              key: "name"
          },
          {
              text: "Edad",
              key: "age"
          },
          {
              text: "Género",
              key: "gender"
          },
          {
              text: "País",
              key: "pais"
          },
        ],

        //carga de datos
        data: [{
              name: 'José Perez',
              age: 30,
              gender: 'M',
              pais: 'Colombia'
          },
          {
              name: 'María Pía',
              age: 24,
              gender: 'F',
              pais: 'Brasil'
          },
          {
              name: 'Pedro',
              age: 31,
              gender: 'M',
              pais: 'Perú'
          }
        ],

        //definición de botones
        buttons: {
            // addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            addButton:    '<button type="button" value="Nuevo" class="btn btn-success">Nuevo <i class="fa-solid fa-plus"></i></button>',
            cancelButton: '<button type="button" class="btn btn-warning">Cancelar <i class="fa-solid fa-text-slash"></i></button>',
            deleteButton: '<button type="button" class="btn btn-danger">Borrar <i class="fa-solid fa-trash"></i></button>',
            editButton:   '<button type="button" class="btn btn-primary">Editar <i class="fa-solid fa-pen-to-square"></i></button>',
            saveButton:   '<button type="button" class="btn btn-success">Guardar <i class="fa-solid fa-floppy-disk"></i></button>',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });
});