// Controlador presupuesto
var budgetController = (function(){


})();
    // Controlador UI
    var UIController = (function () {

    })
    //Controlador global
    var controller = (function (budgetCtrl, UItrl) {
        var ctrlAddItem = function () {

            // 1. Obtener los datos de entrada
            // 2. Añadir el articulo al controlador presupuesto
            // 3. Añadir el articulo al UI
            // 4. Calcular el presupuesto
            // 5. Mostrar el presupuesto en la UI
            console.log('bubu');
            
        }
        
        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }

        });

    })(budgetController, UIController);