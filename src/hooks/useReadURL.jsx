import { useState } from "react";

// Function For Reading the path of the file user wants to upload
function useReadURI(e) {
  let [uri, setURL] = useState(e);
  let [url, setReadURL] = useState("");

  return [
    function (e) {
      if (uri.target.files && uri.target.files[0]) {
        if (uri.target.files[0].size > 1048576) {
          alert(
            "Current The Website Is Only Accepting File Size Lesser Than 1MB"
          );
          setReadURL(null);
        } else {
          let reader = new FileReader();
          reader.onload = function (ev) {
            setReadURL(ev.target.result);
          };
          reader.readAsDataURL(uri.target.files[0]);
        }
      }
    },
  ];
}

export { useReadURI };
