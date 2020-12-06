add wave -position end  sim:/pcplusone/input
add wave -position end  sim:/pcplusone/clock
add wave -position end  sim:/pcplusone/output

force -freeze sim:/pcplusone/clock 1 0
run

force -freeze sim:/pcplusone/input 32'h11111111 0
force -freeze sim:/pcplusone/clock 0 0
run

force -freeze sim:/pcplusone/clock 1 0
run

force -freeze sim:/pcplusone/input 32'hAAAAAAAA 0
run