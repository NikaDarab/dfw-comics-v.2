"use client";

import { useState } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function Page() {
  const [file, setFile] = useState<File | undefined>();
  const [percent, setPercent] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  function handleUpload() {
    if (file) {
      const name = file.name;
      const storageRef = ref(storage, `image/${name}+${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setPercent(percent); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            // url is the download URL of the file
            console.log(url);
            setDownloadURL(url);
          });
        }
      );
      return;
    }
    console.log("Please select a file");
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFile(e.target.files![0])
        }
        accept=""
      />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent}% done</p>
    </div>
  );
}

export default Page;
