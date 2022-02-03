### Exercicio 1
a) É uma chave primária de uma outra tabela que é relacionada com a principal.

b) INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("001", "Bom!", 7, "004");

c) Aparece a msg dizendo que não é possivel atualizar pq não foi encontrada

d) ALTER TABLE Filmes DROP COLUMN rating;

e) Aparece a msg dizendo que não pode deletar por ter ligação com uma chave estrangeira

### Exercicio 2
a) A tabela de atores tem ligação com a tabela filmes e com a tabela atores. Ele se relaciona com os ids das tabelas filmes e atores

d) Aparece a msg de erro que não é possivel apagar o ator por ele ter relacação com outra tabela