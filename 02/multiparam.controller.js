angular.module("aplicacao", [])
    .controller("control", 
        function ($scope) {
            
            $scope.cadastrar = cadastrar;
            $scope.contatos = new Array();

            function cadastrar(contato) {
                $scope.contatos.push({
                    nome: contato.nome,
                    idade: contato.idade,
                    telefone: contato.telefone
                });
                console.log(contatos);
            }
        }
    );
