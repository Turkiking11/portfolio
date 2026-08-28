<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Turki's Portfolio</title>
  <style>
    body {
      background-color: black;
      color: white;
      font-family: sans-serif;
    }

    h1 {
      text-align: center;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* Target every individual letter container */
    h1 span {
      display: inline-block;
      white-space: pre; /* Keeps the spaces between words from breaking */
      animation: wave 2s infinite ease-in-out;
    }

    /* The animation steps */
    @keyframes wave {
      0%, 40%, 100% {
        transform: scale(1);
        color: white;
      }
      20% {
        transform: scale(1.3);     /* Tweens larger */
        color: #4a154b;           /* Turns whitish dark purple */
      }
    }

    /* Manually add delays so they go one by one */
    h1 span:nth-child(1)  { animation-delay: 0.1s; }
    h1 span:nth-child(2)  { animation-delay: 0.2s; }
    h1 span:nth-child(3)  { animation-delay: 0.3s; }
    h1 span:nth-child(4)  { animation-delay: 0.4s; }
    h1 span:nth-child(5)  { animation-delay: 0.5s; }
    h1 span:nth-child(6)  { animation-delay: 0.6s; }
    h1 span:nth-child(7)  { animation-delay: 0.7s; }
    h1 span:nth-child(8)  { animation-delay: 0.8s; }
    h1 span:nth-child(9)  { animation-delay: 0.9s; }
    h1 span:nth-child(10) { animation-delay: 1.0s; }
    h1 span:nth-child(11) { animation-delay: 1.1s; }
    h1 span:nth-child(12) { animation-delay: 1.2s; }
    h1 span:nth-child(13) { animation-delay: 1.3s; }
    h1 span:nth-child(14) { animation-delay: 1.4s; }
    h1 span:nth-child(15) { animation-delay: 1.5s; }
    h1 span:nth-child(16) { animation-delay: 1.6s; }
    h1 span:nth-child(17) { animation-delay: 1.7s; }
    h1 span:nth-child(18) { animation-delay: 1.8s; }
    h1 span:nth-child(19) { animation-delay: 1.9s; }
    h1 span:nth-child(20) { animation-delay: 2.0s; }
    h1 span:nth-child(21) { animation-delay: 2.1s; }
    h1 span:nth-child(22) { animation-delay: 2.2s; }
    h1 span:nth-child(23) { animation-delay: 2.3s; }
    h1 span:nth-child(24) { animation-delay: 2.4s; }
    h1 span:nth-child(25) { animation-delay: 2.5s; }
    h1 span:nth-child(26) { animation-delay: 2.6s; }
    h1 span:nth-child(27) { animation-delay: 2.7s; }
    h1 span:nth-child(28) { animation-delay: 2.8s; }
    h1 span:nth-child(29) { animation-delay: 2.9s; }
    h1 span:nth-child(30) { animation-delay: 3.0s; }
  </style>
</head>
<body>

  <!-- Every letter and space is wrapped in a span -->
  <h1>
    <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span><span> </span><span>t</span><span>o</span><span> </span><span>T</span><span>u</span><span>r</span><span>k</span><span>i</span><span>'</span><span>s</span><span> </span><span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span><span>!</span>
  </h1>
  
  <p>This is my portfolio, it is under current development + I'm learning HTML, as of right now I am really confused on what I am typing :(</p>

</body>
</html>
