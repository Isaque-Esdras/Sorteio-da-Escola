
var dive = document.getElementById('divv')
var turma1 = ["23 anos, Laecio", "18 anos, Luana", "13 anos, Marcos", "16 anos, Marlina", "17 anos, Valda",
 "24 anos, Clemente", "17 anos, Luan"]

 var turma2 = ["18 anos, Lorena", "19 anos, Marlon", "15 anos, Alberto", "19 anos, Fernando", "17 anos, Laecio",
"28 anos, Ladsson", "23 anos, Kaio", "22 anos, Lucas", "25 anos, Lionara", "30 anos, Guto"]

function resultado() {
     
        if (turma1.length < turma2.length) {

            var total = turma2.length
            var maiorT1 = turma1[0]
            var maiorT2 = turma2[0]
            for (const apos in turma1) {
                if (turma1[apos] > maiorT1) {
                    maiorT1 = turma1[apos]
                }
            }
            for (const sobrepor in turma2) {
                if (turma2[sobrepor] > maiorT2) {
                    maiorT2 = turma2[sobrepor]
                    
                }
            }

            dive.innerHTML += `A turma com a maior quantidade de Alunos é a Turma 2 com ${total} alunos. O aluno com maior idade entre 
            as turmas é: ${maiorT2}, Turma 2, Sala 8.`

            window.alert("A turma 2, por regra é a escolhida.")
        }else{

            if (turma1.length > turma2.length) {
            
            var totale = turma1.length
            var maiorTt1 = turma1[0]
            var maiorTt2 = turma2[0]
            for (const logapos in turma2) {
                if (turma2[logapos] > maiorTt2) {
                    maiorTt2 = turma2[logapos]
                }
            }
            for (const sobre in turma1) {
                if (turma1[sobre] > maiorTt1) {
                    maiorTt1 = turma1[sobre]
                    
                }
            }
            }
            dive.innerHTML = ``
            dive.innerHTML += `A turma com a maior quantidade de Alunos é a Turma 1 com ${totale} alunos.O aluno com maior idade entre
            as turmas é: ${maiorTt1}, Turma 1, Sala 7.`

            window.alert("A turma 1, por regra é a escolhida.")
        }
}