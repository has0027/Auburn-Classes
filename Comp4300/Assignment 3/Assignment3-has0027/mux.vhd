-- Two way multiplexer
-- Haden Stuart, has0027

USE work.bv_arithmetic.ALL;
USE work.dlx_types.ALL;

entity mux is
	generic(prop_delay: Time := 5 ns);
	port(input_1,input_0: in dlx_word; which: in bit; output: out dlx_word);
end entity mux;

architecture behavior of mux is
begin
	mux_process: process(input_1, input_0, which) is
	begin
		-- Input 0
		if (which = '0') then
			output <= input_0 after prop_delay;
		end if;

		-- Input 1
		if (which = '1') then
			output <= input_1 after prop_delay;
		end if;
	end process mux_process;
end architecture behavior;
		
		
