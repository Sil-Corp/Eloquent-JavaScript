// Task 25
// Ignoring characters "Q, W, X"
// And more comment lines for the glory of the SonarQube!

function ignore(event) {
    switch (event.keyCode) {
        case 81:
            event.preventDefault();
            break;
        case 87:
            event.preventDefault();
            break;
        case 88:
            event.preventDefault();
            break;
        default: break;
    }
}
