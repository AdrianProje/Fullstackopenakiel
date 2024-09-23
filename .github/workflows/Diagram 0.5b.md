```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET 
    https://studies.cs.helsinki.fi/exampleapp/spa

    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->browser: [
    {
        "content": "0",
        "date": "2024-09-16T01:55:44.144Z"
    },
    {
        "content": "0",
        "date": "2024-09-16T01:55:44.466Z"
    },
    {
        "content": "\\n ",
        "date": "2024-09-16T02:19:07.896Z"
    },
    {
        "content": "The Head, Not The Tail",
        "date": "2024-09-16T02:19:29.790Z"
    },
    {
        "content": "Vamos Argentina! 🇦🇷",
        "date": "2024-09-16T02:31:12.424Z"
    },
    {
        "content": "",
        "date": "2024-09-16T02:40:45.711Z"
    },
    {
        "content": "gdsg",
        "date": "2024-09-16T02:43:17.693Z"
    },
    {
        "content": "fgh",
        "date": "2024-09-16T02:44:14.704Z"
    },
    {
        "content": "dfg",
        "date": "2024-09-16T02:44:36.395Z"
    },
    {
        "content": "starling",
        "date": "2024-09-16T02:50:29.144Z"
    },
    {
        "content": "s",
        "date": "2024-09-16T02:51:12.169Z"
    },
    {
        "content": "hola",
        "date": "2024-09-16T02:51:49.171Z"
    },
    {
        "content": "gfh",
        "date": "2024-09-16T02:53:31.005Z"
    },
    {
        "content": "single page app does not reload the whole page",
        "date": "2024-09-16T02:54:22.851Z"
    },
    {
        "content": "test",
        "date": "2024-09-16T03:05:51.692Z"
    },
    {
        "content": "test",
        "date": "2024-09-16T03:06:03.135Z"
    },
    {
        "content": "send from data check",
        "date": "2024-09-16T03:08:32.265Z"
    },
    {
        "content": "send from data check",
        "date": "2024-09-16T03:08:52.569Z"
    },
    {
        "content": "hola",
        "date": "2024-09-16T03:11:38.962Z"
    },
    {
        "content": "Messi GOAT",
        "date": "2024-09-16T03:13:49.630Z"
    },
    {
        "content": "pizza",
        "date": "2024-09-16T03:14:14.621Z"
    },
    {
        "content": "Lezzgo",
        "date": "2024-09-16T03:14:39.304Z"
    },
    {
        "content": "note",
        "date": "2024-09-16T03:15:05.298Z"
    },
    {
        "content": "1) Argentina, 2) Francia",
        "date": "2024-09-16T03:22:03.134Z"
    },
    {
        "content": "starling",
        "date": "2024-09-16T03:30:02.536Z"
    },
    {
        "content": "HolaWorld",
        "date": "2024-09-16T03:45:09.284Z"
    },
    {
        "content": "kds",
        "date": "2024-09-16T03:46:49.088Z"
    },
    {
        "content": "lsd",
        "date": "2024-09-16T03:47:09.822Z"
    },
    {
        "content": "hello world",
        "date": "2024-09-16T03:49:49.886Z"
    },
    {
        "content": "a",
        "date": "2024-09-16T03:52:18.911Z"
    },
    {
        "content": "aa",
        "date": "2024-09-16T03:52:34.310Z"
    },
    {
        "content": "j",
        "date": "2024-09-16T03:53:05.837Z"
    },
    {
        "content": "java",
        "date": "2024-09-16T03:53:14.924Z"
    },
    {
        "content": "sddsf",
        "date": "2024-09-16T03:54:24.062Z"
    },
    {
        "content": "note",
        "date": "2024-09-16T03:55:54.144Z"
    },
    {
        "content": "jk",
        "date": "2024-09-16T04:09:25.927Z"
    },
    {
        "content": "ha",
        "date": "2024-09-16T04:10:05.614Z"
    },
    {
        "content": "sk",
        "date": "2024-09-16T04:18:27.225Z"
    },
    {
        "content": "hello there, can we be friends?",
        "date": "2024-09-16T05:21:28.116Z"
    },
    {
        "content": "hii",
        "date": "2024-09-16T05:51:24.153Z"
    },
    {
        "content": "hiiiiii",
        "date": "2024-09-16T05:52:36.290Z"
    },
    {
        "content": "hello world!",
        "date": "2024-09-16T05:53:06.266Z"
    },
    {
        "content": "2024",
        "date": "2024-09-16T05:53:50.148Z"
    },
    {
        "content": "20",
        "date": "2024-09-16T05:54:59.273Z"
    },
    {
        "content": "singlePage",
        "date": "2024-09-16T05:55:02.224Z"
    },
    {
        "content": "js",
        "date": "2024-09-16T06:07:48.410Z"
    },
    {
        "content": "okk",
        "date": "2024-09-16T06:08:13.254Z"
    },
    {
        "content": "gaurav1o8",
        "date": "2024-09-16T06:08:43.398Z"
    },
    {
        "content": "codeforces.com/profile/kempachi",
        "date": "2024-09-16T06:09:37.077Z"
    },
    {
        "content": "codechef.com/users/gaurav_jan",
        "date": "2024-09-16T06:10:50.139Z"
    },
    {
        "content": "in",
        "date": "2024-09-16T06:14:47.413Z"
    },
    {
        "content": "dda",
        "date": "2024-09-16T06:18:45.091Z"
    },
    {
        "content": "new new new note",
        "date": "2024-09-16T06:26:18.772Z"
    },
    {
        "content": "we don't talk about bruno",
        "date": "2024-09-16T06:51:50.060Z"
    },
    {
        "content": "new spa note",
        "date": "2024-09-16T07:07:38.788Z"
    },
    {
        "content": "new spa note",
        "date": "2024-09-16T07:08:01.307Z"
    },
    {
        "content": "spa",
        "date": "2024-09-16T07:15:57.160Z"
    },
    {
        "content": "html easy",
        "date": "2024-09-16T07:17:01.933Z"
    },
    {
        "content": "test 1",
        "date": "2024-09-16T07:20:31.997Z"
    },
    {
        "content": "My new note",
        "date": "2024-09-16T07:22:04.298Z"
    },
    {
        "content": "test1",
        "date": "2024-09-16T07:22:36.380Z"
    },
    {
        "content": "oal123",
        "date": "2024-09-16T07:30:56.885Z"
    },
    {
        "content": "12",
        "date": "2024-09-16T07:38:40.366Z"
    },
    {
        "content": "siur",
        "date": "2024-09-16T07:41:40.191Z"
    },
    {
        "content": "swuqidvcfiu",
        "date": "2024-09-16T07:46:20.207Z"
    },
    {
        "content": "cfycduy",
        "date": "2024-09-16T07:47:27.934Z"
    },
    {
        "content": "a",
        "date": "2024-09-16T08:05:32.088Z"
    },
    {
        "content": "xxkxgkjzxflk",
        "date": "2024-09-16T08:06:34.475Z"
    },
    {
        "content": "e",
        "date": "2024-09-16T08:34:21.858Z"
    },
    {
        "content": "   ",
        "date": "2024-09-16T08:36:59.428Z"
    },
    {
        "content": "html easy",
        "date": "2024-09-16T08:46:47.541Z"
    },
    {
        "content": "html easy",
        "date": "2024-09-16T08:46:50.686Z"
    },
    {
        "content": "r",
        "date": "2024-09-16T08:49:07.999Z"
    },
    {
        "content": "2024",
        "date": "2024-09-16T09:09:52.271Z"
    },
    {
        "content": "test",
        "date": "2024-09-16T09:15:27.505Z"
    },
    {
        "content": "testi",
        "date": "2024-09-16T09:16:30.519Z"
    },
    {
        "content": "slur",
        "date": "2024-09-16T09:21:57.440Z"
    },
    {
        "content": "hiiiiii",
        "date": "2024-09-16T09:25:36.073Z"
    },
    {
        "content": "hii",
        "date": "2024-09-16T09:25:43.161Z"
    },
    {
        "content": "hello world!",
        "date": "2024-09-16T09:26:04.209Z"
    },
    {
        "content": "testi",
        "date": "2024-09-16T09:30:26.426Z"
    },
    {
        "content": "/77",
        "date": "2024-09-16T09:46:53.548Z"
    },
    {
        "content": "",
        "date": "2024-09-16T09:54:13.672Z"
    },
    {
        "content": "kawabunga",
        "date": "2024-09-16T09:54:26.639Z"
    },
    {
        "content": "",
        "date": "2024-09-16T09:54:45.375Z"
    },
    {
        "content": "test",
        "date": "2024-09-16T09:58:30.430Z"
    },
    {
        "content": "2024",
        "date": "2024-09-16T10:04:36.195Z"
    },
    {
        "content": "hello world!",
        "date": "2024-09-16T10:04:45.034Z"
    },
    {
        "content": "aaa",
        "date": "2024-09-16T10:05:01.934Z"
    },
    {
        "content": "bbb",
        "date": "2024-09-16T10:05:51.590Z"
    },
    {
        "content": "https://studies.cs.helsinki.fi/exampleapp/spa",
        "date": "2024-09-16T10:13:26.365Z"
    },
    {
        "content": "",
        "date": "2024-09-16T10:13:32.566Z"
    },
    {
        "content": "GET \thttps://studies.cs.helsinki.fi/exampleapp/spa",
        "date": "2024-09-16T10:15:10.557Z"
    },
    {
        "content": "",
        "date": "2024-09-16T10:15:58.433Z"
    },
    {
        "content": "jajaja",
        "date": "2024-09-16T10:16:16.865Z"
    },
    {
        "content": "fhfryhxrfyuhdxeuy",
        "date": "2024-09-16T10:22:15.638Z"
    },
    {
        "content": "wassup my boi",
        "date": "2024-09-16T10:22:36.614Z"
    },
    {
        "content": "TRUMP 2024!!",
        "date": "2024-09-16T10:22:56.877Z"
    },
    {
        "content": "",
        "date": "2024-09-16T10:23:04.691Z"
    },
    {
        "content": "",
        "date": "2024-09-16T10:23:09.010Z"
    }
]
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

deactivate server
Note right of browser: The browser executes the callback function that renders the notes
```