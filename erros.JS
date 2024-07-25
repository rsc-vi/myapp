class ValidarErro extends Error {
    constructor(){
        super("ops... tem que ser maior de 18")
        this.num = "ValidarErro";
    }
 }

 let idade = 16;

 try{
    if(idade < 18)
    throw new ValidarErro()
 }catch(error){
    console.log(error.num, error.message)
 }

 class ValidarErro2 extends Error{
    constructor(){
        super("Nome invalido");
        this.nome = "ValidarErro2";
    }
 }
 let nome = 'RE'
 try{
    if(typeof nome === 'string')
    throw new ValidarErro2()
 }catch(error){
    console.log(error.nome, error.message)
 }