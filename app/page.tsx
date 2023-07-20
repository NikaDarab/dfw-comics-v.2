"use client";

import { useState } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [percent, setPercent] = useState<number>(0);

  // Handle file upload event and update state
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
      return;
    }

    const storageRef = ref(storage, `/files/${file.name} ${uuidv4()}`);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} accept="image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} done</p>
    </div>
  );
}

export default Page;
