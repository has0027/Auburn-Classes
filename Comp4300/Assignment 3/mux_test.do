add wave -position end  sim:/mux/input_1
add wave -position end  sim:/mux/input_0
add wave -position end  sim:/mux/which
add wave -position end  sim:/mux/output

force -freeze sim:/mux/input_1 32'h11111111 0
force -freeze sim:/mux/input_0 32'h22222222 0
force -freeze sim:/mux/which 1 0
run

force -freeze sim:/mux/which 0 0
run

force -freeze sim:/mux/input_1 32'hAAAAAAAA 0
force -freeze sim:/mux/input_0 32'hFFFFFFFF 0
force -freeze sim:/mux/which 1 0
run

force -freeze sim:/mux/which 0 0
run