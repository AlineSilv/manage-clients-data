ALTER TABLE ENDERECO
    ADD CONSTRAINT ENDERECO_UNIQUE
        UNIQUE (rua, numero, bairro, cep, cidade_id, estado_id);