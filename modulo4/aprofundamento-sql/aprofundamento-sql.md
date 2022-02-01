### Exercicio 1
a) O comando remove a coluna salary da tabela Actor;
b) O comando troca o nome da coluna gender por sex;
c) O comando extende o limite de strings aceitos na coluna gender para 255;
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercicio 2
a) update Actor set name = "Moacyr Franco", birth_date = "1936-10-05" where id = "003";

b)  update Actor set name = "JULIANA PAES" where name = "Juliana Paes";
    update Actor set name = "Juliana Paes" where name = "JULIANA PAES";

c)update Actor set name = "Fernanda Montenegro", birth_date = "1929-10-16", salary = "1000000", gender = "female" where id = "005";

d) Dá erro por não encontrar o campo na tabela

