const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simula um endpoint normal
app.get('/', (req, res) => {
  res.json({ mensagem: 'Root funcionando!' });
});

// Simula um endpoint normal
app.get('/rota-exemplo', (req, res) => {
  res.json({ mensagem: 'Rota exemplo funcionando!' });
});

// Simula um endpoint com possível XSS (Cross-Site Scripting)
app.get('/xss', (req, res) => {
  const nome = req.query.nome || 'usuário';
  res.send(`<h1>Olá, ${nome}</h1>`);
});

// Simula um endpoint vulnerável a SQL Injection (sem banco real, mas serve pro ZAP)
app.get('/login', (req, res) => {
  const { usuario, senha } = req.query;

  // Simula uma string de query vulnerável
  const fakeQuery = `SELECT * FROM users WHERE user = '${usuario}' AND password = '${senha}'`;

  res.send(`
    <p>Você tentou logar com:</p>
    <pre>${fakeQuery}</pre>
  `);
});

// Simula envio de dados sem autenticação (vulnerável)
app.post('/cadastro', express.urlencoded({ extended: true }), (req, res) => {
  res.send('Cadastro recebido! (simulado)');
});

// Simula headers mal configurados
app.get('/sem-headers-seguros', (req, res) => {
  res.send('<p>Esta rota não possui headers de segurança. </p>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor de teste rodando em http://localhost:${PORT}`);
});
