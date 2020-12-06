# See the GNU manual for information about using variables in Makefiles
# https://www.gnu.org/software/make/manual/make.html#Reference

# This will ensure that `make` always executes the recipes regardless of
# whether or not the source-files have changed.
.PHONE: build run

build:

	@echo "Building Project 2 classifier"
run:
	python3 anomaly_detector.py $(PCAP_FILE)
	@echo "Running Project 2 classifier with the input file of $(PCAP_FILE)"
