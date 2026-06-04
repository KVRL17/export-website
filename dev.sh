#!/bin/bash

# Akshyaa Global Exports - Clean Dev Start Script
# This resolves any Vite caching issues

echo "🔧 Cleaning Vite cache..."
rm -rf .vite node_modules/.vite node_modules/.cache

echo "🚀 Starting dev server..."
npm run dev

