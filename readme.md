<h1> Challenge Oracle One e Alura - Criptografador de texto </h1>
<br>
<br>
Esse projeto é minha resolução do desafio Sprint 01 da Alura, dentro do programa Oracle Next Education (ONE).
<br>
O desafio consistia em criar um codificador e decodificador de texto usando Javascript usando também HTML e CSS para estruturação e estilização. 
<br>
<br>
<h2>Requisitos</h2>
<br>
Requisitor<br>
* Deve funcionar apenas com letras minúsculas<br>
* Não devem ser utilizados letras com acentos nem caracteres especiais<br>
* Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.<br>
<br>
Obs.: Como nota pessoal, gostaria de tentar depois uma resolução que permita usar caracteres especiais.
<br>
<br>
<br>
<h2> Metodologia de criptografia </h2>
<br>
Criei duas arrays, uma com os caracteres válidos chamada de "alphabet" e outra com o que eles irão se tornar após criptografados. Então com o uso do JS, criei uma função que após checar se os caracteres ão todos válidos, captura o valor do input e então verificar cada um dos indices do valor capturado e identifica eles dentro da array "alphabet", retornando o índice da devida letra e então adiciona à mensagem o valor que ele encontrou no mesmo índice dentro da array "cypher".
<br>
Para descriptogrfar o processo é parecido, porém uso nested loops que checa se a mensagem no indice i começa com o valor da array cypher no índice J. Se for encontrado, ele adiciona o valor da array "alphabet" no mesmo índice J e sai do loop.
<br>
<br>
<br>
<h2> Layout </h2>
<br>
Optei por não seguir o layout guia e ter uma abordagem diferente. Um layout com fundo gradiente, com 2 opções de tema (Escuro(padrão) e claro) e 4 opções de cor (azul, verde, vermelho e roxo), resultando em um total de 8 combinações possíveis. Tanto a cor quanto o tema são armazenados no Local Storage.
<br>
<br>
<br>
<h2> Tecnologias utilizadas neste projeto</h2>
<br>
   <div>
      <img align="center" height="100"  alt="css icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">  &nbsp;     
      <img align="center" height="100" alt="js icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"> &nbsp;&nbsp;
      <img align="center" height="100" alt="html icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> &nbsp;            
    </div>

