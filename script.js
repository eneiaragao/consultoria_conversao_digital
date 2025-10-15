document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const msgSucesso = document.querySelector('.mensagem-sucesso');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário (recarregamento)

            // 1. Validação Básica (o HTML já faz boa parte com 'required')
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            if (nome === "" || email === "") {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }
            
            // 2. Simulação de Envio (Em um ambiente real, este é o ponto onde você enviaria os dados para um serviço de e-mail ou API)
            
            // Exemplo de dados coletados (apenas para visualização no console)
            const dadosForm = {
                nome: nome,
                email: email,
                telefone: document.getElementById('telefone').value,
                objetivo: document.getElementById('objetivo').value,
                cidade: "Formosa/GO"
            };

            console.log("Dados do formulário coletados e prontos para envio:", dadosForm);
            
            // 3. Feedback para o Usuário
            form.style.display = 'none'; // Esconde o formulário
            
            msgSucesso.textContent = `Obrigado, ${nome}! Sua análise gratuita foi agendada. Entraremos em contato no WhatsApp em breve.`;
            msgSucesso.style.display = 'block'; // Mostra a mensagem de sucesso
            
            // Opcional: Recarrega o formulário após 5 segundos
            /*
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                msgSucesso.style.display = 'none';
            }, 5000);
            */
        });
    }
});