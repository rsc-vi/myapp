try {
    carregando = true;

    let a = 20;
    let b = null;
    
    if(!b) throw new Error("ERRO DE DIVISÃO") 
    let result = a / b;
    if(result < 1) throw new Error("A DIVISÃO NÃO PODE SER MENOR Q 1")
    console.log("calculou!");
    console.log(result);
    
} catch (error) {
   
    console.log("ERRO!");
    console.log(error.message)
    
   
}finally{

    carregando = false;
    console.log("ABAGARAS")

    
}

 