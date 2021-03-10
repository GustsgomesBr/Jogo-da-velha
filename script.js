var quadrados = document.getElementsByClassName('quadrado')
var jogador = 2;
var jogadorInfo = document.getElementById('jogadorInfo')
console.log(quadrados)

 //Define o bloco clicado e o jogador que clicou
var blocos = {
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0],
    6: [0, 0],
    7: [0, 0],
    8: [0, 0],
    9: [0, 0]
}




function quadradoClick(id){
    if(blocos[id][0] === 0){
    
        if(jogador === 1){
            quadrados[id-1].innerHTML = "";
            quadrados[id-1].appendChild(document.createTextNode('Y'))
            jogadorInfo.innerHTML = "1"
            jogador = 2
        }else {
            jogador = 1
            jogadorInfo.innerHTML = "2"
            quadrados[id-1].innerHTML = "";
            quadrados[id-1].appendChild(document.createTextNode('X'))
        }
    
        blocos[id][0] = 1
        blocos[id][1] = jogador
    }else{
        alert('Já jogou...')
    }

    if(blocos[1][1] = blocos[2][1] = blocos[3][1]){
        alert('HÁ UM VENCEDOR')
    }
    if(blocos[4][1] = blocos[5][1] = blocos[6][1]){
        alert('HÁ UM VENCEDOR')
    }
    if(blocos[7][1] = blocos[8][1] = blocos[9][1]){
        alert('HÁ UM VENCEDOR')
    }
    if(blocos[1][1] = blocos[5][1] = blocos[9][1]){
        alert('HÁ UM VENCEDOR')
    }
    if(blocos[3][1] = blocos[5][1] = blocos[7][1]){
        alert('HÁ UM VENCEDOR')
    }

}