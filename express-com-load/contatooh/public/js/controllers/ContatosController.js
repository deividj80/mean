angular.module('contatooh').controller('ContatosController',
    function ($scope, $resource) {

        $scope.total = 0;

        $scope.incrementa = function () {
            $scope.total++;
        }

        $scope.mensagem = {
            texto: ''
        };

        $scope.contatos = [];

        $scope.filtro = '';

        var Contato = $resource('/contatos/:id');


        function buscarContatos() {

            Contato.query(
                function (contatos) {
                    $scope.contatos = contatos;
                    $scope.mensagem = {};
                },
                function (erro) {
                    console.log(erro);
                    $scope.mensagem = {
                        texto: 'Não foi possivel obter a lista de contatos'
                    };
                }
            );

        }

        buscarContatos();

        $scope.remove = function (contato) {
            Contato.delete({
                    id: contato._id
                },
                buscarContatos,
                function (erro) {
                    console.log(err);
                    $scope.mensagem = {
                        texto: 'Não foi possível remover o contato'
                    };

                }

            );

        };
    });