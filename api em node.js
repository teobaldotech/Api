
const express = require('express');
const app = express();
app.use(express.json()); // Permite ler JSON no corpo da requisição

let tarefas = []; // Simulando um banco de dados simples
let id = 1;

// Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  const novaTarefa = { id: id++, titulo };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

// Listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// Atualizar uma tarefa
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo } = req.body;
  const tarefa = tarefas.find(t => t.id == id);
  if (tarefa) {
    tarefa.titulo = titulo;
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
});

// Deletar uma tarefa
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  tarefas = tarefas.filter(t => t.id != id);
  res.status(204).send();
});

app.listen(8080, () => {
  console.log('API de tarefas rodando na porta 8080');
});