package br.com.alinesilv.crud.exception;

public class EnderecoAlreadyExistsException extends RuntimeException {
    public EnderecoAlreadyExistsException(String message) {

        super(message);
    }
}
