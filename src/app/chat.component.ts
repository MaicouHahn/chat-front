import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { sender: string, text: string }[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      // Adiciona a mensagem do usuário
      this.messages.push({ sender: 'voce', text: this.newMessage });
      // Aqui você pode adicionar uma resposta do atendente se desejar
      this.messages.push({ sender: 'atendente', text: 'Obrigado por sua mensagem!' });
      // Limpa o campo de entrada
      this.newMessage = '';
    }
  }
}
