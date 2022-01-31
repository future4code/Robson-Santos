### Exercicio 1
a) NOT NULL indica que o campo deve ser preenchido, DATE espera uma data no formato (YYYY-MM-DD) e VARCHAR espera uma string com 6 caracteres no máximo;

b) SHOW DATABASES mostra todas as databases cadastradas e SHOW TABLES as tabelas de cada database;

c) Retorna todos os campos da tabela, tipo de variáveis aceitas, se os campos devem ser preenchidos e qual a PK

### Exercicio 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
        );

b) Ocorre um erro pq a chave primária seria duplicada

### Exercicio 3
a) SELECT * from Actor WHERE gender = "female"

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) Retorna campos com NULL pq não existe;

d) SELECT id, name, salary from Actor WHERE salary < 500000;

e) Vai retornar um erro pq não existe o campo nome na tabela. O certo seria SELECT id, name from Actor WHERE id = "002"

### Exercicio 4
a) É uma query que mostra todas as informações de atores que os nomes começam com A e J e o salario é maior que 300000

b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;