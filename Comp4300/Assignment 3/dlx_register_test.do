add wave -position end  sim:/dlx_register/in_val
add wave -position end  sim:/dlx_register/clock
add wave -position end  sim:/dlx_register/out_val

force -freeze sim:/dlx_register/in_val 32'h12345678 0
force -freeze sim:/dlx_register/clock 1 0
run

force -freeze sim:/dlx_register/clock 0 0
force -freeze sim:/dlx_register/in_val 32'hABCDABCD 0
run

force -freeze sim:/dlx_register/in_val 32'hFFFFFFFF 0
run

force -freeze sim:/dlx_register/clock 1 0
run