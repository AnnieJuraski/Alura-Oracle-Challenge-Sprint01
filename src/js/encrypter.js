const textArea = document.querySelector('.text-area');
const message = document.getElementById('msg');

const encryptButton = document.querySelector('.btn-encoder');
const decryptButton = document.querySelector('.btn-decoder');
const copyButton = document.querySelector('.btn-copy');


const cypher = [
  'eno', 'owt', 'eehrt', 'ruof', 'evif', 'xis', 'neves',
  'thgie', 'enin', 'net', 'ichi', 'ni', 'san', 'shi', 'go', 'roku',
  'nana', 'hachi', 'kyu', 'ju', 'mu', 'siod', 'sert', 'ortuaq',
  'ocnic', 'sies'
];

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];





//Encrypt button and encrypt function

encryptButton.addEventListener('click', function () {
  let plainText = textArea.value;
  let encryptedMSG = encrypt(plainText);

  let isValid = checkCharacters(plainText);

  if (plainText.trim().length === 0) {
    return;
  }
  else {
    if (isValid) {
      message.style.backgroundImage = 'none';
      message.value = encryptedMSG;
      textArea.value = "";
      showFeedBackMSG('Texto Criptografado!');
    } else {
      showErrorMessage();
    }
  }
})


function checkCharacters(string) {
  return /^[a-zA-Z, \n]+$/.test(string);
}



function encrypt(text) {

  let encryptedMessage = '';

  for (let i = 0; i < text.length; i++) {
    //the line below take reference of the character at index i in the text, then check where is it in the alphabet array and hold it in "indexCypher". If it is found it assigns the value of same index inside "cypher" array to build the encrypted message
    const indexCypher = alphabet.indexOf(text[i]);

    if (indexCypher != -1) {
      encryptedMessage += cypher[indexCypher];
    } else {
      encryptedMessage += text[i];
    }
  }  
  return encryptedMessage;
}



//Decrypt button and decrypt function

decryptButton.addEventListener('click', () => {
  let encryptedText = textArea.value;
  let decyptedMSG = decrypt(encryptedText);

  let isValid = checkCharacters(encryptedText);


  if (encryptedText.trim().length === 0) {
    return;
  }
  else {
    if (isValid) {
      message.style.backgroundImage = 'none';
      message.value = decyptedMSG;
      textArea.value = "";
      showFeedBackMSG('Texto Descriptografado!');
    }
    else{
      showErrorMessage();
    }
  }
})


function decrypt(encryptedMessage) {

  let decryptedMessage = '';
  
  for (let i = 0; i < encryptedMessage.length; i++) {
    let found = false;
    for (let j = 0; j < cypher.length; j++) {
      if (encryptedMessage.startsWith(cypher[j], i)) {
        decryptedMessage += alphabet[j];
        i += cypher[j].length - 1;
        found = true;
        break;
      }
    }
    if (!found) {
      decryptedMessage += encryptedMessage[i];
    }
  }  
  return decryptedMessage;  
}

//Copy button

copyButton.addEventListener('click', () => {

  message.select();
  message.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(message.value);
  showFeedBackMSG('Texto Copiado!');

})

//Error case

function showErrorMessage() {
  showFeedBackMSG('Insira apenas letras sem acentos, sem números ou caracteres especiais');
  textArea.value = '';
  message.value = '';
  message.style.setProperty('background-image', 'var(--msgBGImage)');
}


function showFeedBackMSG(text){
  let feedBack = document.getElementById('feedbackMSG')

  feedBack.innerText = text;
  feedBack.classList.add('active')

  setTimeout(()=>{
    feedBack.classList.remove('active');
  }, 2000);
}
