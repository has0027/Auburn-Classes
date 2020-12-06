#lang racket

;; report-no-binding-found : variable -> error
(define report-no-binding-found
  (lambda (search-var)
    (error 'apply-env "No binding for ~s" search-var)))

;; report-invalid-env : environment -> error
(define report-invalid-env
  (lambda (env)
    (error 'apply-env "Bad environment: ~s" env)))

;; empty-env : () -> environment
(define empty-env
  (lambda ()
    (list 'empty-env)))

;; entend-env : environment, variable, value -> environment
(define extend-env
 (lambda (env var val)
   (list 'extend-env var val env)))

;; apply-env : evironment, variable -> value
(define apply-env
 (lambda(env search-var)
   (cond
     ((eqv? (car env)'empty-env) (report-no-binding-found search-var))
     ((eqv? (car env)'extend-env)(let ((saved-var (cadr env))
                                        (saved-val (caddr env))
                                        (saved-env (cadddr env)))
                                    (if (eqv? search-var saved-var)
                                        saved-val
                                        (apply-env saved-env search-var))))
     (else (report-invalid-env env)))))

;; interpreter : a program tree -> void
(define interpreter
  (lambda (prog)
    (let ((theEnv (empty-env)))
       (cond
         ((eqv? (car prog) 'program) (process (cdr prog) theEnv)(display "\nDone"))
         ( else (display "This doesn't look like a program."))))))
   
;; process : statments -> void
(define process
  (lambda (statements myEnv)
    (cond
      ((null? statements) myEnv)
      ( else  (process (cdr statements) (interp (car statements) myEnv))))))

;; interp : statment -> environment
(define interp
  (lambda (stmt myEnv)
       (cond
        ((eqv? (car stmt) 'print) (begin
                                    (display "\n")
                                    (display (exp myEnv (cadr stmt)))
                                    myEnv))
        ((eqv? (car stmt) '=) (extend-env myEnv (cadr stmt)(exp myEnv (caddr stmt))))
        ( else (display "\nI saw something I didn't understand.")))))
                    
;; exp : expression -> value    
(define exp
  (lambda (myEnv e)
    (cond
      ((integer? e) e)
      ((symbol? e) (apply-env myEnv e ))
      ((boolean? e) e)
      ((eqv? (car e) '+) (+ (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) '-) (- (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) '*) (* (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) '/) (/ (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) '<) (< (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) '>) (> (exp myEnv (cadr e))(exp myEnv (caddr e))))
      ((eqv? (car e) 'and) (and (exp myEnv (cadr e))(exp myEnv (caddr e))))
      (else (display "I saw something I didn't understand")))))

;;; DON'T TOUCH THE LINE BELOW THIS ONE IF YOU WANT TO RECEIVE A GRADE! ;;;
(provide interpreter)
;;; DON'T TOUCH THE LINE ABOVE THIS ONE IF YOU WANT TO RECEIVE A GRADE! ;;;

;;; Sample testing programs below ;;;
;;; Actual tests NOT guaranteed match the tests below ;;;

; aprog tests simple print statement
; text file: print 1 + 2
(define aprog
  '( program ( print ( + 1 2 ) ) )) ; should print 3

; bprog tests input3.txt (should get error message - no dog variable)
(define bprog
  ' ( program ( = x ( * ( + 2 3 ) dog ) ) ))

; cprog tests input2.txt
(define cprog
  '( program
     ( = x 3 )
     ( = y 5 )
     ( = z ( / ( + x y ) 3 ) )
     ( print z ) )) ; should print 8/3

; dprog tests input1.txt
(define dprog
 '( program ( = dog 1 )
            ( = x ( / ( + 2 3 ) 4 ) )
            ( = y ( / dog ( + x 3 ) ) )
            ( print ( + x y ) ) )) ; should print 101/68

; eprog tests input4.txt
(define eprog
  ' ( program ( print ( - ( - ( - 1 2 ) 3 ) 4 ) )            ; should print -8
              ( print ( / ( * ( / ( * 1 2 ) 3 ) 4 ) 5 ) ) )) ; should print 8/15

; fprog is a list representation of a TINY program that can evaluate boolean expressions
(define fprog
  '(program
    (= x (+ 2 (/ 8 3)))
    (print (< x 111))   ; should print #t (for true)
    (print (and #t #f)) ; should print #f (for false)
    (print x)))         ; should print 14/3

; gprog is a list representaion of a TINY program that can handle while loops (statements)
(define gprog
  '(program
    (= x 10)
    (while (> x 0) ((print x)(= x (- x 1)))))) ; should print numbers 10 - 1 on separate lines

  
; How to call the interpreter for [x]prog
(interpreter eprog)