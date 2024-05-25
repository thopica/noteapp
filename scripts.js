document.addEventListener('DOMContentLoaded', () => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteList = document.getElementById('note-list');
    const noteEditor = document.getElementById('note-editor');
    const noteText = document.getElementById('note-text');
    const newNoteButton = document.getElementById('new-note');
    const saveNoteButton = document.getElementById('save-note');
    const closeNoteButton = document.getElementById('close-note');
    const mobileMenu = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');

    let currentNoteIndex = null;

    function renderNotes() {
        noteList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteTitle = document.createElement('div');
            noteTitle.classList.add('note-title');
            noteTitle.textContent = note.slice(0, 20) + '...';
            noteTitle.dataset.index = index;
            noteList.appendChild(noteTitle);
        });
    }

    function openNoteEditor(index = null) {
        currentNoteIndex = index;
        if (index !== null) {
            noteText.value = notes[index];
        } else {
            noteText.value = '';
        }
        noteEditor.style.display = 'flex';
    }

    function saveNote() {
        const noteContent = noteText.value;
        if (currentNoteIndex !== null) {
            notes[currentNoteIndex] = noteContent;
        } else {
            notes.unshift(noteContent);
        }
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
        openNoteEditor(0);
    }

    function closeNoteEditor() {
        noteEditor.style.display = 'none';
    }

    newNoteButton.addEventListener('click', () => openNoteEditor());
    saveNoteButton.addEventListener('click', saveNote);
    closeNoteButton.addEventListener('click', closeNoteEditor);

    noteList.addEventListener('click', (event) => {
        if (event.target.classList.contains('note-title')) {
            const index = event.target.dataset.index;
            openNoteEditor(index);
        }
    });

    mobileMenu.addEventListener('click', () => {
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });

    renderNotes();

    if (notes.length > 0) {
        openNoteEditor(0); // Show the latest note by default
    }
});
