# nginxnode
FullCycle Docker desafio Nginx com Node.js

# Desafio
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

```html
</p>

<p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>

<p> 

```

```html
</p>

<p>- Lista de nomes cadastrada no banco de dados.</p>

<p> 
```
Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node.


## Call flow and ports
web (8080) -> nginx -> (80) -> app(3000) -> dtabase(3306).


# Run

## Docker-compose
```bash
docker-compose up -d
```


# Requests

## Insert
```bash
curl -X POST http://localhost:8080/insert -H "Content-Type: application/json" -d '{"name": "Name01"}' 
```

## List all
```bash
curl -X GET http://localhost:8080/list 
```

## Delete all
```bash
curl -X "DELETE" http://localhost:8080/delete
```
