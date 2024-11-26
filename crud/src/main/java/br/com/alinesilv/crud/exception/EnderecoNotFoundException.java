package br.com.alinesilv.crud.exception;

public class EnderecoNotFoundException extends RuntimeException{
    public EnderecoNotFoundException(final String message) {

        super(message);
    }
    public EnderecoNotFoundException(final String message, final Throwable cause) {

        super(message, cause);
    }
    public EnderecoNotFoundException() {
    }
}
