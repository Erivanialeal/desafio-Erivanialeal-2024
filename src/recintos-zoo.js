 //recintos existentes no zoológico
const RecintosExistente = [
    {numero:1,bioma:'savana',tamanho_total:10,quantidade:3},
    {numero:2,bioma:'floresta',tamanho_total:5,quantidade:0},
    {numero:3,bioma:['savana','rio'],tamanho_total:7,quantidade:1},
    {numero:4,bioma:'rio',tamanho_total:8,quantidade:0},
    {numero:5,bioma:'savana',tamanho_total:9,quantidade:1}
]; 
//animais disponiveis
const animais = [
    {especie:'LEAO',tamanho:3,bioma:'savana',carnivero:true},
    {especie:'LEOPARDO',tamanho:2,bioma:'savana',carnivero:true},
    {especie:'CROCODILO',tamanho:3,bioma:'rio',carnivero:true},
    {especie:'MACACO',tamanho:1,bioma:['savana','floresta'],carnivero:false},
    {especie:'GAZELA',tamanho:2,bioma:'savana',carnivero:false},
    {especie:'HIPOPOTAMO',tamanho:4,bioma:['savana','rio'],carnivero:false}

];
//Classe para gerenciar as informações
class RecintosZoo {
    //construtor inicializando a lista de recintos existente
    constructor(RecintosExistente){
        this.RecintosExistente = RecintosExistente;
    }
    
//metado para analisar quais recintos são viáveis para colocar o animal.
    analisaRecintos(animal, quantidade) {
        const recintosViaveis = this.RecintosExistente.
           filter(recinto =>{
            const biomacompativel = Array.isArray(recinto.bioma)
                ? recinto.bioma.includes(animal.bioma)
                :recinto.bioma === animal.bioma;

            const espaçoDisponivel = recinto.tamanho_total - recinto.quantidade;
            const espaçoNecessario = animal.tamanho * quantidade;

            return biomacompativel && espaçoDisponivel >= espaçoNecessario
        })
        .map(recinto => `Recinto ${recinto.numero} (espaço livre: ${recinto.tamanho_total - recinto.quantidade} total: ${recinto.tamanho_total})`);
    return {recintosViaveis};
    }
}

export { RecintosZoo as RecintosZoo };

new RecintosZoo().analisaRecintos();
