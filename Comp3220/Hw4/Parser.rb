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
# EPSILON    -->   ""
# ID         -->   ALPHA+
# ALPHA      -->   a  |  b  | … | z  or
#                  A  |  B  | … | Z
# INT        -->   DIGIT+
# DIGIT      -->   0  |  1  | …  |  9
# WHITESPACE -->   Ruby Whitespace

#  @author Haden Stuart
#
#  Parser Class
# 
load "Lexer.rb"
class Parser < Scanner

# init
    def initialize(filename)
        super(filename)
        consume()
    end

    def consume()
        @lookahead = nextToken()
        while(@lookahead.type == Token::WS)
            @lookahead = nextToken()
        end
    end

# match
    def match(dtype)
        if (@lookahead.type != dtype)
            puts "Expected #{dtype} found #{@lookahead.text}"
			@errors_found+=1
        end
        consume()
    end

# program
    def program()
    	@errors_found = 0
		
		p = AST.new(Token.new("program","program"))
		
	    while( @lookahead.type != Token::EOF)
            p.addChild(statement())
        end
        
        puts "There were #{@errors_found} parse errors found."
      
		return p
    end

# stmt
    def statement()
		stmt = AST.new(Token.new("statement","statement"))
        if (@lookahead.type == Token::PRINT)
			stmt = AST.new(@lookahead)
            match(Token::PRINT)
            stmt.addChild(exp())
        else
            stmt = assign()
        end
		return stmt
    end

# exp
    def exp()
        term = term()
        
        if (@lookahead.type == Token::ADDOP or @lookahead.type == Token::SUBOP)
            op = etail()
            op.addChild(term)
            
            return op 
        end
        return term
    end
    
# term    
    def term()
        factor = factor()
        
        if (@lookahead.type == Token::MULTOP or @lookahead.type == Token::DIVOP)
            op = ttail()
            op.addChild(factor)
            
            return op
        end
        return factor
    end

# factor
    def factor()
        fct = AST.new(Token.new("factor", "factor"))
        if (@lookahead.type == Token::LPAREN)
            match(Token::LPAREN)
            fct = exp()
            if (@lookahead.type == Token::RPAREN)
                match(Token::RPAREN)
            else
				match(Token::RPAREN)
            end
        elsif (@lookahead.type == Token::INT)
            fct = AST.new(@lookahead)
            match(Token::INT)
        elsif (@lookahead.type == Token::ID)
            fct = AST.new(@lookahead)
            match(Token::ID)
        else
            puts "Expected ( or INT or ID found #{@lookahead.text}"
            @errors_found+=1
            consume()
        end
		return fct
    end

# ttail
    def ttail()
        op = AST.new(Token.new("op", "op"))
        if (@lookahead.type == Token::MULTOP)
            op = AST.new(@lookahead)
            match(Token::MULTOP)
            op.addChild(factor())
            next_op = ttail()
            
            if (next_op != nil)
                op.addChild(next_op)
            end 
            
        elsif (@lookahead.type == Token::DIVOP)
            op = AST.new(@lookahead)
            match(Token::DIVOP)
            op.addChild(factor())
            next_op = ttail()
            
            if (next_op != nil)
                op.addChild(next_op)
            end 
            
		else
			return nil
        end
        return op 
    end

# etail
    def etail()
        op = AST.new(Token.new("op", "op"))
        if (@lookahead.type == Token::ADDOP)
            op = AST.new(@lookahead)
            match(Token::ADDOP)
            op.addChild(term())
            next_op = etail()
            
            if (next_op != nil)
                op.addChild(next_op)
            end 
            
        elsif (@lookahead.type == Token::SUBOP)
            op = AST.new(@lookahead)
            match(Token::SUBOP)
            op.addChild(term())
            next_op = etail()
            
            if (next_op != nil)
                op.addChild(next_op)
            end 
            
		else
			return nil
        end
        return op
    end

# assign
    def assign()
        assgn = AST.new(Token.new("assignment","assignment"))
		if (@lookahead.type == Token::ID)
			idtok = AST.new(@lookahead)
			match(Token::ID)
			if (@lookahead.type == Token::ASSGN)
				assgn = AST.new(@lookahead)
				assgn.addChild(idtok)
            	match(Token::ASSGN)
				assgn.addChild(exp())
        	else
				match(Token::ASSGN)
			end
		else
			match(Token::ID)
        end
		return assgn
	end
end
