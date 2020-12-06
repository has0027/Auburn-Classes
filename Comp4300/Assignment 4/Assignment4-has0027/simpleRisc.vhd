use work.bv_arithmetic.all; 
use work.dlx_types.all; 

-- interconnect of aubie cpu

entity simple_risc is
    port(simple_clock: in bit);
end simple_risc; 

architecture struct of simple_risc is
	signal writeback_bus,
		mem_addr_in,
		mem_data_bus,		
		ir_out,
		pcplusone_out,
		pc_out,
		pc_in,
		regfile_in,
		regfile_out_bus,
		alu_out_bus,
		alu_out,
		op2r_in,
		op1r_out,
		op2r_out : dlx_word;

	signal alu_func: alu_operation_code; 

	signal regfile_mux, op2r_mux, writeback_mux, pc_mux, mem_addr_mux: bit;

	signal regfile_index: register_index; 
	
	signal  
		mem_clk, mem_readnotwrite, 
		ir_clk, 
		pc_clk, regfile_clk, regfile_readnotwrite,
	        op1r_clk, op2r_clk, alu_out_reg_clk:  bit; 

	signal alu_error: error_code; 

begin -- structure of simple risc 
	simple_ctl: entity work.simpleRisc_controller(behavior)
	  port map ( 
		ir_control => ir_out, 
		alu_out_control => alu_out_bus,
		alu_error_control => alu_error,
		regfile_out_bus_control => regfile_out_bus,
		clock_control => simple_clock,
		control_regfile_mux => regfile_mux, 
		control_mem_addr_mux => mem_addr_mux,
		control_pc_mux => pc_mux,
		control_writeback_mux => writeback_mux,
		control_op2r_mux => op2r_mux,
		control_alu_func => alu_func, 
		control_regfile_index => regfile_index,
		control_regfile_readnotwrite => regfile_readnotwrite, 
		control_regfile_clk => regfile_clk,
		control_mem_clk => mem_clk,
		control_mem_readnotwrite => mem_readnotwrite, 
		control_ir_clk => ir_clk,  
		control_pc_clk => pc_clk,
		control_alu_out_reg_clk => alu_out_reg_clk,
		control_op1r_clk => op1r_clk, 
		control_op2r_clk => op2r_clk);

	simple_memory: entity work.memory(behavior) 
		port map (
			address => mem_addr_in,
			readnotwrite => mem_readnotwrite,
			data_out => mem_data_bus,
			data_in => writeback_bus,
			clock => mem_clk);

	simple_ir: entity work.dlx_register(behavior)
		port map (
			in_val => mem_data_bus,
			clock => ir_clk,
			out_val => ir_out); 


	simple_pc: entity work.dlx_register(behavior)
		port map (
			in_val => pc_in, 
			clock => pc_clk,
			out_val => pc_out);

	simple_op1r: entity work.dlx_register(behavior)
		port map (
			in_val => regfile_out_bus, 
			clock => op1r_clk,
			out_val => op1r_out);

	simple_op2r: entity work.dlx_register(behavior)
		port map (
			in_val => op2r_in, 
			clock => op2r_clk,
			out_val => op2r_out);

	simple_alu_out_reg: entity work.dlx_register(behavior)
		port map (
			in_val => alu_out, 
			clock => alu_out_reg_clk,
			out_val => alu_out_bus);

	
	simple_regfile: entity work.reg_file(behavior)
		port map ( 
			data_in => regfile_in,
			readnotwrite => regfile_readnotwrite,
			clock => regfile_clk,
			reg_number => regfile_index,
			data_out => regfile_out_bus);

	simple_alu: entity work.simple_alu(behavior)
		port map ( 
			operand1 => op1r_out,
			operand2 => op2r_out,
			operation => alu_func,
			result => alu_out, 
			error => alu_error); 

	simple_mem_addr_mux: entity work.mux(behavior) 
		port map ( 
			input_1 => alu_out_bus  ,
			input_0 => pc_out,
			which => mem_addr_mux,
			output => mem_addr_in); 

	simple_pc_mux: entity work.mux(behavior) 
		port map ( 
			input_1 => alu_out_bus ,
			input_0 => pcplusone_out ,
			which => pc_mux,
			output => pc_in); 

	simple_op2r_mux: entity work.mux(behavior) 
		port map ( 
			input_1 => mem_data_bus ,
			input_0 => regfile_out_bus ,
			which => op2r_mux,
			output => op2r_in ); 

	simple_regfile_mux: entity work.mux(behavior) 
		port map ( 
			input_1 =>mem_data_bus ,
			input_0 => writeback_bus,
			which => regfile_mux,
			output => regfile_in); 

	simple_writeback_mux: entity work.mux(behavior) 
		port map ( 
			input_1 => regfile_out_bus,
			input_0 => alu_out_bus,
			which => writeback_mux,
			output =>writeback_bus );

	simple_pcpluspone: entity work.pcplusone(behavior)
		port map (
			input => pc_out,
			clock => pc_clk, -- this is just here to make it execute
			output => pcplusone_out); 

end struct;
