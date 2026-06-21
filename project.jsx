@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.font-display {
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Smooth transitions for interactive elements */
button, input, select, textarea {
  transition: all 0.2s ease-in-out;
}

/* Custom Table Borders */
table {
  border-collapse: collapse;
  width: 100%;
}

/* Hide native scrollbars for chart carousels while maintaining functionality */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #D8CFB4 transparent;
}
