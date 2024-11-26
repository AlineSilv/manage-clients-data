package br.com.alinesilv.crud.exception;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> exception(Exception ex) {
        return new ResponseEntity<>("Algo inesperado aconteceu: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex) {
        if (ex.getCause() instanceof InvalidFormatException invalidFormatException) {
            Map<String, String> errors = new HashMap<>();
            String fieldName = invalidFormatException.getPath().get(0).getFieldName();

            String message = switch (fieldName) {
                case "idade" -> "Por favor, insira um número inteiro entre 6 e 99.";
                default -> "O valor fornecido para o campo '" + fieldName + "' é inválido.";
            };

            errors.put(fieldName, message);
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }

        String mensagem = "Erro no formato do JSON: Verifique os campos e valores enviados.";
        return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PessoaNotFoundException.class)
    public ResponseEntity<String> handlePessoaNotFoundException(PessoaNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EnderecoNotFoundException.class)
    public ResponseEntity<String> handleEnderecoNotFoundException(EnderecoNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PessoaAlreadyExistsException.class)
    public ResponseEntity<String> handlePessoaAlreadyExistsException(PessoaAlreadyExistsException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(EnderecoAlreadyExistsException.class)
    public ResponseEntity<String> handleEnderecoAlreadyExistsException(EnderecoAlreadyExistsException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<String> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException ex) {
        String mensagem = "Método HTTP não permitido para este endpoint.";
        return new ResponseEntity<>(mensagem + ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}
