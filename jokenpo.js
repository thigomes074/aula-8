const jokenpo = {
    maoJogadorUm: null,
    maoJogadorDois: null,
    maos: {
        pedra: {
            vence: {
                tesoura: 'quebra',
                lagarto: 'esmaga'
            }
        },
        papel: {
            vence: {
                pedra: 'embrulha',
                spock: 'refuta'
            }
        },
        tesoura: {
            vence: {
                papel: 'corta',
                lagarto: 'decapita'
            }
        },
        lagarto: {
            vence: {
                papel: 'come',
                spock: 'envenena'
            }
        },
        spock: {
            vence: {
                tesoura: 'quebra',
                pedra: 'vaporiza'
            }
        }
    },
    jogar: function() {
        if (this.maoJogadorUm === null) {
            // lançar exceção
            throw new Error('Jogador um não escolheu uma mão');
        }
        if (this.maoJogadorDois === null) {
            throw new Error('Jogador dois não escolheu uma mão');
        }
        // --------------------------------
        if (this.maoJogadorUm === this.maoJogadorDois) {
            return {
                vencedor: 0,
                texto: 'Empatou'
            };
        }
        const mao1 = this.maoJogadorUm;
        const mao2 = this.maoJogadorDois;
        if (jokenpo['maos'][mao1]['vence'][mao2]) {
            return {
                vencedor: 1,
                texto: `${mao1} ${jokenpo['maos'][mao1]['vence'][mao2]} ${mao2}`
            };
        } else {
            return {
                vencedor: 2,
                texto: `${mao2} ${jokenpo['maos'][mao2]['vence'][mao1]} ${mao1}`
            };
        }
    }
};

const divHumano = document.querySelector('div#humano');
const maos = document.querySelectorAll('div#humano img.mao');
divHumano.addEventListener('click', function(e) {
    const elemento = e.target;
    if (elemento.classList.contains('mao')) {
        for (const mao of maos) {
            if (mao !== elemento) {
                mao.classList.remove('selecionada')
            }
        }
        elemento.classList.toggle('selecionada');
    }
});
