entity xnorGate is 
	generic(prop_delay: Time := 10 ns);
	port(a_in,b_in: in bit;
             result: out bit);
end entity xnorGate; 


architecture behavior1 of xnorGate is
begin
	xnorProcess : process(a_in,b_in) is
	
	begin
	  	if a_in = '1' then
		  if b_in = '1' then
		    -- if both are 1, output = 1
		    result <= '1' after prop_delay; 
		else
		    result <= '0' after prop_delay;
		end if;

		else
		  if b_in = '0' then
		    -- if both are 0, output = 1
		    result <= '1' after prop_delay; 
		  else
		   result <= '0' after prop_delay;
		  end if;
		end if;
	end process xnorProcess;
end architecture behavior1;

