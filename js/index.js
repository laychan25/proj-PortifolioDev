const botaoMostrarProjetos = document.querySelector('.btn-mostar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')


   botaoMostrarProjetos.addEventListener('click', () =>{
    mostarMaisProjetos()
    botaoMostrarProjetos.classList.add("remover")


   })

   function mostarMaisProjetos(){
    projetosInativos.forEach(projetoInativo=> {
        projetoInativo.classList.add('ativo')
        
    });
   }
