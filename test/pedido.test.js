const assert = require('assert');
const Pedido = require('../pedido');

describe("Sistema de Pedidos", function() {
    let pedido;

    beforeEach(function() {
        pedido = new Pedido();
    });

    it("deve adicionar itens ao pedido", function() {
        pedido.adicionarItem("Hamburguer", 10.5, 2);
        pedido.adicionarItem("Batata frita", 5.0, 1);
        assert.strictEqual(pedido.itens.length, 2);
    });

    it("deve calcular o total do pedido corretamente", function() {
        pedido.adicionarItem("Hamburguer", 10.0, 2); // 20.0
        pedido.adicionarItem("Refrigerante", 5.0, 1); // 5.0
        const total = pedido.calcularTotal(); // (25 - 2.5) + 5 = 27.5
        assert.strictEqual(total,30.0);
    });

    it("deve aplicar desconto ao pedido", function(){
        pedido.adicionarItem("Hamburguer", 10.0, 2); // 20.0
        pedido.aplicarDesconto("PROMO10");
        const total = pedido.calcularTotal();
        assert.strictEqual(total,25.0)

    })


});
