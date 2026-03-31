.PHONY: help install serve build clean lint format format-check

# Default target
help:
	@echo "Available commands:"
	@echo "  make install      - Install dependencies (npm install)"
	@echo "  make serve        - Start development server (npm run dev)"
	@echo "  make build        - Build the project (npm run build)"
	@echo "  make lint         - Run linter (npm run lint)"
	@echo "  make format       - Format code with Prettier"
	@echo "  make format-check - Check formatting with Prettier (dry run)"
	@echo "  make clean        - Remove build artifacts (npm run clean)"

install:
	npm install

serve:
	npm run dev

build:
	npm run build

lint:
	npm run lint

format:
	npx prettier --write .

format-check:
	npx prettier --check .

clean:
	npm run clean
