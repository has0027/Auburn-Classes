-- PC Incrementer 
-- Haden Stuart, has0027

USE work.bv_arithmetic.ALL;
USE work.dlx_types.ALL;

entity pcplusone is
	generic(prop_delay: Time := 5 ns);
	port(input: in dlx_word; clock: in bit; output: out dlx_word);
end entity pcplusone;

architecture behavior of pcplusone is
begin
	pcplusone_process: process(input, clock) is
		variable tempResult: dlx_word;
		variable overflow: boolean;
	begin
		if (clock = '1') then
			bv_add(input, x"00000001", tempResult, overflow);
			output <= tempResult after prop_delay;
		end if;
	end process pcplusone_process;
end architecture behavior;
