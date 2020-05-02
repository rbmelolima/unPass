const generateButton = document.querySelector('#button-generatePass');
const copyButton = document.querySelector('#button-copy');

let passwordRead = document.getElementById('password-read');

copyButton.addEventListener('click', function (event) {
    event.preventDefault();
    passwordRead.select();
    passwordRead.setSelectionRange(0, 99999);
    document.execCommand('copy');
});

generateButton.addEventListener('click', function (event) {
    event.preventDefault();

    let options = document.getElementsByName('switch-option-pass');
    let optionChecked;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            optionChecked = options[i].value;
        }
    }

    if (optionChecked === 'easy-remember') {
        passwordRead.value = easyRemember();
    }

    if (optionChecked === 'only-number') {
        passwordRead.value = randomNumber();
    }

});



function randomNumber() {
    const random = (Math.random() * Math.random());
    const number = random.toString().slice(2);
    return parseInt(number);
}

function randomHash(numbers, uppercase, lowercase, symbols, length) {
    let alphabet = [];
    let password = '';

    if (numbers === true)
        alphabet = [...alphabet, ...arrayNumbers];

    if (uppercase === true)
        alphabet = [...alphabet, ...arrayUpper];

    if (lowercase === true)
        alphabet = [...alphabet, ...arrayLower];

    if (symbols === true)
        alphabet = [...alphabet, ...arraySymbols];

    for (let i = 0; i < length; i++) {
        let index = returnIndex(alphabet.length);
        password += alphabet[index];
    }
    return password;
}

function easyRemember() {
    let separator = Math.floor(Math.random() * 100 + 1);
    let index1 = returnIndex(dicionary.length);
    let index2 = returnIndex(dicionary.length);
    password = dicionary[index1] + separator + dicionary[index2];
    return password;
}

function returnIndex(length) {
    return Math.floor(Math.random() * length);
}


const alphaNumbers = '5983016742';
const alphaUpper = 'ZHAQWBNMCVKJERTYUIOÇLXGFDSP';
const alphaLower = 'qçlkjpoiuytrewhgfdsamnbvcxz';
const alphaSymbols = '&()_+#$-={}[];\~!@%^|/';

const arrayNumbers = alphaNumbers.split('');
const arrayLower = alphaLower.split('');
const arraySymbols = alphaSymbols.split('');
const arrayUpper = alphaUpper.split('');

const cores = [
    'Abóbora', 'Açafrão', 'Amarelo', 'Ameixa', 'Amêndoa', 'Ametista', 'Anil', 'Azul', 'Bege', 'Bordô', 'Branco', 'Bronze', 'Cáqui',
    'Caramelo', 'Carmesim', 'Carmim', 'Castanho', 'Cereja', 'Chocolate', 'Ciano', 'Cinza', 'Cinzento', 'Cobre', 'Coral', 'Creme', 'Damasco', 'Dourado',
    'Escarlate', 'Esmeralda', 'Ferrugem', 'Fúcsia', 'Gelo', 'Grená', 'Gris', 'Índigo', 'Jade', 'Jambo', 'Laranja', 'Lavanda', 'Lilás', 'Limão', 'Loiro', 'Magenta',
    'Malva', 'Marfim', 'Marrom', 'Mostarda', 'Negro', 'Ocre', 'Oliva', 'Ouro', 'Pêssego', 'Prata', 'Preto', 'Púrpura', 'Rosa', 'Roxo', 'Rubro', 'Salmão',
    'Sépia', 'Terracota', 'Tijolo', 'Turquesa', 'Uva', 'Verde', 'Vermelho', 'Vinho', 'Violeta',
];

const frutas = [
    'Abacate', 'Abacaxi', 'Abiu', 'Acerola', 'Açaí', 'Ameixa', 'Ameixa ', 'Amora ', 'Atemoia', 'Banana', 'Cacau', 'Cajá', 'Caju',
    'Cana-de-açúcar', 'Carambola', 'Caqui', 'Castanha-do-Pará', 'Coco', 'Cupuaçu', 'Figo', 'Framboesa', 'Fruta-do-conde', 'Fruta-pão',
    'Goiaba', 'Graviola', 'Jabuticaba', 'Jaca', 'Jambo', 'Jamelão', 'Jatobá', 'Laranja', 'Lichia', 'Lima', 'Macaúba', 'Maçã', 'Mamão',
    'Mandacaru', 'Manga', 'Maracujá', 'Marmelo', 'Marolo', 'Melancia', 'Melão', 'Mexerica', 'Morango', 'Nectarina', 'Pequi', 'Pera',
    'Pera-do-cerrado', 'Pêssego', 'Pinha', 'Pinhão', 'Pitanga', 'Romã', 'Seriguela', 'Tamarindo', 'Tangerina', 'Tomate', 'Tucumã', 'Umbu',
    'Uva', 'Uvaia',
];

const animais = [
    'abelha', 'abutre', 'ácaro', 'águia', 'albatroz', 'alce', 'alpaca', 'anaconda', 'anchova', 'andorinha', 'anta', 'antílope', 'aranha',
    'arara', 'asno', 'atum', 'avestruz', 'babuíno', 'bacalhau', 'bacuri', 'badejo', 'bagre', 'baiacu', 'baleia', 'barata', 'barbo',
    'barracuda', 'besouro', 'boa', 'bode', 'boi', 'borboleta', 'boto', 'búfalo', 'burro', 'cabra', 'cachalote', 'cachorro', 'cágado',
    'camaleão', 'camarão', 'camelo', 'camundongo', 'canário', 'canguru', 'capivara', 'caracol', 'caranguejo', 'carneiro', 'carrapato',
    'cascavel', 'castor', 'cavalo', 'cegonha', 'centopeia', 'chimpanzé', 'chinchila', 'chita', 'cigarra', 'cisne', 'coala', 'cobra',
    'codorna', 'coelho', 'coiote', 'coruja', 'corvo', 'crocodilo', 'cupim', 'cutia', 'dingo', 'dinossauro', 'dodô', 'doninha', 'dourado',
    'elefante', 'ema', 'enchova', 'enferrujado', 'enguia', 'enho', 'escaravelho', 'escorpião', 'escrevedeira', 'esmerilhão', 'espadarte',
    'esponja', 'esquilo', 'estorninho', 'esturjão', 'faisão', 'falcão', 'ferreirinho', 'flamingo', 'flautim', 'foca', 'formiga', 'fossa',
    'fraca-da-guiné', 'freirinha', 'fuinha', 'furão', 'gafanhoto', 'gaivota', 'galinha', 'galo', 'gambá', 'gamo', 'ganso', 'garça', 'garoupa',
    'gato', 'gavião', 'gazela', 'geco', 'gerbo', 'gibão', 'girafa', 'girino', 'gnu', 'golfinho', 'gorila', 'gralha', 'grifo', 'grilo',
    'jabiru', 'jabuti', 'jaçanã', 'jacaré', 'jacu', 'jacupará', 'jaguar', 'jamanta', 'jararaca', 'javali', 'jegue', 'lacraia',
    'lagarta', 'lagartixa', 'lagarto', 'lagosta', 'lampreia', 'lavadeira', 'lavagante', 'leão', 'lebre', 'lêmure', 'leopardo', 'lesma', 'lhama',
    'libélula', 'macaco', 'mamute', 'manatim', 'mandril', 'mangangá', 'maracanã', 'marimbondo', 'mariposa', 'marisco', 'marmota', 'marreco', 'marta',
    'massarongo', 'naja', 'nambu', 'nandaia', 'narceja', 'narval', 'náutilo', 'negrinho', 'neon', 'nhacundá', 'nhandiá', 'niala', 'niquim',
    'panda', 'pantera', 'papagaio', 'pardal', 'pássaro', 'pato', 'pavão', 'peixe', 'pelicano', 'percevejo', 'perereca', 'periquito',
    'pernilongo', 'peru', 'pescada', 'pica-pau', 'pinguim', 'piolho', 'piranha', 'pirarucu', 'polvo', 'pombo', 'pônei', 'quati', 'quatimirim',
    'quatipuru', 'queixada', 'quetzal', 'rabudinho', 'raia', 'raposa', 'ratazana', 'rato', 'rêmora', 'rena', 'sabiá', 'sagui', 'salamandra',
    'salmão', 'sanguessuga', 'sapo', 'sardão', 'sardinha', 'saúva', 'seriema', 'serpente', 'siri', 'suçuarana', 'sucuri',
    'suiriri', 'suricate', 'tainha', 'tamanduá', 'tamboril', 'tapir', 'tarântula', 'tartaruga', 'tatu', 'tatuí', 'tentilhão', 'tetra',
    'texugo', 'tigre', 'vaca', 'veado', 'verdilhão', 'verdinho'
];

const dicionary = [...cores, ...animais, ...frutas];