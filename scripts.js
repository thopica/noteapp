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
        if (index !==
