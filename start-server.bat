@echo off
echo Starting Local Server...
echo.
echo If you have Python installed:
python -m http.server 8000
echo.
echo If you have Node.js installed:
npx http-server -p 8000
echo.
echo If neither works, try opening index.html directly in your browser
echo.
pause 