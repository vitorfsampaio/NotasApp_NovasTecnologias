# App Mobile — Novas Tecnologias
Este é um aplicativo desenvolvido como parte do projeto da disciplina Novas Tecnologias, ministrada pelo professor Adam Smith.

Tecnologias Utilizadas
- Expo
- React Native
- Node.js
- Python
- Flask
- Twilio

## Front-end 💻

### Pré-requisitos
**Antes de começar, você precisa ter instalado:**

- Node.js (versão recomendada: a mais recente LTS)
- npm (gerenciador de pacotes que já vem com o Node.js)
- Expo CLI (será instalado automaticamente ao rodar o projeto)

### Como rodar o projeto
Clone o repositório ou baixe o projeto em sua máquina.

No terminal, navegue até a pasta do projeto:
*cd NotasApp_NovasTecnologias/front-end*

Instale as dependências:
*npm install*

Inicie o servidor de desenvolvimento:
npx expo start

Com o servidor rodando, você poderá:

Escanear o QR Code com o aplicativo Expo Go no seu celular (Android ou iOS) para testar.
Abrir em um emulador Android/iOS caso tenha configurado no seu computador.
Ou abrir a versão web e rodar sem nenhum pré requisito

## Back-end 🖥

### Pré-requisitos
Antes de começar crie uma conta na [twilio.com](https://www.twilio.com/pt-br) e pegue suas credenciais para o consumo da api.

![image](https://github.com/user-attachments/assets/d982533f-54e8-4f41-90ee-eeac1d305653)
> Exemplo de como vai ver suas credenciais.

Agora crie um arquivo `.env` na /back-end e defina as seguintes variáveis:

```env
ACCOUNT_SID = 
AUTH_TOKEN = 
TWILIO_NUMBER = 
MY_NUMBER =
```

### Como rodar a api

No terminal, navegue até a pasta do projeto: 
*cd NotasApp_NovasTecnologias/back-end*

Instale as dependências: 
`pip install -r requirements.txt`

Inicie o servidor de desenvolvimento: 
`python app.py`


### Exemplo da Requisição 
#### Ligar para contato de emergencia e mandar sms 
`POST /api/ligacao-emergencia`
```json
{
	"nome": "alda",
	"numero": "+5561986310265",
	"latitude": -41.20,
	"longitude": -1.00 
}
```
> nome = String
> 
> numero = String
> 
> latitude = Float
> 
> longitude = Float




