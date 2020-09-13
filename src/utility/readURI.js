// Function For Reading the path of the file user wants to upload
function readFileSize(e) {
  if (e.target.files && e.target.files[0]) {
    if (e.target.files[0].size > 1048576) {
      alert("Current The Website Is Only Accepting File Size Lesser Than 1MB");
      return true;
    }
  }
  return false;
}

export { readFileSize };
