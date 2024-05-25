body {
    display: flex;
    font-family: Arial, sans-serif;
    margin: 0;
    height: 100vh;
    overflow: hidden;
}

#sidebar {
    width: 250px;
    background: #2c3e50;
    color: white;
    padding: 10px;
    overflow-y: auto;
}

#main {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.note-title {
    background: #34495e;
    padding: 10px;
    margin-bottom: 5px;
    cursor: pointer;
}

.note-title:hover {
    background: #1abc9c;
}

button {
    padding: 10px 15px;
    margin-right: 5px;
    background: #3498db;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #2980b9;
}

#note-editor {
    display: none;
    flex-direction: column;
}

#note-text {
    flex: 1;
    padding: 10px;
    margin-top: 10px;
}

.hamburger-menu {
    display: none;
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    z-index: 1000;
}

/* Responsive Design */
@media (max-width: 768px) {
    body {
        flex-direction: column;
    }

    #sidebar {
        display: none;
        width: 100%;
        height: auto;
    }

    .note-title {
        margin: 5px;
        text-align: center;
    }

    #main {
        padding: 5px;
    }

    #note-editor {
        padding: 5px;
    }

    #note-text {
        width: 100%;
        height: 200px;
    }

    button {
        margin: 5px 0;
        width: 100%;
    }

    .hamburger-menu {
        display: block;
    }
}
