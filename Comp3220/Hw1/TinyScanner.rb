# https://www.cs.rochester.edu/~brown/173/readings/05_grammars.txt
#
#  "TINY" Grammar
#
# PGM        -->   STMT+
# STMT       -->   ASSIGN   |   "print"  EXP                           
# ASSIGN     -->   ID  "="  EXP
# EXP        -->   TERM   ETAIL
# ETAIL      -->   "+" TERM   ETAIL  | "-" TERM   ETAIL | EPSILON
# TERM       -->   FACTOR  TTAIL
# TTAIL      -->   "*" FACTOR TTAIL  | "/" FACTOR TTAIL | EPSILON
# FACTOR     -->   "(" EXP ")" | INT | ID   
#                  
# ID         -->   ALPHA+
# ALPHA      -->   a  |  b  | … | z  or 
#                  A  |  B  | … | Z
# INT        -->   DIGIT+
# DIGIT      -->   0  |  1  | …  |  9
# WHITESPACE -->   Ruby Whitespace

#
#  Class Scanner - Reads a TINY program and emits tokens
#  
class Scanner 
# Constructor - Is passed a file to scan and outputs a token
#               each time nextToken() is invoked.
#   @c        - A one character lookahead 
	def initialize(filename)
		# Need to modify this code so that the program
		# doesn't abend if it can't open the file but rather
		# displays an informative message
		if (File.exist?(filename))
			@f = File.open(filename,'r:utf-8')
		else
			puts "Invalid File"
			exit
		end
		# Go ahead and read in the first character in the source
		# code file (if there is one) so that you can begin
		# lexing the source code file 
		if (! @f.eof?)
			@c = @f.getc()
		else
			@c = "eof"
			@f.close()
		end
	end
	
	# Method nextCh() returns the next character in the file
	def nextCh()
		if (! @f.eof?)
			@c = @f.getc()
		else
			@c = "eof"
		end
		
		return @c
	end

	# Method nextToken() reads characters in the file and returns
	# the next token
	# You should also print what you find. Follow the format from the
	# example given in the instructions.
	def nextToken() 
		if @c == "eof"
			return Token.new(Token::EOF,"eof")
# Whitespace				
		elsif (whitespace?(@c))
			str = ""
		
			while whitespace?(@c)
				str += @c
				nextCh()
			end
			tok = Token.new(Token::WS,str)
			return tok
# Letter			
		elsif (letter?(@c))
			id = ""
			
			while letter?(@c)
				id += @c
				nextCh()
			end
		
			if (id == "print")
				tok = Token.new(Token::PRINT, id)
				return tok
			
			else
				tok = Token.new(Token::LETTER, id)
				return tok
			end
# Number
		elsif (numeric?(@c))
			int = ""
			
			while numeric?(@c)
				int += @c
				nextCh()
			end
			
			tok = Token.new(Token::NUMERIC, int)
			return tok
# Left Parentheses
		elsif (@c == '(')
			nextCh()
			tok = Token.new(Token::LPAREN, "(")
			return tok	
# Right Parentheses
		elsif (@c == ')')
			nextCh()
			tok = Token.new(Token::RPAREN, ")")
			return tok	
# Add
		elsif (@c == '+')
			nextCh()
			tok = Token.new(Token::ADDOP, "+")
			return tok		
# Subtract
		elsif (@c == '-')
			nextCh()
			tok = Token.new(Token::SUBOP, "-")
			return tok
# Divide
		elsif (@c == '/')
			nextCh()
			tok = Token.new(Token::DIVOP, "/")
			return tok
# Multiply
		elsif (@c == '*')
			nextCh()
			tok = Token.new(Token::MULTOP, "*")
			return tok
# Equals
		elsif (@c == '=')
			nextCh()
			tok = Token.new(Token::EQUALS, "=")
			return tok						
# Not Found
		else
			nextCh()
			tok = Token.new("unknown","unknown")
			return tok
		end
	end
end
#
# Helper methods for Scanner
#
def letter?(lookAhead)
	lookAhead =~ /^[a-z]|[A-Z]$/
end

def numeric?(lookAhead)
	lookAhead =~ /^(\d)+$/
end

def whitespace?(lookAhead)
	lookAhead =~ /^(\s)+$/
end
