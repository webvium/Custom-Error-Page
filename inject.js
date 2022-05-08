var css = "::selection {" +
            "    background-color: #4285f4;" +
            "    color: #ffffff;" +
            "}" +
            "@font-face {" +
            "    font-family: 'Classes';" +
            "    src: url('file:///android_asset/$.ttf');" +
            "}" +
            "a {" +
            "    color: #4285f4;" +
            "    text-decoration: none;" +
            "}" +
            "a:hover {" +
            "    color: #212121;" +
            "}" +
            "* {" +
            "    font-family: Classes;" +
            "}" +
            "p {" +
            "  color: ea4335;" +
            "}";
var js = css, head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); head.appendChild(style); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); }
