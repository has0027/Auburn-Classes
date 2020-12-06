load "Parser.rb"
load "Lexer.rb"
load "Token.rb"
load "AST.rb"

parse = Parser.new("input6.tiny")
mytree = parse.program()
puts mytree.toStringList()
