add wave -position end  sim:/alu/operand1
add wave -position end  sim:/alu/operand2
add wave -position end  sim:/alu/operation
add wave -position end  sim:/alu/result
add wave -position end  sim:/alu/error


force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h01010101 0
force -freeze sim:/alu/operation 4'h0 0
run

force -freeze sim:/alu/operand1 32'hABCDABCD 0
force -freeze sim:/alu/operand2 32'h12341234 0
force -freeze sim:/alu/operation 4'h0 0
run

force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h00000001 0
force -freeze sim:/alu/operation 4'h0 0
run



force -freeze sim:/alu/operand1 32'h11110000 0
force -freeze sim:/alu/operand2 32'h00001111 0
force -freeze sim:/alu/operation 4'h1 0
run

force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h55555555 0
force -freeze sim:/alu/operation 4'h1 0
run

force -freeze sim:/alu/operand1 32'h00000000 0
force -freeze sim:/alu/operand2 32'hFFFFFFFF 0
force -freeze sim:/alu/operation 4'h1 0
run



force -freeze sim:/alu/operand1 32'h11101110 0
force -freeze sim:/alu/operand2 32'h00010001 0
force -freeze sim:/alu/operation 4'h2 0
run

force -freeze sim:/alu/operand1 32'h10001111 0
force -freeze sim:/alu/operand2 32'h0ABC0111 0
force -freeze sim:/alu/operation 4'h2 0
run

force -freeze sim:/alu/operand1 32'h800B00FF 0
force -freeze sim:/alu/operand2 32'h80A000FF 0
force -freeze sim:/alu/operation 4'h2 0
run



force -freeze sim:/alu/operand1 32'h11001100 0
force -freeze sim:/alu/operand2 32'h01010101 0
force -freeze sim:/alu/operation 4'h3 0
run

force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h11111111 0
force -freeze sim:/alu/operation 4'h3 0
run

force -freeze sim:/alu/operand1 32'h5ABC0000 0
force -freeze sim:/alu/operand2 32'hA543FFFF 0
force -freeze sim:/alu/operation 4'h3 0
run



force -freeze sim:/alu/operand1 32'h0000000A 0
force -freeze sim:/alu/operand2 32'h0000000A 0
force -freeze sim:/alu/operation 4'h4 0
run

force -freeze sim:/alu/operand1 32'h00101100 0
force -freeze sim:/alu/operand2 32'h10101001 0
force -freeze sim:/alu/operation 4'h4 0
run

force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'h11111111 0
force -freeze sim:/alu/operation 4'h4 0
run



force -freeze sim:/alu/operand1 32'h11010011 0
force -freeze sim:/alu/operand2 32'h00110011 0
force -freeze sim:/alu/operation 4'h5 0
run

force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'hFFFFFFFF 0
force -freeze sim:/alu/operation 4'h5 0
run

force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'h00000000 0
force -freeze sim:/alu/operation 4'h5 0
run



force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'h11001100 0
force -freeze sim:/alu/operation 4'h7 0
run

force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h01010101 0
force -freeze sim:/alu/operation 4'h7 0
run

force -freeze sim:/alu/operand1 32'h11001101 0
force -freeze sim:/alu/operand2 32'h11111111 0
force -freeze sim:/alu/operation 4'h7 0
run



force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h01010101 0
force -freeze sim:/alu/operation 4'h9 0
run

force -freeze sim:/alu/operand1 32'h11001100 0
force -freeze sim:/alu/operand2 32'h01000100 0
force -freeze sim:/alu/operation 4'h9 0
run

force -freeze sim:/alu/operand1 32'h10000000 0
force -freeze sim:/alu/operand2 32'h00000001 0
force -freeze sim:/alu/operation 4'h9 0
run



force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h00000000 0
force -freeze sim:/alu/operation 4'hB 0
run

force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h11111111 0
force -freeze sim:/alu/operation 4'hB 0
run

force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h11111111 0
force -freeze sim:/alu/operation 4'hB 0
run



force -freeze sim:/alu/operand1 32'hABCD1234 0
force -freeze sim:/alu/operand2 32'h42614325 0
force -freeze sim:/alu/operation 4'hC 0
run

force -freeze sim:/alu/operand1 32'h11001100 0
force -freeze sim:/alu/operand2 32'h00000000 0
force -freeze sim:/alu/operation 4'hC 0
run

force -freeze sim:/alu/operand1 32'h00010001 0
force -freeze sim:/alu/operand2 32'hFFFFFFFF 0
force -freeze sim:/alu/operation 4'hC 0
run



force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h10101010 0
force -freeze sim:/alu/operation 4'hD 0
run

force -freeze sim:/alu/operand1 32'h00000000 0
force -freeze sim:/alu/operand2 32'hABCDABCD 0
force -freeze sim:/alu/operation 4'hD 0
run

force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'h00000000 0
force -freeze sim:/alu/operation 4'hD 0
run



force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h10101010 0
force -freeze sim:/alu/operation 4'hE 0
run

force -freeze sim:/alu/operand1 32'h11111111 0
force -freeze sim:/alu/operand2 32'hAAAAAAAA 0
force -freeze sim:/alu/operation 4'hE 0
run

force -freeze sim:/alu/operand1 32'h00000000 0
force -freeze sim:/alu/operand2 32'h12345678 0
force -freeze sim:/alu/operation 4'hE 0
run



force -freeze sim:/alu/operand1 32'hFFFFFFFF 0
force -freeze sim:/alu/operand2 32'h11001100 0
force -freeze sim:/alu/operation 4'hF 0
run

force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'h01010101 0
force -freeze sim:/alu/operation 4'hF 0
run

force -freeze sim:/alu/operand1 32'h10101010 0
force -freeze sim:/alu/operand2 32'hAAAAAAAA 0
force -freeze sim:/alu/operation 4'hF 0
run