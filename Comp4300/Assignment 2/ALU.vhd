-- ALU
-- Haden Stuart, has0027

USE work.bv_arithmetic.ALL;
USE work.dlx_types.ALL;

entity alu is
generic(prop_delay: Time := 15 ns);
port(operand1, operand2: in dlx_word; operation: in
	alu_operation_code;
	result: out dlx_word; error: out error_code);
end entity alu;

architecture behavior of alu is
begin
	ALU_process: process(operand1, operand2, operation) is
		variable overflow: boolean;
		variable tempResult: dlx_word;
		variable divByZero: boolean;
	begin
		error <= "0000";
		case(operation) is

		-- unsigned add
			when "0000" =>
				bv_addu(operand1, operand2, tempResult, overflow);
				if overflow then
					error <= "0001";
				end if;
				result <= tempResult;

		-- unsigned subtract
			when "0001" =>
				bv_subu(operand1, operand2, tempResult, overflow);
				if overflow then
					error <= "0001";
				end if;
				result <= tempResult;

		-- two's complement add
			when "0010" =>
				bv_add(operand1, operand2, tempResult, overflow);

		-- if op1 and op2 are positive and result is negative, there is overflow
		-- if op1 and op2 are negative and result is positive, there is overflow
				if overflow then
                         		if (operand1(31) = '0') AND (operand2(31) = '0') then
                              			if (tempResult(31) = '1') then
                                  			error <= "0001";
		                              	end if;	
                          		elsif (operand1(31) = '1') AND (operand2(31) = '1') then
                              			if (tempResult(31) = '0') then
                                  			error <= "0001";
                              			end if;
                         		end if;
				end if;
				result <= tempResult;

		-- two's complement subtract
			when "0011" =>
				bv_sub(operand1, operand2, tempResult, overflow);

		-- if op1 is positive, op2 is negative, and result is negative, there is overflow
		-- if op1 is negative, op2 is positive, and result is positive, there is overflow
				if overflow then
                         		if (operand1(31) = '0') AND (operand2(31) = '1') then
                              			if (tempResult(31) = '1') then
                                  			error <= "0001";
		                              	end if;	
                          		elsif (operand1(31) = '1') AND (operand2(31) = '0') then
                              			if (tempResult(31) = '0') then
                                  			error <= "0001";
                              			end if;
                         		end if;
				end if;
				result <= tempResult;

		-- two's complement multiply
			when "0100" =>
				bv_mult(operand1, operand2, tempResult, overflow);

		-- if op1 and op2 are positive and result is negative, there is overflow
		-- if op1 and op2 are negative and result is negative, there is overflow
				if overflow then
                         		if (operand1(31) = '0') AND (operand2(31) = '0') then
                              			if (tempResult(31) = '1') then
                                  			error <= "0001";
		                              	end if;	
                          		elsif (operand1(31) = '1') AND (operand2(31) = '1') then
                              			if (tempResult(31) = '1') then
                                  			error <= "0001";
                              			end if;
					end if;
				end if;
				result <= tempResult;

		-- two's complemnt divide
			when "0101" =>
				bv_div(operand1, operand2, tempResult, divByZero, overflow);
				if overflow then
					error <= "0001";
				elsif divByZero then
					error <= "0010";
				end if;
				result <= tempResult;

		-- bitwise AND
			when "0111" =>
				result <= operand1 AND operand2;

		-- bitwise OR
			when "1001" =>
				result <= operand1 OR operand2;

		-- bitwise NOT of operand1
			when "1011" =>
				result <= NOT operand1;

		-- pass operand1 through to output
			when "1100" =>
				result <= operand1;

		-- pass operand2 through to output
			when "1101" =>
				result <= operand2;

		-- output all zero's
			when "1110" =>
				result <= x"00000000";

		-- output all one's
			when "1111" =>
				result <= x"11111111";

		-- wrong operation code
			when others =>
				result <= x"00000000";

		end case;
	end process ALU_process;
end architecture behavior;






