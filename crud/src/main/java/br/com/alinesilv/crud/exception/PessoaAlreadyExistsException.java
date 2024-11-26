package br.com.alinesilv.crud.exception;

public class PessoaAlreadyExistsException extends RuntimeException {
    public PessoaAlreadyExistsException(String message) {
        super(message);
    }
}
