package br.com.alinesilv.crud.exception;

public class PessoaNotFoundException extends RuntimeException{
    public PessoaNotFoundException(final String message) {
        super(message);
    }
    public PessoaNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }
    public PessoaNotFoundException() {
    }
}
