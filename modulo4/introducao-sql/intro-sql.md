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

b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

### Exercicio 5
a) CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    sinopse VARCHAR(255) NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT
);

b) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

c) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

d) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

e) INSERT INTO Filmes (id, nome, sinopse, data_lancamento, avaliacao) 
VALUES(
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-15",
    10
);

### Exercicio 6
a) SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";

b) SELECT * FROM Filmes WHERE nome = "O Auto da Compadecida";

c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;

### Exercicio 7
a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";

b) SELECT * FROM Filmes WHERE nome LIKE "%Auto%" OR sinopse LIKE "%Auto%";

c) SELECT * FROM Filmes WHERE data_lancamento < "2022-01-31";

d) SELECT * FROM Filmes WHERE data_lancamento < "2022-01-31" AND (nome LIKE "%Auto%" OR sinopse LIKE "%Auto%") AND avaliacao > 7;