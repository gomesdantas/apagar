player.onChat("start", function () {
    loops.forever(function () {

        // Posição atual do jogador
        let posJogador = player.position()

        // Posição 1 bloco abaixo do jogador (Y -1)
        let posAbaixo = positions.add(
            posJogador,
            positions.create(0, -1, 0)
        )

        // Verifica se o bloco abaixo é água
        if (blocks.testForBlock(WATER, posAbaixo)) {

            // Mensagem de alerta
            player.say("Água encontrada abaixo!")

            // Posição à esquerda do jogador (relativa à direção)
            let posEsquerda = positions.left(posJogador, 1)

            // Coloca tocha de redstone
            blocks.place(REDSTONE_TORCH, posEsquerda)

            // Pausa para não repetir constantemente
            loops.pause(500)
        }

        loops.pause(100)
    })
})
