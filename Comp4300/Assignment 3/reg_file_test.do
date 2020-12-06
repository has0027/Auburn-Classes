add wave -position end  sim:/reg_file/data_in
add wave -position end  sim:/reg_file/readnotwrite
add wave -position end  sim:/reg_file/clock
add wave -position end  sim:/reg_file/reg_number
add wave -position end  sim:/reg_file/data_out

force -freeze sim:/reg_file/data_in 32'h11111111 0
force -freeze sim:/reg_file/clock 1 0
force -freeze sim:/reg_file/reg_number 5'h08 0
run

force -freeze sim:/reg_file/data_in 32'hFFFFFFFF 0
force -freeze sim:/reg_file/readnotwrite 1 0
run

force -freeze sim:/reg_file/readnotwrite 0 0
force -freeze sim:/reg_file/reg_number 5'h09 0
run

force -freeze sim:/reg_file/readnotwrite 1 0
run

force -freeze sim:/reg_file/reg_number 5'h08 0
run